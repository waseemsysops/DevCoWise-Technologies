/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'medlink-ehr',
    title: 'MedLink Smart EHR System Integration',
    client: 'Apex Health Systems',
    industry: 'Healthcare',
    overview: 'Consolidated records for a network of 45 hospitals under a modern, unified, FHIR-compliant Electronic Health Record system.',
    problem: 'Siloed database instances leading to critical data latency and human error in transferring patient care charts.',
    challenges: [
      'Integrating legacy DB2 records with strict HIPAA compliance guidelines',
      'Minimizing medical staff training curves and preventing performance drops',
      'Maintaining 99.999% uptime during data migration schedules'
    ],
    solution: 'Designed and implemented a React-based front-end with a secure GraphQL proxy layer, connected to an encrypted cloud-hosted HL7 FHIR service with automated pipeline audits.',
    technologies: ['React', 'Next.js', 'PostgreSQL', 'AWS', 'GraphQL', 'HL7 FHIR API'],
    architecture: 'Microservices architecture with NextJS gateways, Node.js proxy routers, and RDS PostgreSQL with Read-Replicas.',
    timeline: '14 Months',
    results: [
      'Eliminated manual record syncing time completely (reduced from 45 min to real-time)',
      'Improved record access speeds by 72%',
      'Reduced medical processing errors by 94%'
    ],
    roi: '220% ROI in 12 months due to operational efficiency and reduced clinical overhead.',
    testimonial: {
      quote: "DEVCOWISE transformed how our practitioners collaborate across states. Patient charts are now instant, highly secure, and intuitive.",
      author: "Dr. Althea Vance",
      role: "Chief Medical Officer, Apex Health Systems"
    }
  },
  {
    id: 'finsecure-cloud',
    title: 'FinSecure Cloud Banking Platform',
    client: 'Vanguard Capital Union',
    industry: 'Finance',
    overview: 'Migrated and modernized a core banking mainframe into an elastically scalable, zero-trust cloud native container model.',
    problem: 'Monolithic legacy systems unable to support modern high-throughput mobile banking requests, causing micro-outages during peak hours.',
    challenges: [
      'Exacting transactional consistency requirements (ACID compliance)',
      'Uncompromising PCI-DSS level 1 security and encryption guidelines',
      'Zero loss tolerance during real-time ledger transition'
    ],
    solution: 'Designed a highly redundant, containerized spring-boot microservices engine orchestrated by Kubernetes, utilizing Google Cloud Spanner for globally consistent high-performance database writes.',
    technologies: ['Java', 'Spring Boot', 'Kubernetes', 'Google Cloud', 'Docker', 'GCP Spanner'],
    architecture: 'Event-driven, distributed transaction ledger architecture leveraging Kafka streaming pipelines and multi-region failover pools.',
    timeline: '18 Months',
    results: [
      'Achieved peak system throughput of 45,000 transactions per second',
      'Decreased cloud infrastructure operating costs by 34%',
      'Eliminated transaction-related latency spikes'
    ],
    roi: '185% cost savings and 3.5x customer transaction growth capability.',
    testimonial: {
      quote: "The zero-downtime ledger migration executed by DEVCOWISE was an absolute masterpiece of cloud engineering.",
      author: "Richard Sterling",
      role: "Head of Infrastructure, Vanguard Capital Union"
    }
  },
  {
    id: 'logitrack-fleet',
    title: 'LogiTrack AI Fleet Router',
    client: 'SwiftCargo International',
    industry: 'Logistics',
    overview: 'Engineered a real-time predictive vehicle routing engine powered by machine learning models that optimize delivery corridors dynamic parameters.',
    problem: 'Manual planning methods leading to high fuel overheads, delays from unexpected traffic conditions, and underutilized logistics capacity.',
    challenges: [
      'Processing thousands of real-time GPS streams per second',
      'Unpredictable urban traffic trends, weather anomalies, and driver availability constraints',
      'Seamless integration with old onboard telemetric units'
    ],
    solution: 'Built a streaming Python analytics hub coupled with a React-based dispatcher interface. Applied PyTorch heuristic models to dynamically forecast road congestion and recalculate delivery patterns.',
    technologies: ['Python', 'PyTorch', 'Node.js', 'React', 'Kafka', 'Redis', 'Docker'],
    architecture: 'Stream-processing framework using Apache Kafka, dynamic spatial index clustering via Redis, and high-performance serverless modeling.',
    timeline: '9 Months',
    results: [
      'Saved 2.1 million gallons of fuel in the first 6 months',
      'Boosted on-time delivery percentages to 98.4%',
      'Enhanced fleet asset utilization margins by 28%'
    ],
    roi: 'Saved $4.8M annually on fleet operations with a direct payback period of only 4 months.',
    testimonial: {
      quote: "Our dispatchers can now schedule twice the load volumes with half the manual overhead, thanks to the dynamic AI system.",
      author: "Farhan Siddiqui",
      role: "VP of Logistics, SwiftCargo"
    }
  },
  {
    id: 'edustream-campus',
    title: 'EduStream Global Virtual Campus',
    client: 'Horizon Academic Syndicate',
    industry: 'Education',
    overview: 'Deployed a responsive, interactive virtual classroom environment handling synchronous HD feeds and integrated smart assessments for 200,000 active learners.',
    problem: 'Fragmented legacy LMS platforms collapsing during peak exam sessions, failing to support high-fidelity video streams under low bandwidth contexts.',
    challenges: [
      'Ensuring fluid 1080p feeds under 3G wireless cellular connections',
      'Integrating smart proctoring with robust browser containment',
      'Standardized SCORM and LTI asset integrations'
    ],
    solution: 'Engineered a WebRTC-powered visual delivery application, supplemented by robust offline-first content capabilities and automated AI grading assists.',
    technologies: ['Next.js', 'WebRTC', 'Node.js', 'Kubernetes', 'MongoDB', 'AWS S3'],
    architecture: 'Edge-distributed asset caching system combined with microservice endpoints handling session scheduling and scoring logic.',
    timeline: '11 Months',
    results: [
      'Sustained 210,000 concurrent video sessions without server lag',
      'Improved digital test completion scores by 18%',
      'Drastically reduced bandwidth delivery expenses by 42%'
    ],
    roi: '$1.2M saved in recurring legacy license fees and streamlined infrastructure.',
    testimonial: {
      quote: "A genuinely scalable, modern educational tool. The UI is clean, responsive, and students love the built-in collaborative whiteboards.",
      author: "Prof. Sarah Jenkins",
      role: "Director of Digital Learning, Horizon Academic Syndicate"
    }
  },
  {
    id: 'retailsync-pos',
    title: 'RetailSync Omni-Channel POS Solution',
    client: 'Velvet Threads Fashion Group',
    industry: 'Retail',
    overview: 'Developed a real-time point-of-sale and live-inventory integration platform spanning 320 global storefronts.',
    problem: 'Frequent stock-outs and inventory discrepancies between online storefronts and local warehouses, leading to missed customer opportunities.',
    challenges: [
      'Synchronizing multi-site physical POS registers with e-commerce inventories',
      'Supporting localized offline transactional caching during retail network dropouts',
      'Strict multi-currency and regional tax compliancy matrix grids'
    ],
    solution: 'Designed an offline-first POS engine using Progressive Web App patterns, syncing data to an enterprise hub via a reliable, message-queue-driven architecture.',
    technologies: ['React', 'TypeScript', 'PWA', 'GraphQL', 'MongoDB', 'Express', 'Redis'],
    architecture: 'Local SQLite caches on terminal units communicating with a central cloud-based MongoDB cluster via reliable RabbitMQ event streams.',
    timeline: '8 Months',
    results: [
      'Synchronized multi-store inventory updates in under 2 seconds',
      'Improved cross-store customer checkout speeds by 35%',
      'Completely eliminated data loss during retail connectivity outages'
    ],
    roi: 'Increased retail checkout conversion volumes by 14% and cut stock-out scenarios by 40%.',
    testimonial: {
      quote: "Our store managers are highly productive. They can check real-time stock at other branches instantly and close sales confidently.",
      author: "Camille Laurent",
      role: "VP of Retail, Velvet Threads Fashion Group"
    }
  },
  {
    id: 'agrigrow-iot',
    title: 'AgriGrow Precision IoT Farming Suite',
    client: 'Biogreen Agronomic Co.',
    industry: 'Agriculture',
    overview: 'Implemented an automated soil and hydration sensory telemetry platform connected to automated irrigation control valves across 12,000 hectares.',
    problem: 'Imprecise watering practices leading to water waste, uneven crop yields, and high operational field monitoring costs.',
    challenges: [
      'Deploying sensory micro-transmitters across vast rural lands with weak connectivity',
      'Interpreting raw sensor logs into practical, user-friendly farmer metrics',
      'Correlating weather forecasts with local irrigation valves'
    ],
    solution: 'Utilized low-power LoRaWAN networks to stream sensor logs into a central processing dashboard. Added automated triggers that modulate water distribution based on actual crop hydration metrics.',
    technologies: ['IoT Gateway', 'Python', 'Flask', 'InfluxDB', 'LoRaWAN', 'Google Cloud', 'React'],
    architecture: 'Edge computing nodes collecting sensor telemetry, streaming to an InfluxDB time-series backend with dynamic alerts triggered via Node-RED logic.',
    timeline: '10 Months',
    results: [
      'Reduced water consumption by 35% across all test farms',
      'Increased overall crop harvest yield values by 12%',
      'Minimized manual field monitoring schedules'
    ],
    roi: 'Achieved complete project self-funding within the first harvest cycle.',
    testimonial: {
      quote: "Precision farming is now a reality. The dashboard is accessible on our phones, letting us monitor fields from anywhere.",
      author: "Hector Alvarez",
      role: "Chief Agronomist, Biogreen Agronomic"
    }
  },
  {
    id: 'autoassemble-mes',
    title: 'AutoAssemble Smart Factory MES',
    client: 'Dynasty Motor Corporation',
    industry: 'Automotive',
    overview: 'Engineered a highly precise Manufacturing Execution System (MES) integrating robotic assembly nodes with warehouse inventories.',
    problem: 'Siloed industrial PLCs causing delays in identifying assembly line blockages, leading to manufacturing line idle cycles.',
    challenges: [
      'Consolidating disparate industrial protocols (OPC UA, Modbus)',
      'Displaying assembly line states in near-zero latency dashboards',
      'Predicting machine failures before line breakdowns occur'
    ],
    solution: 'Configured high-performance industrial gateways streaming OPC UA logs to an enterprise Kafka system, visualised in a React-based factory control panel with predictive maintenance indicators.',
    technologies: ['React', 'Node.js', 'Kafka', 'InfluxDB', 'OPC UA', 'Kubernetes', 'Python'],
    architecture: 'Industrial IoT message broker streaming to time-series caches and real-time visualization frontends via custom WebSocket channels.',
    timeline: '16 Months',
    results: [
      'Decreased factory floor downtime schedules by 22%',
      'Boosted manufacturing line productivity indices by 15%',
      'Secured microsecond response times for predictive safety triggers'
    ],
    roi: 'A return of $3.2M saved in unplanned manufacturing line downtime within 9 months.',
    testimonial: {
      quote: "DEVCOWISE matched deep industrial expertise with modern software structures. Our lines run smoother and smarter.",
      author: "Marcus Chen",
      role: "VP of Factory Operations, Dynasty Motor Corp"
    }
  },
  {
    id: 'ecopower-grid',
    title: 'EcoPower Smart Grid Optimizer',
    client: 'NexGen Energy Network',
    industry: 'Energy',
    overview: 'Modernized a regional electricity distribution grid with dynamic, AI-based energy load balancing and wind/solar storage distribution models.',
    problem: 'Inefficient wind and solar power routing during generation surges, causing system stress and requiring expensive gas peaker plant activations.',
    challenges: [
      'Forecasting sub-hourly weather anomalies affecting solar and wind output',
      'Balancing high-voltage power transfers across regional transmission grids',
      'Ensuring resilience against cybersecurity grid attack patterns'
    ],
    solution: 'Designed an intelligent demand-response engine that balances local battery reserves and active consumer grids using fast predictive model predictive control logic.',
    technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'Docker', 'React', 'FastAPI'],
    architecture: 'Decentralized control loop microservices communicating over encrypted TLS networks with automated backup nodes.',
    timeline: '12 Months',
    results: [
      'Reduced auxiliary peaker plant activations by 41%',
      'Optimized renewable energy capture rates by 26%',
      'Enhanced grid resilience parameters under thermal loads'
    ],
    roi: 'Cut carbon offsets and fuel expenses, paying off the modernization budget in 14 months.',
    testimonial: {
      quote: "The balancing model has proven resilient under extreme heatwaves. An extraordinary leap in grid management automation.",
      author: "Elena Rostov",
      role: "Director of System Planning, NexGen Energy"
    }
  },
  {
    id: 'govserve-identity',
    title: 'GovServe Citizen Identity Vault',
    client: 'Federal Ministry of Digitalization',
    industry: 'Government',
    overview: 'Engineered a highly secure, decentralized biometric and identity framework for municipal and civil registration.',
    problem: 'Inefficient paper processes, identity fraud vectors, and long processing lines for basic document certifications.',
    challenges: [
      'Strict legal compliance with regional data privacy laws (GDPR-grade)',
      'Protecting data from highly sophisticated cybersecurity breach attempts',
      'Integrating system with over 20 provincial registers'
    ],
    solution: 'Developed an encrypted distributed identity database utilizing cryptographic security keys and robust multi-factor verification, exposed via a user-friendly civic mobile application.',
    technologies: ['TypeScript', 'Node.js', 'Kubernetes', 'PostgreSQL', 'Docker', 'Redis'],
    architecture: 'High-security zero-trust microservice architecture utilizing HSM modules and end-to-end payload signature controls.',
    timeline: '22 Months',
    results: [
      'Reduced document processing wait times from 14 days to 4 minutes',
      'Successfully verified over 8 million citizen identity requests',
      'Zero identity theft incidents reported since platform launch'
    ],
    roi: 'Reduced administrative overhead costs by $12M annually.',
    testimonial: {
      quote: "An elite technical execution. Our citizen registry has set a new global benchmark for public administration digitalization.",
      author: "Director General Tariq Malik",
      role: "Federal Ministry of Digitalization"
    }
  },
  {
    id: 'insurverify-claims',
    title: 'InsurVerify Blockchain Claims Platform',
    client: 'Continental Mutual Insurance',
    industry: 'Insurance',
    overview: 'Constructed an automated vehicle insurance claim validator utilizing digital damage scans and smart-contract verification rules.',
    problem: 'Snail-paced claims processing times (average 18 days) and rising rates of duplicate or fraudulent auto repair claims.',
    challenges: [
      'Deploying computer vision models to accurately classify car panel damage',
      'Ensuring smart contract integrity against custom transaction exploits',
      'Seamless integration with traditional claim adjusting databases'
    ],
    solution: 'Deployed web-based scanning clients utilizing WebGL and custom PyTorch damage classification systems. Confirms valid claims on a private hyperledger platform for automated settlement processing.',
    technologies: ['Hyperledger', 'Node.js', 'Python', 'PyTorch', 'React Native', 'AWS'],
    architecture: 'Distributed enterprise ledger with secure AI image-processing containers running as serverless pipelines.',
    timeline: '15 Months',
    results: [
      'Reduced average claim settlement timelines to under 2 hours',
      'Successfully flagged and blocked over $3.4M in fraudulent claim files',
      'Dramatically improved user satisfaction scores by 48%'
    ],
    roi: 'Achieved full system development payback within the first quarter of going live.',
    testimonial: {
      quote: "The automated validation model handles minor auto claims instantly. Our adjusters can now focus on complex investigations.",
      author: "Robert Miller",
      role: "Chief of Auto Claims, Continental Mutual"
    }
  },
  {
    id: 'constructpulse-bim',
    title: 'ConstructPulse BIM Integrator',
    client: 'BuildCorp Structures Ltd.',
    industry: 'Construction',
    overview: 'Created a collaborative site progress-tracker and Building Information Modeling (BIM) model-viewer accessible in real-time from mobile tablets on-site.',
    problem: 'Frequent miscommunications between engineering draftsmen and active on-site workers, causing rework due to stale blueprints.',
    challenges: [
      'Rendering heavy 3D CAD files fluidly on entry-level mobile devices',
      'Syncing offline structural annotations back to central masters',
      'Integrating construction procurement workflows'
    ],
    solution: 'Configured an optimized Three.js spatial model render pipeline paired with an offline-first mobile app framework that syncs blueprints upon connection.',
    technologies: ['React', 'Three.js', 'React Native', 'Node.js', 'MongoDB', 'AWS'],
    architecture: 'Client-side WebGL engine coupled with an enterprise REST API and CDN file-caching services.',
    timeline: '10 Months',
    results: [
      'Reduced construction errors and structural rework schedules by 32%',
      'Enhanced blueprint update sharing rates between teams by 80%',
      'Improved field team alignment and milestone tracking speed'
    ],
    roi: 'Saved BuildCorp an estimated $1.8M in blueprint materials and structural corrections.',
    testimonial: {
      quote: "Being able to pull up our 3D design plans right on the build deck has resolved hundreds of structural disputes instantly.",
      author: "Ahmad Raza",
      role: "Project Manager, BuildCorp Structures"
    }
  },
  {
    id: 'propmanage-crm',
    title: 'PropManage Real Estate CRM platform',
    client: 'Elite Properties Group',
    industry: 'Real Estate',
    overview: 'Engineered a multi-tenant client-acquisition portal and broker transaction system for high-end real estate operations.',
    problem: 'Leads falling out of pipelines due to manual contact schedules and disjointed paper bidding records.',
    challenges: [
      'Synchronizing MLS property directories in real-time',
      'Securing broker portal access control models',
      'Processing digital earnest-money deposits securely'
    ],
    solution: 'Developed a rich React web application paired with custom Salesforce integrations and structured automated email pipelines.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Salesforce API', 'AWS'],
    architecture: 'Monitored API gateway router routing to decoupled tenant services with transactional database lock guards.',
    timeline: '8 Months',
    results: [
      'Boosted broker conversion ratios by 24%',
      'Reduced property transaction closing times by 5 days',
      'Automated 90% of prospective buyer follow-ups'
    ],
    roi: 'Increased total property sales volume by $18M in 12 months.',
    testimonial: {
      quote: "This portal streamline broker work and keeps prospective buyers engaged. It's the engine behind our recent sales record.",
      author: "Zara Al-Mansoor",
      role: "Managing Director, Elite Properties Group"
    }
  },
  {
    id: 'telcoscale-billing',
    title: 'TelcoScale Core Billing Upgrade',
    client: 'Nexis Telecom Group',
    industry: 'Telecommunication',
    overview: 'Re-engineered a legacy telecommunication billing core with robust, high-availability microservices.',
    problem: 'Slow batch-billing systems creating delays in customer service activation and leading to high bill discrepancies.',
    challenges: [
      'Replacing high-volume mainframe billing scripts with secure digital tools',
      'Maintaining 100% database availability during high peak call-volume windows',
      'Processing micro-billing logs for millions of active mobile connections'
    ],
    solution: 'Replaced batch processing with a real-time reactive streaming system powered by Scala and Akka, writing to distributed databases.',
    technologies: ['Scala', 'Kafka', 'PostgreSQL', 'Docker', 'Kubernetes', 'GCP'],
    architecture: 'Distributed reactive stream processing cluster with real-time replication and active-active multi-region clustering.',
    timeline: '20 Months',
    results: [
      'Achieved real-time customer bill calculations and plan updates',
      'Reduced customer billing disputes by 88%',
      'Sustained 99.999% platform availability across peak holidays'
    ],
    roi: 'Saved $5.4M annually in billing dispute reconciliations and administration fees.',
    testimonial: {
      quote: "The billing platform has allowed us to launch new dynamic subscription programs with confidence.",
      author: "David Vance",
      role: "Chief Technology Officer, Nexis Telecom"
    }
  },
  {
    id: 'hospitable-guest',
    title: 'Hospitable Guest Engine Analytics',
    client: 'Luxe Resorts World',
    industry: 'Hospitality',
    overview: 'Constructed an integrated customer experience platform tracking room bookings, in-hotel dining, and spa requests.',
    problem: 'Poor personalization of loyalty program services due to siloed data tracking databases in different resort wings.',
    challenges: [
      'Consolidating diverse POS and booking engines in one user ledger',
      'Delivering personalized in-app guest deals based on historical stays',
      'Managing room keycard systems securely'
    ],
    solution: 'Built a central profile engine connected to customer channels, offering mobile check-in and automated resort recommendations.',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'Redis', 'PostgreSQL', 'AWS'],
    architecture: 'Microservices with centralized customer schemas, utilizing Redis for real-time guest request updates.',
    timeline: '12 Months',
    results: [
      'Increased resort digital loyalty guest interactions by 40%',
      'Reduced reception check-in bottlenecks by 65%',
      'Raised guest satisfaction ratings across resorts'
    ],
    roi: 'Boosted average in-resort guest spend by 22% in the first holiday season.',
    testimonial: {
      quote: "Guests love using their phones as keycards and ordering drinks directly to their beach chairs. Brilliant engineering.",
      author: "Sofia Loren",
      role: "Global Director of Hospitality, Luxe Resorts"
    }
  },
  {
    id: 'travelease-holiday',
    title: 'TravelEase Dynamic Holiday Engine',
    client: 'Voyage Global Operators',
    industry: 'Travel',
    overview: 'Created an intelligent, multi-provider holiday package engine that compiles flights, hotels, and activities in under 3 seconds.',
    problem: 'High customer cart-abandonment rates due to slow package generation speeds from traditional API providers.',
    challenges: [
      'Aggregating search queries from over 80 travel suppliers simultaneously',
      'Managing rapid inventory and price fluctuations dynamically',
      'Building search interfaces optimized for slow networks'
    ],
    solution: 'Designed an asynchronous package engine using fast caching layers and parallel search workers, delivering highly responsive results.',
    technologies: ['React', 'Next.js', 'Go', 'Redis', 'Docker', 'AWS'],
    architecture: 'Highly concurrent worker pool model in Go, storing results in Redis caches, with a NextJS front-end.',
    timeline: '11 Months',
    results: [
      'Reduced travel search times by 84%',
      'Achieved a 34% increase in online booking conversions',
      'Capable of managing 12,000 concurrent user search requests'
    ],
    roi: 'Directly generated an additional $3.6M in sales during the initial 6 months of use.',
    testimonial: {
      quote: "Our booking rates spiked immediately. Customers can customize and lock down their holiday plans in seconds.",
      author: "Markus Schmidt",
      role: "VP of Product, Voyage Global Operators"
    }
  },
  {
    id: 'safeguard-cyber',
    title: 'SafeGuard Enterprise Threat Intelligence ERP',
    client: 'Defense Tech Systems',
    industry: 'Cyber Security',
    overview: 'Implemented an advanced threat-intelligence gathering and incident-response platform for federal installations.',
    problem: 'Difficulty tracking digital security alerts across multiple servers, leaving systems open to lateral attacks.',
    challenges: [
      'Ingesting 10TB+ of server security logs daily',
      'Real-time threat classification and anomaly isolation',
      'Strict security requirements for intelligence tools'
    ],
    solution: 'Built a high-performance network intelligence platform using Apache Spark for stream analysis, coupled with robust server dashboard panels.',
    technologies: ['React', 'Python', 'Spark', 'Elasticsearch', 'Kubernetes', 'Docker'],
    architecture: 'Clustered log-collection agents communicating with an Elasticsearch indexing cluster and Spark analysis engine.',
    timeline: '18 Months',
    results: [
      'Reduced cyber threat detection times from 18 hours to 2 seconds',
      'Successfully identified and isolated 100% of network intrusion tests',
      'Automated security-alert reports for compliance compliance audits'
    ],
    roi: 'Protected highly sensitive assets worth billions from targeted persistent attack threats.',
    testimonial: {
      quote: "The visual dash provides absolute clarity under fire. Incident isolation times are essentially instantaneous now.",
      author: "Gen. Arthur Vance",
      role: "Director of Cyber Defense, Defense Tech Systems"
    }
  },
  {
    id: 'erpnext-supply-chain',
    title: 'ERPNext Global Supply Chain Core',
    client: 'Atlas Heavy Industries',
    industry: 'ERP Solutions',
    overview: 'Implemented and customized an enterprise-grade ERPNext system across five international manufacturing centers.',
    problem: 'Decentralized inventory ledgers causing high procurement delays, mismatched material planning, and delayed financials.',
    challenges: [
      'Migrating 10 years of historic supply logs from legacy spreadsheets',
      'Customizing ERPNext multi-currency ledger matching algorithms',
      'Deploying on-premise fallback database replicas'
    ],
    solution: 'Configured and launched customized ERPNext nodes in Kubernetes clusters. Created automated material planning pipelines and integrated local barcode inventory systems.',
    technologies: ['ERPNext', 'Python', 'Frappe Framework', 'MariaDB', 'Docker', 'React'],
    architecture: 'Multi-node MariaDB setup with Frappe background workers orchestrated via Kubernetes.',
    timeline: '10 Months',
    results: [
      'Consolidated global financial books in 1 day (down from 14 days)',
      'Reduced excess manufacturing warehouse inventory by 24%',
      'Streamlined raw material procurement cycles by 38%'
    ],
    roi: '$1.4M saved in inventory storage fees and streamlined logistics operations in the first year.',
    testimonial: {
      quote: "DEVCOWISE deep ERP expertise made our global launch a breeze. We finally have a single source of truth.",
      author: "Siddique Al-Jamil",
      role: "Chief Operating Officer, Atlas Heavy Industries"
    }
  },
  {
    id: 'odoo-franchise',
    title: 'Odoo Multi-Tenant Franchise Suite',
    client: 'BakeStar Global Outlets',
    industry: 'ERP Solutions',
    overview: 'Engineered a multi-tenant Odoo system serving 450 franchise bakers across 8 countries.',
    problem: 'Franchise branches operating separate accounting software, creating billing mismatch disputes with central ingredient supply nodes.',
    challenges: [
      'Isolating franchise tenant data safely under multi-tenant structures',
      'Automating franchise ingredient purchase requests with central depots',
      'Translating tax structures and currencies for cross-border operations'
    ],
    solution: 'Created a unified Odoo instance with advanced parent-child multi-company configurations, automating purchase orders and sales invoices.',
    technologies: ['Odoo', 'Python', 'PostgreSQL', 'Docker', 'Nginx', 'Vue.js'],
    architecture: 'Custom Odoo core modules with containerized multi-database PostgreSQL instances routed via Nginx reverse proxies.',
    timeline: '12 Months',
    results: [
      'Automated franchise order processing (reducing work time by 90%)',
      'Eliminated billing mismatches completely between franchises and HQ',
      'Streamlined localized sales tax filings'
    ],
    roi: 'Increased total central supply sales by 18% through automated franchise reorder cycles.',
    testimonial: {
      quote: "A flawless ERP modern upgrade. Franchises can manage local staff and inventories, while we get instant financial reporting.",
      author: "Jane Sterling",
      role: "CFO, BakeStar Global Outlets"
    }
  },
  {
    id: 'dynamics-steel',
    title: 'Microsoft Dynamics Steel Mill Core',
    client: 'Indus Steel Founders',
    industry: 'ERP Solutions',
    overview: 'Modernized heavy manufacturing resource trackers using Microsoft Dynamics 365 Finance & Operations.',
    problem: 'Outdated custom software unable to integrate with modern automated furnace and weight sensors, causing delays.',
    challenges: [
      'Interfacing with legacy mill telemetry and weight sensors',
      'Implementing strict safety-check signoffs in administrative queues',
      'Handling high temperature alert logging'
    ],
    solution: 'Implemented Dynamics 365 Finance & Operations. Used Azure IoT Hubs to capture factory sensor logs directly into the production module.',
    technologies: ['Microsoft Dynamics', 'Azure IoT Hub', 'C#', 'SQL Server', 'Power BI'],
    architecture: 'Azure-cloud managed Dynamics core with secure sensor ingestion gateways on the mill floor.',
    timeline: '14 Months',
    results: [
      'Increased mill production capacity by 14% via smart scheduling',
      'Captured sensor log entries with 100% reliability',
      'Shortened purchase-approval cycles from 5 days to 2 hours'
    ],
    roi: '$2.8M returned in material waste reductions and optimized energy utilization.',
    testimonial: {
      quote: "An excellent upgrade. Our mill floor is fully synchronized with our finance books for the first time.",
      author: "Kamran Shah",
      role: "Director of Production, Indus Steel Founders"
    }
  },
  {
    id: 'sap-petrochemical',
    title: 'SAP S/4HANA Petrochemical Hub',
    client: 'Gulf Petro-Chem Holdings',
    industry: 'ERP Solutions',
    overview: 'Modernized a legacy SAP R/3 setup to S/4HANA across 14 deepwater ports and refining terminals.',
    problem: 'Severe database locks during end-of-quarter financial runs, blocking supply loading schedules.',
    challenges: [
      'Migrating multi-terabyte transactional databases without refinery downtime',
      'Customizing SAP Fiori dashboards for port logistics operations',
      'Ensuring compliance with international petrochemical safety laws'
    ],
    solution: 'Designed a dual-phase S/4HANA migration pipeline utilizing high-performance HANA servers, creating customized SAP Fiori mobile clients.',
    technologies: ['SAP S/4HANA', 'SAP Fiori', 'ABAP', 'SAP HANA Database', 'Azure'],
    architecture: 'Enterprise HANA database clusters hosted on Azure high-performance cloud VMs with local terminal access caching.',
    timeline: '24 Months',
    results: [
      'Financial processing speeds boosted by 10x',
      'Consolidated port loading plans automatically, cutting ship turnaround times by 22%',
      'Zero downtime occurred during system migration phase'
    ],
    roi: 'Recouped the modernization investment in 18 months via port log efficiencies.',
    testimonial: {
      quote: "DEVCOWISE SAP transition team is highly specialized and precise. A masterfully managed project.",
      author: "Hassan Al-Jubail",
      role: "Chief Information Officer, Gulf Petro-Chem"
    }
  }
];
