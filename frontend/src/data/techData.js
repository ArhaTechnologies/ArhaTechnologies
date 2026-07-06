// ─── All technology details ────────────────────────────────────────────────
// image: one of  /tech_database.png | /tech_web.png | /tech_mobile.png | /tech_cloud.png | /about_team.png

const techData = {

  /* ══════════════ DATABASE ══════════════ */
  'sql-server': {
    name: 'SQL Server',
    emoji: '🗄️',
    category: 'Database Development',
    categoryColor: '#3b82f6',
    image: '/tech_database.png',
    tagline: 'Enterprise-grade relational database by Microsoft.',
    description:
      'Microsoft SQL Server is a powerful relational database management system (RDBMS) trusted by enterprises worldwide. It provides robust data storage, advanced querying, and built-in business intelligence capabilities. Arha Technologies uses SQL Server to build secure, scalable, and high-performance backend data layers for corporate applications.',
    features: [
      'ACID-compliant transactions for data integrity',
      'Advanced T-SQL stored procedures & triggers',
      'In-memory OLTP for high-speed processing',
      'Built-in reporting via SQL Server Reporting Services',
      'Row-level security and encryption',
      'Seamless integration with Azure cloud',
    ],
    useCases: ['ERP Systems', 'Financial Platforms', 'Healthcare Records', 'E-Commerce Backends'],
  },

  'mysql': {
    name: 'MySQL',
    emoji: '🐬',
    category: 'Database Development',
    categoryColor: '#3b82f6',
    image: '/tech_database.png',
    tagline: 'The world\'s most popular open-source relational database.',
    description:
      'MySQL is the go-to open-source relational database for web applications. Known for its speed, reliability, and ease of use, MySQL powers some of the world\'s largest websites. At Arha Technologies, we use MySQL to build fast and scalable backends for web platforms, SaaS products, and content-heavy applications.',
    features: [
      'High-performance read/write operations',
      'Full-text search & indexing',
      'Master-slave replication for scalability',
      'ACID transactions with InnoDB engine',
      'JSON data type support for hybrid storage',
      'Cross-platform compatibility',
    ],
    useCases: ['Web Portals', 'SaaS Platforms', 'CMS Backends', 'API Data Layers'],
  },

  'mongodb': {
    name: 'MongoDB',
    emoji: '🍃',
    category: 'Database Development',
    categoryColor: '#3b82f6',
    image: '/tech_database.png',
    tagline: 'Flexible NoSQL database for modern applications.',
    description:
      'MongoDB is a leading NoSQL document database that stores data in flexible JSON-like documents. It is the ideal choice for applications that require fast iteration, dynamic schemas, and horizontal scalability. Arha Technologies uses MongoDB for real-time apps, product catalogs, and any use case demanding schema flexibility.',
    features: [
      'Schema-less document storage (BSON format)',
      'Horizontal sharding for massive scale',
      'Aggregation pipeline for complex analytics',
      'Atlas cloud hosting with auto-scaling',
      'Real-time change streams for event-driven apps',
      'Multi-document ACID transactions',
    ],
    useCases: ['Real-Time Apps', 'Product Catalogs', 'IoT Platforms', 'Content Management'],
  },

  'postgresql': {
    name: 'PostgreSQL',
    emoji: '🐘',
    category: 'Database Development',
    categoryColor: '#3b82f6',
    image: '/tech_database.png',
    tagline: 'The world\'s most advanced open-source relational database.',
    description:
      'PostgreSQL is a powerful, standards-compliant open-source RDBMS known for its reliability, feature richness, and extensibility. It supports advanced data types like JSON, arrays, and geospatial data. Arha Technologies leverages PostgreSQL for complex, data-intensive applications requiring advanced querying and strict data integrity.',
    features: [
      'Full SQL compliance with advanced extensions',
      'JSONB data type for hybrid relational-document storage',
      'PostGIS extension for geospatial queries',
      'Parallel query execution for performance',
      'Row-level security (RLS)',
      'Logical & streaming replication',
    ],
    useCases: ['GIS Applications', 'Analytics Platforms', 'Financial Systems', 'Multi-tenant SaaS'],
  },

  'power-bi': {
    name: 'Power BI',
    emoji: '📊',
    category: 'Database Development',
    categoryColor: '#3b82f6',
    image: '/tech_database.png',
    tagline: 'Transform raw data into interactive business insights.',
    description:
      'Microsoft Power BI is a leading business intelligence and data visualization platform. It connects to hundreds of data sources and lets you create rich, interactive dashboards and reports. Arha Technologies builds custom Power BI dashboards that give business owners and managers real-time visibility into their KPIs and operational metrics.',
    features: [
      'Connect to 100+ data sources (SQL, Excel, APIs)',
      'Drag-and-drop report builder',
      'Real-time streaming dashboards',
      'DAX language for advanced calculations',
      'Row-level security for multi-user reports',
      'Embed reports in web apps via Power BI Embedded',
    ],
    useCases: ['Sales Dashboards', 'Executive KPI Reports', 'Inventory Analytics', 'Financial Reporting'],
  },

  /* ══════════════ WEB DEVELOPMENT ══════════════ */
  'react-js': {
    name: 'React.js',
    emoji: '⚛️',
    category: 'Web Development',
    categoryColor: '#06b6d4',
    image: '/tech_web.png',
    tagline: 'Build fast, interactive UIs with component-based architecture.',
    description:
      'React.js is the most popular JavaScript library for building dynamic user interfaces. Developed by Meta, React uses a virtual DOM and a component-based model to create blazing-fast, reusable UI elements. Arha Technologies specializes in React SPA development, delivering smooth, app-like web experiences for businesses of all sizes.',
    features: [
      'Virtual DOM for optimized rendering',
      'Reusable component architecture',
      'React Hooks for state and side-effect management',
      'Context API & Redux for global state',
      'SSR support via Next.js integration',
      'Vast ecosystem: React Router, React Query, Framer Motion',
    ],
    useCases: ['Single Page Applications', 'Admin Dashboards', 'E-Commerce Frontends', 'SaaS Portals'],
  },

  'next-js': {
    name: 'Next.js',
    emoji: '🔺',
    category: 'Web Development',
    categoryColor: '#06b6d4',
    image: '/tech_web.png',
    tagline: 'The React framework for production-ready web apps.',
    description:
      'Next.js is the industry-leading React framework for building production-ready web applications with server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR). Arha Technologies builds SEO-optimized, high-performance web platforms using Next.js that load instantly and rank higher on search engines.',
    features: [
      'Server-Side Rendering (SSR) for SEO',
      'Static Site Generation (SSG) for ultra-fast loads',
      'API Routes for backend-in-frontend development',
      'Automatic code splitting & lazy loading',
      'Image optimization with next/image',
      'Edge runtime & middleware support',
    ],
    useCases: ['Marketing Websites', 'E-Commerce Stores', 'Blogs & CMS', 'Full-Stack Web Apps'],
  },

  'node-js': {
    name: 'Node.js',
    emoji: '🟢',
    category: 'Web Development',
    categoryColor: '#06b6d4',
    image: '/tech_web.png',
    tagline: 'Scalable server-side JavaScript runtime.',
    description:
      'Node.js is a powerful JavaScript runtime built on Chrome\'s V8 engine that enables server-side programming. Its non-blocking, event-driven architecture makes it ideal for real-time applications and high-throughput APIs. Arha Technologies uses Node.js with Express to build fast, scalable REST APIs and backend microservices.',
    features: [
      'Non-blocking async I/O for high concurrency',
      'Express & Fastify for REST API creation',
      'WebSocket support for real-time features',
      'npm ecosystem with 2M+ packages',
      'Microservices and serverless compatibility',
      'Streams API for efficient data processing',
    ],
    useCases: ['REST APIs', 'Real-Time Chat', 'Microservices', 'Streaming Platforms'],
  },

  'typescript': {
    name: 'TypeScript',
    emoji: '🔷',
    category: 'Web Development',
    categoryColor: '#06b6d4',
    image: '/tech_web.png',
    tagline: 'JavaScript with types — catch bugs before they ship.',
    description:
      'TypeScript is a typed superset of JavaScript developed by Microsoft. It adds optional static typing, interfaces, generics, and advanced tooling to JavaScript, making large-scale codebases maintainable and reliable. Arha Technologies uses TypeScript by default in all major projects to ensure code quality, refactoring safety, and team-wide clarity.',
    features: [
      'Static type checking for early error detection',
      'Interfaces & generics for reusable code',
      'Strict mode for maximum safety',
      'Full IDE autocompletion & refactoring support',
      'Compiles to clean vanilla JavaScript',
      'Decorator support for metadata programming',
    ],
    useCases: ['Large-Scale Frontends', 'Node.js Backends', 'Shared Libraries', 'Enterprise Apps'],
  },

  'javascript': {
    name: 'JavaScript',
    emoji: '💛',
    category: 'Web Development',
    categoryColor: '#06b6d4',
    image: '/tech_web.png',
    tagline: 'The language of the web — dynamic, versatile, universal.',
    description:
      'JavaScript is the foundational scripting language of the web, running in every browser and on servers via Node.js. It powers interactive UI, dynamic content, form validation, animations, and much more. Arha Technologies writes modern ES2024+ JavaScript using best practices to deliver clean, maintainable, cross-browser compatible code.',
    features: [
      'Runs natively in all modern browsers',
      'Async/await & Promises for async code',
      'ES Modules for clean code organization',
      'Prototype-based OOP & functional programming',
      'DOM manipulation & event handling',
      'Full-stack via Node.js on the server',
    ],
    useCases: ['Interactive Websites', 'Browser Extensions', 'Web Animations', 'Full-Stack Apps'],
  },

  'asp-net': {
    name: 'ASP.NET',
    emoji: '🔵',
    category: 'Web Development',
    categoryColor: '#06b6d4',
    image: '/tech_web.png',
    tagline: 'Enterprise web framework by Microsoft on the .NET platform.',
    description:
      'ASP.NET is Microsoft\'s mature, enterprise-grade web framework for building dynamic web applications and APIs. It offers MVC architecture, Razor pages, SignalR for real-time features, and deep integration with Azure. Arha Technologies uses ASP.NET for corporate portals, enterprise backends, and large-scale .NET ecosystem projects.',
    features: [
      'MVC & Razor Pages architecture',
      'SignalR for real-time push notifications',
      'Identity & authentication built-in',
      'Entity Framework ORM for database access',
      'High performance via Kestrel web server',
      'Native Azure & Active Directory integration',
    ],
    useCases: ['Enterprise Portals', 'Corporate Intranets', 'Government Websites', 'ERP Frontends'],
  },

  'net-core': {
    name: '.NET Core',
    emoji: '⚙️',
    category: 'Web Development',
    categoryColor: '#06b6d4',
    image: '/tech_web.png',
    tagline: 'Cross-platform, high-performance framework for modern apps.',
    description:
      '.NET Core (now .NET 8+) is Microsoft\'s open-source, cross-platform successor to the .NET Framework. It delivers exceptional performance, supports Windows/Linux/macOS, and powers everything from microservices to machine learning. Arha Technologies uses .NET Core to build high-throughput APIs, background workers, and enterprise microservices.',
    features: [
      'Cross-platform: Windows, Linux, macOS',
      'Top-ranked performance in TechEmpower benchmarks',
      'Minimal API & gRPC for microservices',
      'Dependency injection built-in',
      'Docker & Kubernetes ready',
      'ML.NET for machine learning integration',
    ],
    useCases: ['Microservices', 'High-Performance APIs', 'Background Services', 'Cloud-Native Apps'],
  },

  'angular': {
    name: 'Angular',
    emoji: '🅰️',
    category: 'Web Development',
    categoryColor: '#06b6d4',
    image: '/tech_web.png',
    tagline: 'Full-featured TypeScript framework by Google.',
    description:
      'Angular is a comprehensive, opinionated TypeScript front-end framework maintained by Google. It provides everything you need — routing, forms, HTTP, animations, and dependency injection — out of the box. Arha Technologies uses Angular for building large-scale enterprise SPAs where a consistent, structured architecture is critical.',
    features: [
      'Two-way data binding for dynamic UIs',
      'Dependency Injection (DI) system',
      'RxJS-powered reactive programming',
      'Built-in routing & lazy module loading',
      'Angular Material UI component library',
      'Ahead-of-Time (AOT) compilation',
    ],
    useCases: ['Enterprise SPAs', 'Admin Panels', 'Banking Dashboards', 'Corporate Portals'],
  },

  'wordpress': {
    name: 'WordPress',
    emoji: '🌐',
    category: 'Web Development',
    categoryColor: '#06b6d4',
    image: '/tech_web.png',
    tagline: 'Power 43% of the web with the world\'s #1 CMS.',
    description:
      'WordPress is the world\'s most popular Content Management System (CMS), powering over 43% of all websites. With thousands of themes and plugins, it enables rapid deployment of blogs, business sites, and e-commerce stores. Arha Technologies builds custom WordPress themes, WooCommerce stores, and headless WordPress setups for clients.',
    features: [
      'Gutenberg block editor for no-code content',
      '60,000+ plugins for any feature',
      'WooCommerce for full e-commerce capability',
      'REST API for headless CMS usage',
      'Multi-site network for managing many sites',
      'SEO-friendly with Yoast & RankMath',
    ],
    useCases: ['Business Websites', 'Blogs & News Sites', 'Online Stores', 'Portfolio Sites'],
  },

  'python': {
    name: 'Python',
    emoji: '🐍',
    category: 'Web Development',
    categoryColor: '#06b6d4',
    image: '/tech_web.png',
    tagline: 'Versatile language for web, AI, and automation.',
    description:
      'Python is a high-level, versatile programming language renowned for its readability and vast library ecosystem. From web development (Django, FastAPI) to machine learning and automation, Python\'s simplicity accelerates development. Arha Technologies uses Python to build web APIs, automation scripts, and AI-powered features.',
    features: [
      'Django & FastAPI for rapid web development',
      'Pandas & NumPy for data processing',
      'Scikit-learn & TensorFlow for ML/AI',
      'Selenium & Scrapy for web scraping',
      'Celery for async task queues',
      'Extensive standard library & PyPI packages',
    ],
    useCases: ['Web APIs', 'Data Analytics', 'Machine Learning', 'Automation Scripts'],
  },

  'php': {
    name: 'PHP',
    emoji: '🐘',
    category: 'Web Development',
    categoryColor: '#06b6d4',
    image: '/tech_web.png',
    tagline: 'Server-side scripting that powers 80% of the web.',
    description:
      'PHP is a widely-used server-side scripting language embedded in HTML, powering giants like Facebook, Wikipedia, and WordPress. Modern PHP (8.x) offers typed properties, fibers, enums, and match expressions — making it a capable, production-ready language. Arha Technologies uses PHP with Laravel to build clean, structured web backends.',
    features: [
      'Laravel framework for structured MVC apps',
      'Eloquent ORM for elegant database operations',
      'Composer for dependency management',
      'PHP 8.x: typed props, enums, match expressions',
      'Blade templating for clean views',
      'PHPUnit for robust unit testing',
    ],
    useCases: ['CMS Platforms', 'E-Commerce Sites', 'REST API Backends', 'Legacy System Migrations'],
  },

  'ecommerce': {
    name: 'eCommerce',
    emoji: '🛒',
    category: 'Web Development',
    categoryColor: '#06b6d4',
    image: '/tech_web.png',
    tagline: 'Custom online stores built to convert and scale.',
    description:
      'Arha Technologies builds fully custom e-commerce solutions tailored to your product catalog, checkout flow, and brand experience. Whether it\'s a WooCommerce-powered store, a headless Shopify setup, or a fully custom-built marketplace, we engineer end-to-end shopping experiences that maximize conversions and customer satisfaction.',
    features: [
      'Custom product catalog & filtering',
      'Secure Stripe & Razorpay payment integration',
      'Real-time inventory management',
      'Multi-vendor marketplace support',
      'Order tracking & fulfillment flows',
      'Cart abandonment & promo engine',
    ],
    useCases: ['Retail Stores', 'B2B Marketplaces', 'Subscription Commerce', 'Digital Product Sales'],
  },

  /* ══════════════ MOBILE APP ══════════════ */
  'android': {
    name: 'Android',
    emoji: '🤖',
    category: 'Mobile App Development',
    categoryColor: '#8b5cf6',
    image: '/tech_mobile.png',
    tagline: 'Native Android apps for 3 billion+ devices.',
    description:
      'Android is the world\'s most widely used mobile operating system, running on over 3 billion devices. Native Android development using Kotlin delivers the best performance, deepest hardware integration, and access to the full Google Play ecosystem. Arha Technologies builds polished, performant Android apps from concept to Play Store launch.',
    features: [
      'Jetpack Compose for modern declarative UI',
      'Kotlin coroutines for async operations',
      'Room database for local storage',
      'WorkManager for background tasks',
      'Google Maps, Firebase & Play Services integration',
      'App Bundle for optimized Play Store delivery',
    ],
    useCases: ['Consumer Apps', 'Business Tools', 'On-Demand Services', 'IoT Controllers'],
  },

  'ios': {
    name: 'iOS',
    emoji: '🍎',
    category: 'Mobile App Development',
    categoryColor: '#8b5cf6',
    image: '/tech_mobile.png',
    tagline: 'Premium iOS apps for iPhone and iPad.',
    description:
      'iOS powers Apple\'s iPhone, iPad, and iPod Touch devices. Native iOS development using Swift delivers exceptional performance, tight system integration, and access to Apple\'s premium user base. Arha Technologies builds beautiful, intuitive iOS apps that follow Apple\'s Human Interface Guidelines and pass App Store review with ease.',
    features: [
      'SwiftUI for declarative, fluid interfaces',
      'Core Data for local persistence',
      'Push notifications via APNs',
      'Face ID / Touch ID biometric authentication',
      'HealthKit, ARKit & CoreML integration',
      'TestFlight for beta distribution',
    ],
    useCases: ['Premium Consumer Apps', 'Enterprise Tools', 'Fintech Apps', 'Health & Wellness Apps'],
  },

  'react-native': {
    name: 'React Native',
    emoji: '⚛️',
    category: 'Mobile App Development',
    categoryColor: '#8b5cf6',
    image: '/tech_mobile.png',
    tagline: 'One codebase, two platforms — native performance.',
    description:
      'React Native allows developers to build truly native iOS and Android apps using JavaScript and React. Sharing up to 90% of code between platforms dramatically reduces development time and cost without sacrificing native feel. Arha Technologies uses React Native to deliver high-quality cross-platform mobile apps at speed.',
    features: [
      'Single codebase for iOS & Android',
      'Native UI components (not WebView)',
      'Expo for rapid prototyping & OTA updates',
      'React Navigation for smooth screen transitions',
      'Access to device camera, GPS, biometrics',
      'Hot Reload for instant development feedback',
    ],
    useCases: ['Cross-Platform Apps', 'MVP Products', 'Startup Mobile Apps', 'Enterprise Mobile Tools'],
  },

  'flutter': {
    name: 'Flutter',
    emoji: '💙',
    category: 'Mobile App Development',
    categoryColor: '#8b5cf6',
    image: '/tech_mobile.png',
    tagline: 'Google\'s UI toolkit for beautiful natively compiled apps.',
    description:
      'Flutter is Google\'s open-source UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase using the Dart language. Its custom rendering engine (Skia/Impeller) delivers pixel-perfect UIs at 60/120 fps. Arha Technologies uses Flutter to build stunning multi-platform apps with premium visual polish.',
    features: [
      'Single codebase for mobile, web & desktop',
      'Custom widget tree for pixel-perfect UIs',
      '60/120 fps smooth animations',
      'Hot reload & hot restart for rapid development',
      'Rich animation & gesture APIs',
      'Strong type system via Dart language',
    ],
    useCases: ['Cross-Platform Apps', 'Interactive UIs', 'Startup MVPs', 'Consumer Apps'],
  },

  /* ══════════════ UI/UX DESIGN ══════════════ */
  'ui-ux-design': {
    name: 'UI/UX Design',
    emoji: '🎨',
    category: 'UI/UX Design',
    categoryColor: '#ec4899',
    image: '/about_team.png',
    tagline: 'Design experiences that delight users and drive conversions.',
    description:
      'UI/UX design is the art and science of creating digital interfaces that are both visually stunning and deeply intuitive. At Arha Technologies, our design process is research-driven and user-centered — from wireframes to high-fidelity Figma prototypes. We craft every interaction to maximize user satisfaction and business outcomes.',
    features: [
      'User research & persona development',
      'Information architecture & user flows',
      'Low-fi wireframing to high-fi Figma prototypes',
      'Interactive click-through prototypes for testing',
      'Design system & component library creation',
      'Usability testing & iterative refinement',
    ],
    useCases: ['Web App Design', 'Mobile App Design', 'Brand Identity', 'Design System Creation'],
  },

  'front-end-dev': {
    name: 'Front-End Dev',
    emoji: '💻',
    category: 'UI/UX Design',
    categoryColor: '#ec4899',
    image: '/about_team.png',
    tagline: 'Pixel-perfect, performant front-end engineering.',
    description:
      'Front-end development bridges the gap between design and functionality — transforming beautiful mockups into living, interactive web experiences. Arha Technologies front-end engineers write semantic, accessible, and performance-optimized HTML/CSS/JS that renders flawlessly across all devices and browsers.',
    features: [
      'Semantic HTML5 & accessible ARIA patterns',
      'Responsive CSS with Flexbox & Grid',
      'CSS animations & micro-interactions',
      'Core Web Vitals optimization (LCP, CLS, FID)',
      'Cross-browser compatibility testing',
      'Component-based architecture (React / Vue)',
    ],
    useCases: ['Landing Pages', 'Web App Frontends', 'Marketing Sites', 'Interactive Dashboards'],
  },

  /* ══════════════ CLOUD & DEVOPS ══════════════ */
  'azure': {
    name: 'Microsoft Azure',
    emoji: '☁️',
    category: 'Cloud & DevOps',
    categoryColor: '#f59e0b',
    image: '/tech_cloud.png',
    tagline: 'Microsoft\'s enterprise cloud platform for global scale.',
    description:
      'Microsoft Azure is a comprehensive cloud computing platform offering 200+ products and services including VMs, databases, AI services, and DevOps tools. It is the preferred cloud for enterprises deeply invested in the Microsoft ecosystem. Arha Technologies uses Azure to host, scale, and monitor production applications with enterprise reliability.',
    features: [
      'Azure App Service for web app hosting',
      'Azure SQL & Cosmos DB for managed databases',
      'Azure DevOps for CI/CD pipelines',
      'Azure Active Directory for identity management',
      'Azure Kubernetes Service (AKS)',
      'Azure Cognitive Services for AI features',
    ],
    useCases: ['Enterprise App Hosting', 'CI/CD Automation', 'AI Integration', 'Hybrid Cloud'],
  },

  'aws': {
    name: 'AWS',
    emoji: '🔶',
    category: 'Cloud & DevOps',
    categoryColor: '#f59e0b',
    image: '/tech_cloud.png',
    tagline: 'The world\'s most comprehensive cloud platform.',
    description:
      'Amazon Web Services (AWS) is the world\'s largest and most widely adopted cloud platform, offering 200+ fully featured services from data centers globally. From compute and storage to machine learning and IoT, AWS powers startups and Fortune 500 companies alike. Arha Technologies leverages AWS to build scalable, resilient, cost-optimized cloud infrastructures.',
    features: [
      'EC2 for scalable compute instances',
      'S3 for object storage & CDN via CloudFront',
      'RDS & DynamoDB for managed databases',
      'Lambda for serverless function execution',
      'ECS & EKS for container orchestration',
      'CloudWatch for monitoring & alerting',
    ],
    useCases: ['Startup Infrastructure', 'Serverless APIs', 'Big Data Processing', 'Global CDN'],
  },

  'google-cloud': {
    name: 'Google Cloud',
    emoji: '🌩️',
    category: 'Cloud & DevOps',
    categoryColor: '#f59e0b',
    image: '/tech_cloud.png',
    tagline: 'Cloud built on Google\'s global infrastructure.',
    description:
      'Google Cloud Platform (GCP) offers a suite of cloud computing services running on the same infrastructure that Google uses internally. It excels in data analytics, machine learning, and Kubernetes (which Google invented). Arha Technologies uses GCP for data-intensive projects, AI model deployment, and teams using Firebase as their backend.',
    features: [
      'BigQuery for petabyte-scale data analytics',
      'Firebase for real-time mobile/web backends',
      'GKE (Google Kubernetes Engine) for containers',
      'Vertex AI for ML model training & serving',
      'Cloud Run for serverless containers',
      'Cloud CDN & Global Load Balancing',
    ],
    useCases: ['Data Analytics', 'AI/ML Projects', 'Firebase Apps', 'Container Workloads'],
  },

  'git': {
    name: 'Git',
    emoji: '🔴',
    category: 'Cloud & DevOps',
    categoryColor: '#f59e0b',
    image: '/tech_cloud.png',
    tagline: 'Distributed version control for collaborative development.',
    description:
      'Git is the world\'s most widely used distributed version control system, enabling teams to track code changes, collaborate efficiently, and manage releases. Combined with platforms like GitHub and GitLab, Git forms the backbone of modern software development workflows. Arha Technologies practices Git-flow branching strategies and code review via pull requests on every project.',
    features: [
      'Branching & merging for parallel development',
      'GitHub / GitLab integration for team collaboration',
      'Pull Request & code review workflows',
      'Git hooks for automated pre-commit checks',
      'Semantic versioning & release tagging',
      'CI/CD pipeline triggers on push/merge',
    ],
    useCases: ['Team Collaboration', 'Code Review', 'Release Management', 'Open Source Projects'],
  },
};

export default techData;
