import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

let aiClient: GoogleGenAI | null = null;

function getGemini(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is required");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Healthcheck
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // API Route: Fetch Tech Trends (with Google Search Grounding)
  app.post("/api/trends", async (req, res) => {
    try {
      const { query } = req.body;
      const searchQuery = query || "latest enterprise technology trends GenAI Cloud ERP Cybersecurity";

      const ai = getGemini();

      const prompt = `Search the web for real-time technology trends and updates regarding: "${searchQuery}".
Based on the latest search results, generate 3 highly detailed, professional advisory whitepapers/articles.
Each advisory must contain complete deep technical insights, realistic architectural choices, and practical suggestions.
Do not use placeholder text or generic summaries.

Output the result in a raw JSON array inside a markdown json codeblock.
Each JSON object in the array MUST contain exactly:
{
  "id": "unique-id",
  "title": "Advisory Title",
  "category": "Must be one of: 'AI Trends', 'Cloud', 'ERP', 'Cybersecurity', 'Tech Trends'",
  "summary": "Short 1-2 sentence summary",
  "content": "Detailed markdown article body",
  "author": "Author Name",
  "date": "YYYY-MM-DD",
  "readTime": "X min read"
}

Do not output any text before or after the JSON code block.`;

      // Use gemini-2.5-flash since it supports the search grounding tool correctly
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          tools: [{ googleSearch: {} }]
        }
      });

      const rawText = response.text;
      if (!rawText) {
        throw new Error("Empty response received from Gemini API");
      }

      // Extract and parse JSON
      let articles: any[] = [];
      try {
        const match = rawText.match(/```json\s*([\s\S]*?)\s*```/) || rawText.match(/```\s*([\s\S]*?)\s*```/);
        const jsonStr = match ? match[1] : rawText;
        articles = JSON.parse(jsonStr.trim());
      } catch (parseError: any) {
        console.error("Failed to parse JSON. Raw response was:", rawText);
        throw new Error("Failed to parse the generated technology trends.");
      }

      // Extract search grounding metadata sources if available
      const sources: string[] = [];
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      if (chunks) {
        for (const chunk of chunks) {
          if (chunk.web?.uri) {
            sources.push(chunk.web.uri);
          }
        }
      }

      // Attach sources to articles
      const enrichedArticles = articles.map((article: any, index: number) => ({
        ...article,
        sources: sources.slice(index * 2, (index + 1) * 2), // distribute some sources to each article
      }));

      res.json({
        success: true,
        articles: enrichedArticles,
        allSources: sources
      });

    } catch (error: any) {
      console.error("Error generating trends:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Failed to fetch real-time technology trends"
      });
    }
  });

  // API Route: Live Chat (Gemini Integration)
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ success: false, error: "Message is required" });
      }

      // Check if GEMINI_API_KEY is available
      const key = process.env.GEMINI_API_KEY;
      if (!key) {
        return res.json({
          success: true,
          text: `Hi there! I am the DEVCOWISE AI assistant. (Note: GEMINI_API_KEY is currently not configured in Settings > Secrets, but I am running in local simulation mode). How can I help you with ERPNext, Cloud architecture, or Cybersecurity?`
        });
      }

      const ai = getGemini();

      // Convert history to format expected by @google/genai
      const contents = [];
      if (Array.isArray(history)) {
        // Clean history and convert to user/model roles
        for (const msg of history) {
          if (msg.sender && msg.text) {
            contents.push({
              role: msg.sender === "user" ? "user" : "model",
              parts: [{ text: msg.text }]
            });
          }
        }
      }

      // Add the latest message if not already included in history
      const lastHistoryMessage = contents[contents.length - 1];
      if (!lastHistoryMessage || lastHistoryMessage.role !== "user" || lastHistoryMessage.parts[0].text !== message) {
        contents.push({
          role: "user",
          parts: [{ text: message }]
        });
      }

      const systemInstruction = `You are the DEVCOWISE AI Technical Architect, a highly professional IT systems and digital transformation consultant. 
Your tone is professional, authoritative, yet helpful and technically precise.
You provide advice on:
1. Digital Infrastructure Services (Cloud Migration, Kubernetes orchestration, FinOps, DevOps, 24/7 Managed Operations).
2. ERPNext & Open-Core ERP integration (Odoo, SAP migrations, custom business intelligence).
3. Cognitive Engineering & AI Labs (private generative AI, RAG pipelines, LLM fine-tuning, agentic workflows).
4. Cybersecurity & Zero-Trust database structures.
Keep responses concise, practical, and highly professional. Avoid generic fluff. Emphasize real engineering solutions.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({
        success: true,
        text: response.text || "I apologize, but I received an empty response. How can I assist you with your digital goals?"
      });

    } catch (error: any) {
      console.error("Error in Gemini Chat API:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Failed to process chat message"
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
