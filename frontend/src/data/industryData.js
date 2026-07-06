// ─── Industry detail registry ──────────────────────────────────────────────

const industryData = {
  'healthcare': {
    name: 'Healthcare',
    emoji: '❤️',
    tagline: 'Secure, compliant digital solutions that elevate patient care.',
    color: '#ef4444',
    description:
      'The healthcare sector demands software that combines flawless usability with strict data security and compliance (like HIPAA). Arha Technologies engineers modern telemedicine platforms, secure electronic health record (EHR) managers, and patient portal portals that streamline hospital workflows and improve clinical outcomes.',
    solutions: [
      'Telehealth & Virtual Consultations',
      'Electronic Health Records (EHR) Sync',
      'Patient Appointment Booking Portals',
      'Medical Device IoT Integrations',
    ],
    benefits: [
      'HIPAA compliant storage frameworks',
      'Instant clinical communications via secure sockets',
      'Automated medical billing and payment gateways',
      'Patient records indexing with advanced access audits',
    ]
  },
  'education': {
    name: 'Education',
    emoji: '🎓',
    tagline: 'Smart digital platforms that redefine learning and teaching.',
    color: '#3b82f6',
    description:
      'Modern education thrives on cloud-based learning management systems, online assessment tools, and virtual classrooms. We build interactive e-learning portals, student management hubs, and video-on-demand classrooms that empower institutions to scale virtual learning globally.',
    solutions: [
      'Learning Management Systems (LMS)',
      'Live Video Classrooms & Streaming',
      'Student Attendance & Grade Dashboards',
      'Interactive Online Exam Engines',
    ],
    benefits: [
      'Scalable hosting for thousands of concurrent students',
      'Real-time student progress analytics',
      'Automated grading and certificate generation',
      'Collaborative whiteboards and chat features',
    ]
  },
  'finance': {
    name: 'Finance & Banking',
    emoji: '🏦',
    tagline: 'Reliable, secure, and lightning-fast financial applications.',
    color: '#10b981',
    description:
      'In the financial sector, absolute security, data integrity, and high-frequency processing are non-negotiable. Arha Technologies engineers robust banking portals, investment dashboards, expense managers, and payment processors that protect user capital and log data transparently.',
    solutions: [
      'Custom Fintech & Wallet APIs',
      'Payment Gateway integrations (Stripe, Razorpay)',
      'Asset Management & Stock Dashboards',
      'Invoice Automation & Ledger software',
    ],
    benefits: [
      'Bank-grade encryption (AES-256) for capital protection',
      'Automated fraud detection transaction checks',
      'Microsecond latency accounting books and ledgers',
      'Interactive charts detailing ROI and yield trends',
    ]
  },
  'retail': {
    name: 'Retail & eCommerce',
    emoji: '🛒',
    tagline: 'High-converting virtual storefronts and inventory sync platforms.',
    color: '#eab308',
    description:
      'We construct premium custom eCommerce platforms, WooCommerce setups, and B2B wholesale portals designed to convert web visitors into active buyers. Our retail solutions handle everything from shopping carts and inventory synchronization to secure payment gateways.',
    solutions: [
      'Custom Multi-Vendor Marketplaces',
      'Headless Commerce Storefronts',
      'POS Software & API Syncing',
      'Loyalty Program & Reward scripts',
    ],
    benefits: [
      'Fluid checkout flow to reduce cart abandonment',
      'Automated shipping API integration',
      'Real-time inventory levels warning indicators',
      'Deep SEO optimization for product catalogs',
    ]
  },
  'manufacturing': {
    name: 'Manufacturing',
    emoji: '⚙️',
    tagline: 'Optimize supply chains, warehouse logs, and factory yields.',
    color: '#8b5cf6',
    description:
      'Manufacturers require real-time visibility into production pipelines, supply chains, and inventory schedules. We design custom ERP panels, factory monitoring tools, and logistics interfaces that minimize system bottlenecks and maximize operational efficiency.',
    solutions: [
      'Custom ERP & Warehouse Management',
      'Production Line Monitoring Panels',
      'Asset Tracking & IoT Sensor dashboards',
      'Supply Chain Logistics Sync',
    ],
    benefits: [
      'Interactive dashboards showing equipment metrics',
      'Automated inventory replenishment alerts',
      'Centralized logs for raw material tracking',
      'Predictive maintenance schedules visualization',
    ]
  },
  'logistics': {
    name: 'Logistics & Fleet',
    emoji: '🚚',
    tagline: 'Fleet tracking, shipment routing, and supply chain visibility.',
    color: '#06b6d4',
    description:
      'We engineer next-generation fleet logistics systems that track shipments, optimize delivery routes, and log driver schedules. Our systems enable shipping providers to offer real-time package status and automated status updates to global clients.',
    solutions: [
      'GPS Fleet Tracking & Dispatch',
      'Shipment Tracking Portals',
      'Driver Operations Log Book',
      'Warehouse Order Picking layouts',
    ],
    benefits: [
      'Real-time route optimization using maps APIs',
      'Instant SMS/Email package alerts',
      'Automated fuel consumption logs',
      'Barcoding/QR scanning integrations',
    ]
  },
  'real-estate': {
    name: 'Real Estate',
    emoji: '🏢',
    tagline: 'Interactive property listings and property management portals.',
    color: '#f97316',
    description:
      'We build sleek property search portals, real estate CRM systems, and tenant management solutions. We empower agencies to showcase properties using 3D virtual tour integrations, automated lead routing, and lease contract signing scripts.',
    solutions: [
      'Property Listing Directory search engines',
      'Real Estate Agent CRMs',
      'Tenant Billing & Maintenance platforms',
      'Interactive virtual floorplan viewers',
    ],
    benefits: [
      'Advanced map search and radius filters',
      'Tenant payment collection dashboards',
      'Automated contract document signatures',
      'Broker sales pipeline visualizers',
    ]
  },
  'hospitality': {
    name: 'Hospitality',
    emoji: '🛎️',
    tagline: 'Enhance guest bookings, hotel operations, and table reservations.',
    color: '#ec4899',
    description:
      'We engineer hotel booking portals, restaurant reservation scripts, and guest feedback tools that elevate customer satisfaction. Our hotel software manages room availability, guest check-in files, and automated booking receipts.',
    solutions: [
      'Room Booking & Reservation Engines',
      'Restaurant Table Booking software',
      'Guest Loyalty Card managers',
      'Staff Shift Scheduling portals',
    ],
    benefits: [
      'Real-time booking calendars with double-booking safety',
      'Seamless stripe payments for room deposits',
      'Interactive restaurant seating arrangements creator',
      'Guest billing receipts auto-emailing',
    ]
  },
  'startups': {
    name: 'Startups',
    emoji: '🚀',
    tagline: 'Rapid MVP scaling, modular components, and cloud launches.',
    color: '#06b6d4',
    description:
      'Startups need agile software development channels to test ideas and scale code architectures at speed. We serve as technical partners, building high-speed React MVPs, robust Node.js APIs, and serverless hosting infrastructures designed to acquire early capital funding.',
    solutions: [
      'Agile MVP Design & Launch',
      'Rapid SaaS Backend development',
      'Subscription billing & User Accounts',
      'Automated CI/CD code deployments',
    ],
    benefits: [
      'Short development cycles to beat competitors to market',
      'Clean, modular codebases prepared for scaling',
      'Integration of product analytics (Mixpanel, Hotjar)',
      'Cost-optimized cloud resource architectures',
    ]
  },
  'government': {
    name: 'Government',
    emoji: '🏛️',
    tagline: 'Transparent, secure, and accessible public service portals.',
    color: '#6366f1',
    description:
      'Citizen-centric public portals demand bulletproof security, high availability, and compliance with accessibility laws. We construct secure public directory portals, permit request forms, and dashboard tools that increase transparency and efficiency.',
    solutions: [
      'Public Service Directory portals',
      'Permit Request & Application forms',
      'Public Document filing databases',
      'Grievance Redressal dashboards',
    ],
    benefits: [
      'Compliance with Web Accessibility Guidelines (WCAG)',
      'DDoS protection and SQL-injection hardened backends',
      'Multi-department form routing scripts',
      'Encrypted backup file systems',
    ]
  }
};

export default industryData;
