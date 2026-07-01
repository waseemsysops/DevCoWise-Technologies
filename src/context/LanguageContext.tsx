import React, { createContext, useContext, useState, useEffect } from 'react';

export type LanguageType = 'EN' | 'DE' | 'ES' | 'FR' | 'AR';

export const translations = {
  EN: {
    // Navigation & General
    "nav.services": "Services",
    "nav.solutions": "Solutions",
    "nav.industries": "Industries",
    "nav.insights": "Insights",
    "nav.about": "About Us",
    "nav.careers": "Careers",
    "nav.contact": "Contact Us",
    "nav.products": "Products",
    "nav.caseStudies": "Case Studies",
    "nav.admin": "Admin Portal",
    
    // CTAs & Buttons
    "cta.contact": "Contact Us",
    "cta.requestAudit": "Request Core Systems Audit",
    "cta.viewSpecs": "View Technical Specifications",
    "cta.requestScoping": "Request Scoping Document",
    "cta.learnMore": "Learn More",
    "cta.applyNow": "Apply Now",
    "cta.submit": "Submit Inquiry",
    "cta.allPosts": "All Posts",
    "cta.readArticle": "Read Article",
    
    // Home Page Hero
    "hero.badge": "Engineering Digital Transformation",
    "hero.title_part1": "Enterprise Consulting Built For ",
    "hero.title_highlight": "Next-Generation",
    "hero.title_part2": " Scaling.",
    "hero.subtitle": "DEVCOWISE orchestrates robust custom software engineering, zero-trust cloud migrations, generative AI models, and tailored ERPNext implementations that drive global enterprise modernization.",
    "hero.systemsAudit": "Request Core Systems Audit",
    
    // Home Page Stats
    "stats.deployments": "Successful Deployments",
    "stats.deployments_desc": "Across 18 industries",
    "stats.staff": "Core Technical Staff",
    "stats.staff_desc": "Specialized engineers",
    "stats.retention": "Client Retention Index",
    "stats.retention_desc": "Long-term partnerships",
    "stats.offices": "Global Offices",
    "stats.offices_desc": "EMEA & APAC coverage",
    
    // Home Page Value Props
    "val.title": "Our Core Values",
    "val.subtitle": "Engineering paradigms that prioritize resilience, compliance, and long-term operating sovereignty.",
    "val.prop1_title": "Architectural Sovereignty",
    "val.prop1_desc": "We engineer zero-trust, server-authoritative models that protect operational integrity and insulate client datasets.",
    "val.prop2_title": "Open-Core ERP Pioneers",
    "val.prop2_desc": "Specialized deployments of ERPNext, Odoo, and S/4HANA that eliminate excessive recurring license liabilities.",
    "val.prop3_title": "Agentic AI Workflows",
    "val.prop3_desc": "Constructing robust background pipelines utilizing secure, server-side APIs to drive industrial productivity.",
    
    // Home Page Process
    "proc.title": "Our Delivery Lifecycle",
    "proc.subtitle": "A meticulous, phased approach engineered to deploy pristine, risk-free solutions.",
    "proc.step1_title": "Consulting & Scoping",
    "proc.step1_desc": "We conduct strict system audits to analyze data schemas and identify operational bottlenecks.",
    "proc.step2_title": "Security Safeguards",
    "proc.step2_desc": "Formulate zero-trust blueprints and access matrices prior to writing code lines.",
    "proc.step3_title": "Agile Engineering Sprints",
    "proc.step3_desc": "Our specialized development teams build scalable codebases inside containerized clusters.",
    "proc.step4_title": "Zero-Downtime Migration",
    "proc.step4_desc": "Secure data synchronization pipelines replace legacy backends without workflow interruption.",
    
    // Footer & Miscellaneous
    "footer.newsletter": "Join our technical newsletter",
    "footer.newsletter_desc": "Stay updated with the latest in digital transformation and security briefings.",
    "footer.copyright": "All rights reserved.",
    "footer.sitemap": "Sitemap",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookies Policy"
  },
  DE: {
    // Navigation & General
    "nav.services": "Dienstleistungen",
    "nav.solutions": "Lösungen",
    "nav.industries": "Branchen",
    "nav.insights": "Einblicke",
    "nav.about": "Über uns",
    "nav.careers": "Karriere",
    "nav.contact": "Kontakt",
    "nav.products": "Produkte",
    "nav.caseStudies": "Fallstudien",
    "nav.admin": "Admin-Portal",
    
    // CTAs & Buttons
    "cta.contact": "Kontaktieren Sie uns",
    "cta.requestAudit": "Kernsystem-Audit anfordern",
    "cta.viewSpecs": "Technische Spezifikationen anzeigen",
    "cta.requestScoping": "Scoping-Dokument anfordern",
    "cta.learnMore": "Mehr erfahren",
    "cta.applyNow": "Jetzt bewerben",
    "cta.submit": "Anfrage senden",
    "cta.allPosts": "Alle Beiträge",
    "cta.readArticle": "Artikel lesen",
    
    // Home Page Hero
    "hero.badge": "Digitale Transformation Gestalten",
    "hero.title_part1": "Unternehmensberatung für Skalierung der ",
    "hero.title_highlight": "nächsten Generation",
    "hero.title_part2": ".",
    "hero.subtitle": "DEVCOWISE orchestriert robuste kundenspezifische Softwareentwicklung, Zero-Trust-Cloud-Migrationen, generative KI-Modelle und maßgeschneiderte ERPNext-Implementierungen, die die globale Modernisierung von Unternehmen vorantreiben.",
    "hero.systemsAudit": "Kernsystem-Audit anfordern",
    
    // Home Page Stats
    "stats.deployments": "Erfolgreiche Bereitstellungen",
    "stats.deployments_desc": "In 18 Industriezweigen",
    "stats.staff": "Technisches Kernpersonal",
    "stats.staff_desc": "Spezialisierte Ingenieure",
    "stats.retention": "Kundenbindungsindex",
    "stats.retention_desc": "Langfristige Partnerschaften",
    "stats.offices": "Globale Büros",
    "stats.offices_desc": "EMEA- und APAC-Abdeckung",
    
    // Home Page Value Props
    "val.title": "Unsere Kernwerte",
    "val.subtitle": "Entwicklungsparadigmen, die Resilienz, Compliance und langfristige Betriebssouveränität in den Vordergrund stellen.",
    "val.prop1_title": "Architektonische Souveränität",
    "val.prop1_desc": "Wir entwickeln Zero-Trust- und server-autorisierte Modelle, die die betriebliche Integrität schützen und Kundendatensätze isolieren.",
    "val.prop2_title": "Pioniere im Open-Core ERP",
    "val.prop2_desc": "Spezialisierte Bereitstellungen von ERPNext, Odoo und S/4HANA, die übermäßige wiederkehrende Lizenzverbindlichkeiten eliminieren.",
    "val.prop3_title": "Agentische KI-Workflows",
    "val.prop3_desc": "Aufbau robuster Hintergrund-Pipelines unter Verwendung sicherer, serverseitiger APIs zur Steigerung der industriellen Produktivität.",
    
    // Home Page Process
    "proc.title": "Unser Bereitstellungslebenszyklus",
    "proc.subtitle": "Ein akribischer, phasenweiser Ansatz zur Bereitstellung einwandfreier, risikofreier Lösungen.",
    "proc.step1_title": "Beratung & Scoping",
    "proc.step1_desc": "Wir führen strenge Systemaudits durch, um Datenschemata zu analysieren und betriebliche Engpässe zu identifizieren.",
    "proc.step2_title": "Sicherheitsvorkehrungen",
    "proc.step2_desc": "Formulierung von Zero-Trust-Konzepten und Zugriffskontrollmatrizen vor dem Schreiben von Codezeilen.",
    "proc.step3_title": "Agile Entwicklungssprints",
    "proc.step3_desc": "Unsere spezialisierten Entwicklungsteams erstellen skalierbare Codebasen in containerisierten Clustern.",
    "proc.step4_title": "Unterbrechungsfreie Migration",
    "proc.step4_desc": "Sichere Datensynchronisationspipelines ersetzen Altsysteme ohne Unterbrechung der Arbeitsabläufe.",
    
    // Footer & Miscellaneous
    "footer.newsletter": "Abonnieren Sie unseren technischen Newsletter",
    "footer.newsletter_desc": "Bleiben Sie auf dem Laufenden mit den neuesten Entwicklungen in digitaler Transformation und Sicherheitsbriefings.",
    "footer.copyright": "Alle Rechte vorbehalten.",
    "footer.sitemap": "Sitemap",
    "footer.privacy": "Datenschutzerklärung",
    "footer.terms": "Nutzungsbedingungen",
    "footer.cookies": "Cookie-Richtlinie"
  },
  ES: {
    // Navigation & General
    "nav.services": "Servicios",
    "nav.solutions": "Soluciones",
    "nav.industries": "Industrias",
    "nav.insights": "Perspectivas",
    "nav.about": "Nosotros",
    "nav.careers": "Carreras",
    "nav.contact": "Contacto",
    "nav.products": "Productos",
    "nav.caseStudies": "Casos de Estudio",
    "nav.admin": "Portal de Admin",
    
    // CTAs & Buttons
    "cta.contact": "Contáctenos",
    "cta.requestAudit": "Solicitar Auditoría de Sistemas Core",
    "cta.viewSpecs": "Ver Especificaciones Técnicas",
    "cta.requestScoping": "Solicitar Documento de Alcance",
    "cta.learnMore": "Más Información",
    "cta.applyNow": "Postularse Ahora",
    "cta.submit": "Enviar Solicitud",
    "cta.allPosts": "Todas las Publicaciones",
    "cta.readArticle": "Leer Artículo",
    
    // Home Page Hero
    "hero.badge": "Diseñando la Transformación Digital",
    "hero.title_part1": "Consultoría Empresarial Diseñada para el Crecimiento de ",
    "hero.title_highlight": "Próxima Generación",
    "hero.title_part2": ".",
    "hero.subtitle": "DEVCOWISE orquesta una sólida ingeniería de software personalizado, migraciones seguras a la nube Zero-Trust, modelos de IA generativa e implementaciones personalizadas de ERPNext que impulsan la modernización empresarial global.",
    "hero.systemsAudit": "Solicitar Auditoría de Sistemas Core",
    
    // Home Page Stats
    "stats.deployments": "Implementaciones Exitosas",
    "stats.deployments_desc": "En 18 industrias",
    "stats.staff": "Personal Técnico Principal",
    "stats.staff_desc": "Ingenieros especializados",
    "stats.retention": "Índice de Retención de Clientes",
    "stats.retention_desc": "Alianzas a largo plazo",
    "stats.offices": "Oficinas Globales",
    "stats.offices_desc": "Cobertura en EMEA y APAC",
    
    // Home Page Value Props
    "val.title": "Nuestros Valores Core",
    "val.subtitle": "Paradigmas de ingeniería que priorizan la resiliencia, el cumplimiento normativo y la soberanía operativa a largo plazo.",
    "val.prop1_title": "Soberanía Arquitectónica",
    "val.prop1_desc": "Diseñamos modelos Zero-Trust con autorización en servidor para proteger la integridad operativa y aislar los datos del cliente.",
    "val.prop2_title": "Pioneros en ERP de Código Abierto",
    "val.prop2_desc": "Implementaciones especializadas de ERPNext, Odoo y S/4HANA que eliminan costos de licencia recurrentes y excesivos.",
    "val.prop3_title": "Flujos de Trabajo de IA Agéntica",
    "val.prop3_desc": "Construcción de pipelines robustos en segundo plano utilizando APIs seguras del lado del servidor para impulsar la productividad.",
    
    // Home Page Process
    "proc.title": "Nuestro Ciclo de Entrega",
    "proc.subtitle": "Un enfoque meticuloso y por fases diseñado para desplegar soluciones perfectas y sin riesgos.",
    "proc.step1_title": "Consultoría y Alcance",
    "proc.step1_desc": "Realizamos auditorías de sistemas estrictas para analizar esquemas de datos e identificar cuellos de botella.",
    "proc.step2_title": "Salvaguardas de Seguridad",
    "proc.step2_desc": "Formulamos planos de Zero-Trust y matrices de acceso antes de escribir líneas de código.",
    "proc.step3_title": "Sprints de Ingeniería Ágiles",
    "proc.step3_desc": "Nuestros equipos de desarrollo especializados construyen bases de código escalables en clústeres de contenedores.",
    "proc.step4_title": "Migración con Cero Tiempo de Inactividad",
    "proc.step4_desc": "Pipelines de sincronización de datos seguros reemplazan los sistemas heredados sin interrumpir el flujo de trabajo.",
    
    // Footer & Miscellaneous
    "footer.newsletter": "Únase a nuestro boletín técnico",
    "footer.newsletter_desc": "Manténgase actualizado con lo último en transformación digital e informes de seguridad.",
    "footer.copyright": "Todos los derechos reservados.",
    "footer.sitemap": "Mapa del sitio",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",
    "footer.cookies": "Política de Cookies"
  },
  FR: {
    // Navigation & General
    "nav.services": "Services",
    "nav.solutions": "Solutions",
    "nav.industries": "Secteurs",
    "nav.insights": "Analyses",
    "nav.about": "À Propos",
    "nav.careers": "Carrières",
    "nav.contact": "Contact",
    "nav.products": "Produits",
    "nav.caseStudies": "Études de Cas",
    "nav.admin": "Portail Admin",
    
    // CTAs & Buttons
    "cta.contact": "Contactez-nous",
    "cta.requestAudit": "Demander un Audit des Systèmes Centraux",
    "cta.viewSpecs": "Voir les Spécifications Techniques",
    "cta.requestScoping": "Demander un Document de Cadrage",
    "cta.learnMore": "En savoir plus",
    "cta.applyNow": "Postuler maintenant",
    "cta.submit": "Soumettre la demande",
    "cta.allPosts": "Tous les articles",
    "cta.readArticle": "Lire l'article",
    
    // Home Page Hero
    "hero.badge": "Façonner la Transformation Digitale",
    "hero.title_part1": "Conseil aux Entreprises Conçu pour la Croissance de ",
    "hero.title_highlight": "Nouvelle Génération",
    "hero.title_part2": ".",
    "hero.subtitle": "DEVCOWISE orchestre une ingénierie logicielle sur mesure robuste, des migrations cloud Zero-Trust, des modèles d'IA générative et des implémentations ERPNext personnalisées pour moderniser les entreprises à l'échelle mondiale.",
    "hero.systemsAudit": "Demander un Audit des Systèmes Centraux",
    
    // Home Page Stats
    "stats.deployments": "Déploiements Réussis",
    "stats.deployments_desc": "Dans 18 secteurs",
    "stats.staff": "Équipe Technique Principale",
    "stats.staff_desc": "Ingénieurs spécialisés",
    "stats.retention": "Taux de Rétention Client",
    "stats.retention_desc": "Partenariats à long terme",
    "stats.offices": "Bureaux Mondiaux",
    "stats.offices_desc": "Couverture EMEA & APAC",
    
    // Home Page Value Props
    "val.title": "Nos Valeurs Fondamentales",
    "val.subtitle": "Des paradigmes d'ingénierie qui privilégient la résilience, la conformité et la souveraineté opérationnelle à long terme.",
    "val.prop1_title": "Souveraineté Architecturale",
    "val.prop1_desc": "Nous concevons des modèles Zero-Trust et autorisés par le serveur pour protéger l'intégrité opérationnelle et isoler les données clients.",
    "val.prop2_title": "Pionniers de l'ERP Open-Core",
    "val.prop2_desc": "Déploiements spécialisés d'ERPNext, Odoo et S/4HANA qui éliminent les coûts de licence récurrents excessifs.",
    "val.prop3_title": "Flux de Travail d'IA Agentique",
    "val.prop3_desc": "Construction de pipelines d'arrière-plan robustes à l'aide d'APIs sécurisées côté serveur pour stimuler la productivité industrielle.",
    
    // Home Page Process
    "proc.title": "Notre Cycle de Livraison",
    "proc.subtitle": "Une approche minutieuse par étapes conçue pour déployer des solutions irréprochables et sans risque.",
    "proc.step1_title": "Conseil & Cadrage",
    "proc.step1_desc": "Nous réalisons des audits système rigoureux pour analyser les schémas de données et identifier les goulots d'étranglement.",
    "proc.step2_title": "Garanties de Securité",
    "proc.step2_desc": "Formulation de plans Zero-Trust et de matrices d'accès avant d'écrire toute ligne de code.",
    "proc.step3_title": "Sprints d'Ingénierie Agiles",
    "proc.step3_desc": "Nos équipes de développement spécialisées créent des bases de code évolutives dans des clusters de conteneurs.",
    "proc.step4_title": "Migration sans Interruption",
    "proc.step4_desc": "Des pipelines de synchronisation de données sécurisés remplacent les anciens systèmes sans interrompre l'activité.",
    
    // Footer & Miscellaneous
    "footer.newsletter": "Rejoignez notre newsletter technique",
    "footer.newsletter_desc": "Restez informé des dernières actualités en transformation digitale et en sécurité.",
    "footer.copyright": "Tous droits réservés.",
    "footer.sitemap": "Plan du site",
    "footer.privacy": "Politique de Confidentialité",
    "footer.terms": "Conditions d'Utilisation",
    "footer.cookies": "Politique des Cookies"
  },
  AR: {
    // Navigation & General
    "nav.services": "الخدمات",
    "nav.solutions": "الحلول",
    "nav.industries": "القطاعات",
    "nav.insights": "الرؤى",
    "nav.about": "من نحن",
    "nav.careers": "الوظائف",
    "nav.contact": "اتصل بنا",
    "nav.products": "المنتجات",
    "nav.caseStudies": "دراسات الحالة",
    "nav.admin": "بوابة الإدارة",
    
    // CTAs & Buttons
    "cta.contact": "اتصل بنا",
    "cta.requestAudit": "طلب تدقيق الأنظمة الأساسية",
    "cta.viewSpecs": "عرض المواصفات الفنية",
    "cta.requestScoping": "طلب وثيقة تحديد النطاق",
    "cta.learnMore": "تعرف على المزيد",
    "cta.applyNow": "تقدم بطلبك الآن",
    "cta.submit": "إرسال الاستفسار",
    "cta.allPosts": "جميع المقالات",
    "cta.readArticle": "اقرأ المقال",
    
    // Home Page Hero
    "hero.badge": "هندسة التحول الرقمي للمؤسسات",
    "hero.title_part1": "استشارات الأعمال المصممة للتوسع في ",
    "hero.title_highlight": "الجيل القادم",
    "hero.title_part2": ".",
    "hero.subtitle": "تقوم DEVCOWISE بإدارة وتطوير هندسة البرمجيات المخصصة القوية، وعمليات الهجرة السحابية الخالية من الثقة (Zero-Trust)، ونماذج الذكاء الاصطناعي التوليدي، وتطبيقات ERPNext المصممة خصيصاً والتي تدفع عجلة التحديث للمؤسسات العالمية.",
    "hero.systemsAudit": "طلب تدقيق الأنظمة الأساسية",
    
    // Home Page Stats
    "stats.deployments": "عمليات نشر ناجحة",
    "stats.deployments_desc": "عبر 18 قطاعاً صناعياً",
    "stats.staff": "الكادر الفني الأساسي",
    "stats.staff_desc": "مهندسون متخصصون",
    "stats.retention": "مؤشر حفظ العملاء",
    "stats.retention_desc": "شراكات طويلة الأجل",
    "stats.offices": "المكاتب العالمية",
    "stats.offices_desc": "تغطية كاملة في أوروبا والشرق الأوسط وآسيا",
    
    // Home Page Value Props
    "val.title": "قيمنا الأساسية",
    "val.subtitle": "نماذج هندسية تضع المرونة والامتثال والسيادة التشغيلية طويلة الأجل في المقدمة.",
    "val.prop1_title": "السيادة الهيكلية والتقنية",
    "val.prop1_desc": "نحن نصمم نماذج قائمة على خادم معتمد وصفر ثقة (Zero-Trust) لحماية السلامة التشغيلية وعزل مجموعات بيانات العملاء.",
    "val.prop2_title": "رواد أنظمة تخطيط الموارد المفتوحة",
    "val.prop2_desc": "عمليات نشر متخصصة لأنظمة ERPNext و Odoo و S/4HANA التي تقضي على تكاليف التراخيص المتكررة والمفرطة.",
    "val.prop3_title": "مهام سير العمل للذكاء الاصطناعي الوكيل",
    "val.prop3_desc": "بناء خطوط أنابيب خلفية قوية باستخدام واجهات برمجة تطبيقات آمنة من جانب الخادم لزيادة الإنتاجية الصناعية.",
    
    // Home Page Process
    "proc.title": "دورة حياة تسليم المشاريع",
    "proc.subtitle": "نهج دقيق ومرحلي مصمم لنشر حلول خالية من العيوب والمخاطر.",
    "proc.step1_title": "الاستشارات وتحديد النطاق",
    "proc.step1_desc": "نجري عمليات تدقيق صارمة للنظام لتحليل هياكل البيانات وتحديد الاختناقات التشغيلية.",
    "proc.step2_title": "ضمانات السلامة والأمن",
    "proc.step2_desc": "نصمم مخططات عدم الثقة ومصفوفات الوصول قبل كتابة أي سطر من التعليمات البرمجية.",
    "proc.step3_title": "دورات هندسية رشيقة",
    "proc.step3_desc": "تبني فرق التطوير المتخصصة لدينا قواعد برمجية قابلة للتطوير داخل مجموعات الحاويات.",
    "proc.step4_title": "هجرة خالية من التوقف",
    "proc.step4_desc": "تحل خطوط أنابيب مزامنة البيانات الآمنة محل الأنظمة القديمة دون انقطاع سير العمل.",
    
    // Footer & Miscellaneous
    "footer.newsletter": "انضم إلى نشرتنا الإخبارية الفنية",
    "footer.newsletter_desc": "ابق على اطلاع بآخر التطورات في التحول الرقمي والتقارير الأمنية.",
    "footer.copyright": "جميع الحقوق محفوظة.",
    "footer.sitemap": "خريطة الموقع",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",
    "footer.cookies": "سياسة ملفات الارتباط"
  }
};

interface LanguageContextProps {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: (key: keyof typeof translations.EN | string, defaultVal?: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageType>(() => {
    const saved = localStorage.getItem('app-language');
    return (saved as LanguageType) || 'EN';
  });

  const setLanguage = (lang: LanguageType) => {
    setLanguageState(lang);
    localStorage.setItem('app-language', lang);
  };

  useEffect(() => {
    // Dynamic RTL adjustment
    const root = document.documentElement;
    if (language === 'AR') {
      root.dir = 'rtl';
      root.lang = 'ar';
    } else {
      root.dir = 'ltr';
      root.lang = language.toLowerCase();
    }
  }, [language]);

  const t = (key: string, defaultVal?: string): string => {
    const langDict = translations[language] || translations.EN;
    // @ts-ignore
    return langDict[key] || translations.EN[key] || defaultVal || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
