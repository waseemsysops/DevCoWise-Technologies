/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { IndustryDetails } from '../types';

export const industriesData: IndustryDetails[] = [
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    overview: 'Engineering resilient, highly compliant digital healthcare architectures that protect patient data while streamlining clinical collaboration.',
    challenges: [
      'Inoperability between legacy EHR databases causing clinical record latency',
      'High incidence of clerical errors during chart transfers',
      'Strict HIPAA, GDPR, and localized medical data privacy regulations'
    ],
    solutions: [
      'FHIR-compliant API proxy layers for secure, instant clinical syncs',
      'Encrypted mobile patient portals with biometric authentication',
      'AI-driven triage routing systems and predictive diagnostic assistants'
    ],
    benefits: [
      '94% reduction in manual record transcription and sharing errors',
      '72% improvement in system response times for emergency room lookups',
      'Fully audited workflows that guarantee medical standards compliance'
    ],
    techStack: ['React', 'Next.js', 'PostgreSQL', 'AWS', 'HL7 FHIR API', 'GraphQL'],
    successStory: {
      client: 'Apex Health Systems',
      description: 'Unified electronic records across 45 hospitals under a modern, highly secure HL7 FHIR framework.',
      impact: 'Eliminated manual record syncing wait times and improved ER response speeds by 72%.'
    }
  },
  {
    id: 'finance',
    name: 'Finance & Banking',
    overview: 'Accelerating transactional capabilities and security for global banking institutions through scalable cloud ledgers.',
    challenges: [
      'Legacy mainframes buckling under peak mobile transaction requests',
      'High threat vectors for transaction-related security breaches',
      'Strict regulatory requirements for financial data privacy'
    ],
    solutions: [
      'High-throughput microservices orchestrated by Kubernetes',
      'Globally consistent cloud database architectures (GCP Spanner)',
      'Real-time fraud detection pipelines running machine learning models'
    ],
    benefits: [
      '35k+ transactions per second handled with sub-millisecond lag',
      '34% reduction in cloud infrastructure maintenance costs',
      'Zero downtime during real-time ledger migrations'
    ],
    techStack: ['Java', 'Spring Boot', 'Kubernetes', 'GCP Spanner', 'Kafka', 'Docker'],
    successStory: {
      client: 'Vanguard Capital Union',
      description: 'Migrated and modernized a core banking mainframe to a containerized, zero-trust cloud model.',
      impact: 'Accommodated a 3.5x customer transaction volume increase with zero downtime.'
    }
  },
  {
    id: 'manufacturing',
    name: 'Smart Manufacturing',
    overview: 'Bridging the gap between factory floor machinery and business operations through Industrial IoT and automated intelligence.',
    challenges: [
      'Disconnected machine logs preventing real-time production visibility',
      'High financial costs due to unexpected assembly-line breakdowns',
      'Inefficient supply chain scheduling causing raw material stockouts'
    ],
    solutions: [
      'Industrial IoT gateways streaming machine telemetry over secure LoRaWAN networks',
      'Predictive maintenance dashboards powered by PyTorch models',
      'Automated ERP material replenishment integrations'
    ],
    benefits: [
      '22% reduction in unplanned assembly line downtime schedules',
      '15% increase in total manufacturing floor productivity metrics',
      'Dynamic automated material reordering loops that prevent bottlenecks'
    ],
    techStack: ['React', 'Node.js', 'Kafka', 'InfluxDB', 'OPC UA', 'Python'],
    successStory: {
      client: 'Dynasty Motor Corporation',
      description: 'Engineered a highly precise Manufacturing Execution System (MES) integrating robotic assembly nodes with inventory databases.',
      impact: 'Decreased factory floor downtime by 22% and boosted overall productivity index by 15%.'
    }
  },
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    overview: 'Powering seamless, high-speed, and integrated retail buying systems across both physical storefronts and online channels.',
    challenges: [
      'Disjointed inventories causing stockouts and online order cancellations',
      'Slow checkout processes at physical registers during busy seasons',
      'Difficulty personalizing offers for loyal online shoppers'
    ],
    solutions: [
      'Omni-channel point-of-sale systems with offline-first local database caches',
      'Real-time automated inventory trackers across stores and warehouses',
      'Personalized customer loyalty programs and smart pricing engines'
    ],
    benefits: [
      'Real-time multi-store inventory synchronization in under 2 seconds',
      '35% improvement in checkout speeds at local brick-and-mortar storefronts',
      '40% reduction in stock-out scenarios across retail outlets'
    ],
    techStack: ['React', 'TypeScript', 'GraphQL', 'MongoDB', 'Redis', 'RabbitMQ'],
    successStory: {
      client: 'Velvet Threads Fashion Group',
      description: 'Built a Progressive Web App (PWA) POS engine integrated with central warehouses.',
      impact: 'Completely eliminated data loss during network dropouts and raised store conversion volumes by 14%.'
    }
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    overview: 'Optimizing supply lines, delivery corridors, and asset utilization using advanced route planning and tracking tools.',
    challenges: [
      'Inefficient route scheduling leading to excessive fuel consumption',
      'Stale asset tracking data causing delays in global deliveries',
      'Low fleet utilization due to manual dispatch planning'
    ],
    solutions: [
      'Predictive vehicle routing engines using dynamic traffic models',
      'Real-time GPS tracking and transit status alert notifications',
      'Automated load allocation and container space optimizations'
    ],
    benefits: [
      'Over 2 million gallons of fuel saved via optimized delivery routing',
      'On-time delivery performance metrics boosted to 98.4%',
      '28% increase in overall fleet asset utilization margins'
    ],
    techStack: ['Python', 'PyTorch', 'Kafka', 'Redis', 'Node.js', 'React'],
    successStory: {
      client: 'SwiftCargo International',
      description: 'Engineered a real-time machine-learning-powered vehicle routing platform.',
      impact: 'Saved $4.8M annually on fleet operations with a direct payback period of only 4 months.'
    }
  }
];
