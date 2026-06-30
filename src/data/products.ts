/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from '../types';

export const productsData: Product[] = [
  {
    id: 'wise-erp',
    name: 'WiseERP Enterprise',
    tagline: 'The Ultimate Enterprise Resource Planning Hub',
    description: 'A completely unified resource planning suite incorporating advanced supply chain, finances, assets, and project accounting trackers.',
    features: [
      'Multi-currency ledger matching and automated tax compliance matrices',
      'Real-time material planning and multi-warehouse stock allocations',
      'Integrated procurement pipelines and supplier management matrices'
    ],
    targetAudience: 'Large Scale Manufacturers, Heavy Industries, Global Exporters'
  },
  {
    id: 'wise-crm',
    name: 'WiseCRM Core',
    tagline: 'Deepen Client Connections, Accelerate Conversions',
    description: 'An intelligent customer relationship platform equipped with automated sales queues, contract builders, and visual lead scoreboards.',
    features: [
      'Automated email and prospective client campaign queues',
      'Detailed visual pipeline scoreboards and agent assignment tables',
      'Seamless native Salesforce and HubSpot integration hooks'
    ],
    targetAudience: 'Global Consulting Firms, Real Estate Developers, B2B SaaS Groups'
  },
  {
    id: 'wise-hrms',
    name: 'WiseHRMS Portal',
    tagline: 'Simplifying Workforce Management and Payroll',
    description: 'A comprehensive human resource portal that automates global team payrolls, tax withholdings, performance check-ins, and vacation queues.',
    features: [
      'Cryptographic employee identity cards and biometric check-ins',
      'Automated multi-region payroll processing and tax filings',
      'Self-service employee request hubs for expenses and time off'
    ],
    targetAudience: 'SMEs, Multi-national Corporate Operations, Tech Groups'
  },
  {
    id: 'wise-wms',
    name: 'WiseWMS Flow',
    tagline: 'Optimize Warehouse Spaces, Drive Fast Pickings',
    description: 'An intelligent, high-throughput warehouse management suite supporting spatial mapping, forklift routing, and automated barcode scanners.',
    features: [
      '3D spatial warehouse map creation and item placement guides',
      'Forklift and stockpicker route calculations that prevent traffic',
      'Native integration with industrial hand-held barcode scanner systems'
    ],
    targetAudience: 'Third-party Logistics (3PL) Providers, E-commerce Giants'
  },
  {
    id: 'wise-hospital',
    name: 'WiseHospital EHR',
    tagline: 'Patient-centric Clinical Workflows and Management',
    description: 'An HL7 FHIR-compliant clinical database system tracking outpatient visits, surgery queues, laboratory logs, and prescription files.',
    features: [
      'Biometric patient identification checks and chart vaults',
      'Real-time lab report generation and clinical share interfaces',
      'Strict automated audit-logging logs that guarantee privacy laws compliance'
    ],
    targetAudience: 'Hospitals, Ambulatory Surgery Centers, Specialized Clinics'
  },
  {
    id: 'wise-school',
    name: 'WiseSchool LMS',
    tagline: 'Cultivating Academic Achievements in Digital Campuses',
    description: 'An interactive school and learning management platform enabling live virtual classrooms, grading tables, and student portals.',
    features: [
      'Interactive live classrooms utilizing high-fidelity low-latency streams',
      'Automated assignment proctoring models and grading databases',
      'Secure parent communication logs and tuition payments channels'
    ],
    targetAudience: 'K-12 Institutes, Academic Syndicates, Global Universities'
  }
];
