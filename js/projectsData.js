// Advanced Technical Projects Data
export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Multi-Tenant IoT Platform",
    description: "Enterprise-grade IoT data processing platform handling 1M+ events/day with sub-second latency, built on AWS serverless architecture.",
    longDescription: "Architected and deployed a comprehensive multi-tenant IoT platform processing over 1 million events daily. Implemented real-time data ingestion, processing, and analytics using AWS IoT Core, Kinesis, Lambda, and DynamoDB. Built with fault-tolerant design patterns and automated scaling.",
    category: "cloud",
    featured: true,
    technologies: ["AWS IoT Core", "Kinesis", "Lambda", "DynamoDB", "CDK", "TypeScript", "Node.js"],
    metrics: {
      throughput: "1M+ events/day",
      latency: "< 1 second",
      uptime: "99.99%",
      costSaving: "30%",
      scalability: "Auto-scaling"
    },
    achievements: [
      "Processed 1M+ IoT events daily with sub-second latency",
      "Implemented multi-tenant architecture with resource isolation",
      "Achieved 99.99% uptime with automated failover mechanisms",
      "Reduced deployment time by 60% with reusable CDK constructs",
      "Optimized costs by 30% through intelligent resource management"
    ],
    architecture: {
      frontend: "React Dashboard",
      backend: "Serverless (Lambda)",
      database: "DynamoDB + TimeStream",
      messaging: "SQS + SNS",
      monitoring: "CloudWatch + X-Ray"
    },
    githubUrl: "https://github.com/chilukavinayak/iot-platform",
    liveUrl: "https://iot-platform.vinayak-chiluka.me"
  },
  
  {
    id: 2,
    title: "High-Throughput Microservices Platform",
    description: "Scalable microservices architecture supporting Amazon's global logistics operations with 10K+ RPS capacity.",
    longDescription: "Designed and implemented a high-performance microservices platform for Amazon's global logistics operations. Built with Spring Boot, deployed on EKS, and optimized for extreme throughput with circuit breakers, bulkheads, and advanced monitoring.",
    category: "backend",
    featured: true,
    technologies: ["Java", "Spring Boot", "Spring Cloud", "Kubernetes", "AWS Lambda", "RDS", "SQS", "Redis"],
    metrics: {
      throughput: "10,000+ RPS",
      latency: "50% P99 reduction",
      availability: "99.99%",
      mttr: "40% reduction",
      scalability: "Horizontal auto-scaling"
    },
    achievements: [
      "Handled 10,000+ RPS with horizontal auto-scaling",
      "Implemented circuit breaker pattern for fault tolerance",
      "Achieved 40% reduction in MTTR through observability",
      "Optimized JVM performance reducing P99 latency by 50%",
      "Built distributed tracing for complex transaction flows"
    ],
    architecture: {
      frontend: "API Gateway",
      backend: "Spring Boot Microservices",
      database: "PostgreSQL + Redis",
      messaging: "Apache Kafka + SQS",
      monitoring: "Prometheus + Grafana"
    },
    githubUrl: "https://github.com/chilukavinayak/logistics-platform"
  },

  {
    id: 3,
    title: "Zero-Downtime Database Migration Framework",
    description: "Secure migration framework for production RDS instances to KMS-encrypted environments with automated rollback.",
    longDescription: "Developed a comprehensive database migration framework that enables zero-downtime migrations for production RDS instances. Includes automated backup strategies, rollback mechanisms, and compliance validation for enterprise security requirements.",
    category: "devops",
    featured: true,
    technologies: ["AWS RDS", "KMS", "CloudFormation", "Lambda", "SNS", "Python", "Terraform"],
    metrics: {
      databases: "50+ migrated",
      downtime: "0 minutes",
      automation: "70% time reduction",
      compliance: "100% security",
      success: "100% migration rate"
    },
    achievements: [
      "Migrated 50+ production databases with zero downtime",
      "Implemented automated rollback mechanisms",
      "Achieved 100% data encryption compliance",
      "Reduced migration time by 70% through automation",
      "Built comprehensive monitoring and alerting"
    ],
    architecture: {
      orchestration: "Step Functions",
      automation: "Lambda Functions",
      monitoring: "CloudWatch + SNS",
      security: "KMS + IAM",
      validation: "Custom Scripts"
    },
    githubUrl: "https://github.com/chilukavinayak/db-migration-framework"
  },

  {
    id: 4,
    title: "Real-Time Trade Validation System",
    description: "High-accuracy financial trade validation system for post-trade processing with regulatory compliance.",
    longDescription: "Built a mission-critical trade validation system for financial markets, processing high-value trades with 100% accuracy. Implemented event sourcing for audit trails and regulatory compliance, supporting real-time validation and settlement processes.",
    category: "fintech",
    featured: true,
    technologies: ["Java", "Spring Boot", "Event Sourcing", "PostgreSQL", "Apache Kafka", "Redis"],
    metrics: {
      accuracy: "100%",
      processing: "60% faster",
      compliance: "Regulatory standards",
      volume: "High-value trades",
      latency: "< 100ms"
    },
    achievements: [
      "Processed high-value trades with 100% accuracy",
      "Implemented event sourcing for audit compliance",
      "Reduced validation time by 60%",
      "Achieved regulatory compliance standards",
      "Built real-time monitoring and alerting"
    ],
    architecture: {
      backend: "Spring Boot",
      database: "PostgreSQL",
      messaging: "Apache Kafka",
      caching: "Redis",
      monitoring: "Micrometer + Prometheus"
    },
    githubUrl: "https://github.com/chilukavinayak/trade-validation"
  },

  {
    id: 5,
    title: "High-Performance Network Restore System",
    description: "Low-level C-based system for parallel disk imaging and network recovery with multi-protocol support.",
    longDescription: "Engineered a high-performance network restore system in C, supporting parallel disk imaging across multiple machines. Implemented multi-protocol support (HTTP/HTTPS/FTP/FTPS) with failure-resilient resume capabilities and support for multiple file systems.",
    category: "systems",
    featured: true,
    technologies: ["C", "Network Programming", "File Systems", "HTTP/HTTPS", "FTP/FTPS", "Multi-threading"],
    metrics: {
      performance: "80% faster restore",
      protocols: "4+ supported",
      reliability: "Failure-resilient",
      filesystems: "4+ supported",
      recognition: "Best Performer Award"
    },
    achievements: [
      "Implemented parallel disk imaging across multiple machines",
      "Supported multiple protocols (HTTP/HTTPS/FTP/FTPS)",
      "Achieved failure-resilient resume capability",
      "Reduced restore time by 80% through optimization",
      "🏆 Best Performer Award recognition"
    ],
    architecture: {
      language: "C",
      networking: "Socket Programming",
      threading: "POSIX Threads",
      filesystems: "NTFS/FAT32/exFAT/ext4",
      protocols: "HTTP/HTTPS/FTP/FTPS"
    },
    githubUrl: "https://github.com/chilukavinayak/network-restore"
  },

  {
    id: 6,
    title: "Financial Consensus Engine",
    description: "Real-time consensus engine processing analyst models for 1,500+ public companies with automated normalization.",
    longDescription: "Developed a comprehensive financial consensus engine that processes analyst models from multiple sources for over 1,500 public companies. Implemented automated data normalization, validation pipelines, and real-time consensus calculation algorithms.",
    category: "fintech",
    featured: false,
    technologies: ["C#", "SQL Server", "ETL", "Data Normalization", "SSIS", "WCF Services"],
    metrics: {
      companies: "1,500+",
      automation: "40% faster deployment",
      accuracy: "Enhanced validation",
      processing: "Real-time consensus",
      coverage: "Global markets"
    },
    achievements: [
      "Processed data for 1,500+ public companies",
      "Implemented automated data normalization",
      "Achieved 40% deployment time reduction",
      "Enhanced data accuracy through validation pipelines",
      "Built real-time consensus calculation algorithms"
    ],
    architecture: {
      backend: "C# Services",
      database: "SQL Server",
      etl: "SSIS Packages",
      api: "WCF Services",
      frontend: "ASP.NET Dashboard"
    },
    githubUrl: "https://github.com/chilukavinayak/consensus-engine"
  },

  {
    id: 7,
    title: "Cost Optimization Analytics Platform",
    description: "AWS cost optimization platform achieving 30% cost reduction through intelligent resource management and analytics.",
    longDescription: "Built a comprehensive cost optimization platform that analyzes AWS usage patterns, identifies optimization opportunities, and implements automated cost-saving strategies. Achieved consistent 25-30% cost reduction across multiple enterprise environments.",
    category: "cloud",
    featured: false,
    technologies: ["AWS Cost Explorer", "Lambda", "CloudWatch", "S3", "DynamoDB", "Python", "Pandas"],
    metrics: {
      savings: "30% cost reduction",
      coverage: "Multi-account",
      automation: "Automated recommendations",
      monitoring: "Real-time alerts",
      roi: "6-month payback"
    },
    achievements: [
      "Achieved 30% cost reduction across AWS environments",
      "Implemented automated Reserved Instance recommendations",
      "Built real-time cost monitoring and alerting",
      "Optimized resource utilization through analytics",
      "Created executive cost dashboards and reports"
    ],
    architecture: {
      analytics: "Python + Pandas",
      visualization: "Grafana + CloudWatch",
      automation: "Lambda Functions",
      storage: "S3 + DynamoDB",
      alerts: "SNS + SES"
    },
    githubUrl: "https://github.com/chilukavinayak/cost-optimization"
  },

  {
    id: 8,
    title: "Distributed Logging & Monitoring System",
    description: "Enterprise-grade distributed logging and monitoring system with real-time analytics and alerting.",
    longDescription: "Designed and implemented a comprehensive distributed logging and monitoring system for enterprise applications. Built with ELK stack, provides real-time log analysis, custom metrics, and intelligent alerting for production environments.",
    category: "devops",
    featured: false,
    technologies: ["ELK Stack", "Kafka", "Grafana", "Prometheus", "Docker", "Kubernetes"],
    metrics: {
      logs: "TB+ daily",
      latency: "< 5 seconds",
      retention: "1 year",
      availability: "99.9%",
      alerts: "Real-time"
    },
    achievements: [
      "Processed TB+ logs daily with sub-5-second latency",
      "Implemented intelligent alerting and anomaly detection",
      "Built custom dashboards for different stakeholders",
      "Achieved 99.9% system availability",
      "Reduced debugging time by 60% through better observability"
    ],
    architecture: {
      ingestion: "Kafka + Logstash",
      storage: "Elasticsearch",
      visualization: "Kibana + Grafana",
      metrics: "Prometheus",
      alerting: "AlertManager"
    },
    githubUrl: "https://github.com/chilukavinayak/logging-system"
  }
];

// Filter functions for project categories
export const getProjectsByCategory = (category) => {
  if (category === 'all') return PROJECTS_DATA;
  return PROJECTS_DATA.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return PROJECTS_DATA.filter(project => project.featured);
};

export const getProjectById = (id) => {
  return PROJECTS_DATA.find(project => project.id === parseInt(id));
};

// Project categories
export const PROJECT_CATEGORIES = [
  { id: 'all', name: 'All Projects', count: PROJECTS_DATA.length },
  { id: 'cloud', name: 'Cloud Architecture', count: PROJECTS_DATA.filter(p => p.category === 'cloud').length },
  { id: 'backend', name: 'Backend Systems', count: PROJECTS_DATA.filter(p => p.category === 'backend').length },
  { id: 'devops', name: 'DevOps & Infrastructure', count: PROJECTS_DATA.filter(p => p.category === 'devops').length },
  { id: 'fintech', name: 'Financial Technology', count: PROJECTS_DATA.filter(p => p.category === 'fintech').length },
  { id: 'systems', name: 'Systems Programming', count: PROJECTS_DATA.filter(p => p.category === 'systems').length }
];
