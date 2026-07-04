/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { IndustryDetails } from '../types';

export const industriesData: IndustryDetails[] = [
  {
    id: 'finance',
    name: 'Financial Services',
    overview: 'Powering high-throughput transactional ledger infrastructures, fraud detection telemetry pipelines, and secure cloud-native bank-grade vaults.',
    challenges: [
      'Legacy transaction systems buckling during demand spikes',
      'Sophisticated real-time account breach threats',
      'Complex audit-trail logging requirements'
    ],
    solutions: [
      'High-performance microservices orchestrated via Kubernetes',
      'Real-time AI-powered transactional fraud detectors',
      'Globally consistent transactional ledger grids'
    ],
    benefits: [
      'Sub-millisecond ledger latencies over 35,000 requests/sec',
      'Zero-downtime ledger migration routines',
      '34% infrastructure maintenance cost reduction'
    ],
    techStack: ['Java', 'Spring Boot', 'Kubernetes', 'GCP Spanner', 'Kafka', 'Docker'],
    successStory: {
      client: 'Vanguard Capital Union',
      description: 'Migrated and modernized a core banking mainframe to a containerized, zero-trust cloud model.',
      impact: 'Accommodated a 3.5x customer transaction volume increase with zero downtime.'
    }
  },
  {
    id: 'government',
    name: 'Government & Public Sector',
    overview: 'Engineering accessible, high-security state portal hubs, digital ID lockers, and public ledger auditing platforms that operate at absolute scale.',
    challenges: [
      'Strict accessibility guidelines (WCAG) across public interfaces',
      'Vulnerabilities in sovereign state identity data storage',
      'Outdated legacy back-offices creating process queues'
    ],
    solutions: [
      'Fully compliant accessible portal designs styled with Tailwind CSS',
      'Secure self-sovereign digital locker services using private HSM keys',
      'Automated business registry licensing pipelines'
    ],
    benefits: [
      '100% WCAG accessibility compliance across all digital portals',
      'Instantaneous processing of corporate and business registry license claims',
      'Zero sovereign ledger data-leak incidents recorded'
    ],
    techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Odoo Core', 'Redis'],
    successStory: {
      client: 'Austin Public Enterprise Agency',
      description: 'Rebuilt the local business registration, licensing, and public reporting registry onto a modernized public cloud ledger framework.',
      impact: 'Trimmed registration backlogs by 88% and ensured complete multi-regional disaster recovery.'
    }
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    overview: 'Deploying compliant clinical data integrations, secure patient routing systems, and automated triage assistants that respect international privacy frameworks.',
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
      '72% reduction in emergency care record-retrieval latency',
      '94% decrease in administrative transcription bottlenecks',
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
    id: 'logistics',
    name: 'Mobility & Logistics',
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
    id: 'on-demand',
    name: 'On-demand Services',
    overview: 'Powering high-concurrency dispatch systems, real-time geolocation matching, and micro-payment disbursement rails for modern peer-to-peer applications.',
    challenges: [
      'Matching latency causing high user drop-offs during peak surge periods',
      'Flaky real-time coordinate syncing under poor network conditions',
      'Delayed payout disbursements causing partner churn'
    ],
    solutions: [
      'Low-latency geolocation indexing using geospatial database queries (Redis/PostGIS)',
      'Robust socket-reconnection protocols with optimistic client updates',
      'Automated transaction processing and instant payment payouts'
    ],
    benefits: [
      'Sub-200ms user-to-provider matching speedups',
      '100% coordinate sync precision over low-bandwidth mobile networks',
      '48% reduction in provider partner churn due to instant payout processing'
    ],
    techStack: ['Node.js', 'Redis Geospatial', 'WebSockets', 'Go API Router', 'PostgreSQL', 'Stripe API'],
    successStory: {
      client: 'QuickRun Deliveries',
      description: 'Designed and deployed a highly concurrent on-demand delivery dispatch broker serving 250,000 monthly active drivers.',
      impact: 'Reduced matching queues to under 300 milliseconds and completely eliminated partner payment delays.'
    }
  }
];
