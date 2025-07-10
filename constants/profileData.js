// Professional Profile Data - Vinayak Chiluka
export const PROFILE_DATA = {
  personal: {
    name: "Vinayak Chiluka",
    title: "Principal Software Architect | Distributed Systems Engineer",
    subtitle: "AWS Cloud Architect & Platform Engineering Leader",
    email: "chilukavinayak.p@gmail.com",
    phone: "+91 84249 49070",
    location: "Hyderabad, Telangana, India",
    linkedin: "https://www.linkedin.com/in/chilukavinayak/",
    github: "https://github.com/chilukavinayak",
    portfolio: "https://vinayak-chiluka.me/",
    experience: "9+ Years",
    availability: "Open for Senior/Principal Engineering Roles"
  },

  summary: {
    headline: "Distinguished Principal Software Engineer with 9+ years architecting fault-tolerant, high-throughput distributed systems at enterprise scale.",
    highlights: [
      "Led critical infrastructure handling 10,000+ RPS with 99.99% uptime",
      "Optimized cloud costs by 30%+ across multiple enterprise environments",
      "Architected microservices for Amazon's global logistics platform",
      "Deep expertise in systems programming, DevOps automation, and security-first design",
      "Proven track record at Amazon, Morgan Stanley, and Visible Alpha"
    ],
    techPhilosophy: "Building scalable, resilient systems that power tomorrow's innovations"
  },

  experience: [
    {
      id: 1,
      company: "Wissen Technology",
      position: "Senior Principal Software Engineer",
      duration: "Aug 2024 - Present",
      location: "Pune, Maharashtra",
      type: "Full-time",
      technologies: ["AWS", "Kubernetes", "Java", "Spring Boot", "CDK", "IoT Core", "Lambda"],
      achievements: [
        "Architected cloud-native IoT data pipelines processing 1M+ events/day with sub-second latency",
        "Developed reusable CDK constructs and Helm charts for multi-tenant SaaS deployment",
        "Implemented zero-downtime RDS migrations to KMS-encrypted instances across 50+ databases",
        "Achieved 30% cost reduction through Reserved Instance optimization and auto-scaling policies",
        "Built event-driven monitoring with SQS-Lambda-SES pipelines, reducing incident response by 40%"
      ],
      keyProjects: [
        "Multi-Tenant IoT Platform Architecture",
        "Enterprise Database Migration Strategy",
        "Cost Optimization Framework"
      ]
    },
    {
      id: 2,
      company: "People Tech IT Consultancy",
      position: "Software Developer Assistant Manager",
      duration: "May 2023 - Jul 2024",
      location: "Hyderabad, Telangana",
      type: "Amazon Client",
      technologies: ["AWS", "Java", "Spring Cloud", "DynamoDB", "SQS", "Lambda", "EKS"],
      achievements: [
        "Architected scalable IoT data pipelines supporting 10K+ RPS with modular infrastructure",
        "Led secure migration of production RDS instances to KMS-encrypted environments",
        "Reduced AWS operational costs by 30% through comprehensive usage analysis",
        "Implemented event-driven microservices with fault-tolerant data ingestion"
      ],
      keyProjects: [
        "High-Throughput IoT Data Pipeline",
        "Production Database Security Migration",
        "Cost Optimization Analytics"
      ]
    },
    {
      id: 3,
      company: "People Tech IT Consultancy",
      position: "Senior Software Engineer",
      duration: "Nov 2021 - Apr 2023",
      location: "Hyderabad, Telangana",
      type: "Amazon Client",
      technologies: ["Java", "Spring Boot", "AWS Lambda", "RDS", "CloudWatch", "X-Ray"],
      achievements: [
        "Worked on high-volume internal Amazon platform handling 10,000+ RPS",
        "Developed and optimized Java microservices improving system throughput",
        "Reduced AWS infrastructure cost by 25% through Spot Instances and optimization",
        "Improved observability achieving 40% reduction in MTTR"
      ],
      keyProjects: [
        "Global Logistics Platform",
        "Microservices Performance Optimization",
        "Infrastructure Cost Reduction"
      ]
    },
    {
      id: 4,
      company: "Wissen (Morgan Stanley)",
      position: "Software Engineer",
      duration: "Jan 2020 - Nov 2021",
      location: "Mumbai, Maharashtra",
      type: "Financial Services",
      technologies: ["Java", "Spring", "SQL", "Financial Systems", "Event Sourcing"],
      achievements: [
        "Developed Post-Trade Validation systems ensuring 100% accuracy for high-value trades",
        "Implemented event sourcing patterns for audit trails and regulatory compliance",
        "Resolved critical production issues in trade validation pipelines",
        "Collaborated with global teams across NY and London"
      ],
      keyProjects: [
        "Real-time Trade Validation System",
        "Regulatory Compliance Framework",
        "Financial Data Processing Pipeline"
      ]
    },
    {
      id: 5,
      company: "Visible Alpha",
      position: "Software Engineer",
      duration: "Sep 2017 - Nov 2019",
      location: "Mumbai, Maharashtra",
      type: "FinTech",
      technologies: ["C#", "SQL Server", "Jenkins", "Git", "ETL"],
      achievements: [
        "Built consensus engine processing 1,500+ public companies data",
        "Implemented ETL pipelines with data normalization and quality validation",
        "Achieved 40% deployment time reduction through CI/CD automation",
        "Optimized data ingestion workflows increasing system throughput"
      ],
      keyProjects: [
        "Financial Consensus Engine",
        "Data Normalization Platform",
        "CI/CD Automation Framework"
      ]
    },
    {
      id: 6,
      company: "63 Moons",
      position: "Software Engineer",
      duration: "Nov 2016 - Sep 2017",
      location: "Mumbai, Maharashtra",
      type: "Trading Systems",
      technologies: ["High-Frequency Trading", "Low-Latency Systems", "Production Support"],
      achievements: [
        "Provided L3 production support for low-latency trading systems",
        "Implemented hot-fix deployment strategies for zero-downtime updates",
        "Collaborated with teams for critical trading incident resolution"
      ],
      keyProjects: [
        "High-Frequency Trading Platform Support",
        "Critical Incident Response System"
      ]
    },
    {
      id: 7,
      company: "Verixo Technologies",
      position: "Software Engineer",
      duration: "Jun 2015 - Nov 2016",
      location: "Mumbai, Maharashtra",
      type: "Systems Programming",
      technologies: ["C", "Systems Programming", "Network Protocols", "File Systems"],
      achievements: [
        "Engineered high-performance network restore system in C",
        "Implemented multi-protocol support (HTTP/HTTPS/FTP/FTPS)",
        "Developed low-level disk operations for multiple file systems",
        "🏆 Best Performer Award for solving critical deployment bottlenecks"
      ],
      keyProjects: [
        "High-Performance Network Restore System",
        "Multi-Protocol File Transfer Engine",
        "Low-Level Disk Operations Framework"
      ]
    }
  ],

  skills: {
    languages: [
      { name: "Java", level: "Expert", years: "8+", frameworks: ["Spring Boot", "Spring Cloud", "Microservices"] },
      { name: "C", level: "Advanced", years: "6+", frameworks: ["Systems Programming", "Network Programming"] },
      { name: "Python", level: "Intermediate", years: "4+", frameworks: ["Flask", "Django", "Data Analysis"] },
      { name: "C#", level: "Intermediate", years: "3+", frameworks: [".NET", "ASP.NET"] },
      { name: "SQL", level: "Advanced", years: "8+", frameworks: ["PostgreSQL", "MySQL", "SQL Server"] },
      { name: "JavaScript", level: "Intermediate", years: "3+", frameworks: ["Node.js", "React"] },
      { name: "Go", level: "Beginner", years: "1+", frameworks: ["Gin", "Echo"] }
    ],
    
    cloud: [
      { name: "AWS", level: "Expert", services: ["EC2", "Lambda", "RDS", "S3", "DynamoDB", "IoT Core", "EKS", "ECS"] },
      { name: "Azure", level: "Intermediate", services: ["AKS", "Functions", "SQL Database"] },
      { name: "GCP", level: "Beginner", services: ["Compute Engine", "Cloud Functions"] }
    ],

    devops: [
      { name: "Kubernetes", level: "Advanced", tools: ["EKS", "Helm", "Service Mesh"] },
      { name: "Docker", level: "Expert", tools: ["Docker Compose", "Multi-stage builds"] },
      { name: "Terraform", level: "Intermediate", tools: ["AWS Provider", "State Management"] },
      { name: "Ansible", level: "Intermediate", tools: ["Playbooks", "Configuration Management"] },
      { name: "Jenkins", level: "Advanced", tools: ["Pipeline as Code", "Blue-Green Deployment"] },
      { name: "GitHub Actions", level: "Intermediate", tools: ["Workflow Automation", "CI/CD"] }
    ],

    databases: [
      { name: "PostgreSQL", level: "Advanced", features: ["Performance Tuning", "Replication"] },
      { name: "MySQL", level: "Advanced", features: ["Query Optimization", "Clustering"] },
      { name: "DynamoDB", level: "Intermediate", features: ["NoSQL Design", "Auto-scaling"] },
      { name: "Redis", level: "Intermediate", features: ["Caching", "Pub/Sub"] },
      { name: "MongoDB", level: "Intermediate", features: ["Document Store", "Aggregation"] }
    ],

    architecture: [
      { name: "Microservices", level: "Expert", patterns: ["API Gateway", "Service Discovery", "Circuit Breaker"] },
      { name: "Event-Driven", level: "Advanced", patterns: ["Event Sourcing", "CQRS", "Saga Pattern"] },
      { name: "Distributed Systems", level: "Advanced", patterns: ["CAP Theorem", "Consensus Algorithms"] },
      { name: "Domain-Driven Design", level: "Intermediate", patterns: ["Bounded Context", "Aggregates"] },
      { name: "Reactive Programming", level: "Intermediate", patterns: ["Reactive Streams", "Non-blocking I/O"] }
    ],

    monitoring: [
      { name: "CloudWatch", level: "Advanced", features: ["Custom Metrics", "Alarms", "Dashboards"] },
      { name: "Prometheus", level: "Intermediate", features: ["Metrics Collection", "Alerting"] },
      { name: "Grafana", level: "Intermediate", features: ["Visualization", "Dashboards"] },
      { name: "X-Ray", level: "Advanced", features: ["Distributed Tracing", "Performance Analysis"] },
      { name: "ELK Stack", level: "Intermediate", features: ["Log Analysis", "Search"] }
    ]
  },

  certifications: [
    {
      name: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-SAP-2024",
      level: "Professional"
    },
    {
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services", 
      date: "2023",
      credentialId: "AWS-SAA-2023",
      level: "Associate"
    }
  ],

  projects: [
    {
      id: 1,
      title: "Multi-Tenant IoT Platform",
      description: "Enterprise-grade IoT data processing platform handling 1M+ events/day",
      technologies: ["AWS IoT Core", "Kinesis", "Lambda", "DynamoDB", "CDK"],
      achievements: [
        "Processed 1M+ IoT events daily with sub-second latency",
        "Implemented multi-tenant architecture with resource isolation",
        "Achieved 99.99% uptime with automated failover mechanisms",
        "Reduced deployment time by 60% with reusable CDK constructs"
      ],
      metrics: {
        throughput: "1M+ events/day",
        latency: "< 1 second",
        uptime: "99.99%",
        costSaving: "30%"
      },
      category: "cloud",
      featured: true
    },
    {
      id: 2,
      title: "High-Throughput Microservices Platform",
      description: "Scalable microservices architecture supporting Amazon's global logistics operations",
      technologies: ["Java", "Spring Boot", "AWS Lambda", "RDS", "SQS"],
      achievements: [
        "Handled 10,000+ RPS with horizontal auto-scaling",
        "Implemented circuit breaker pattern for fault tolerance",
        "Achieved 40% reduction in MTTR through observability",
        "Optimized JVM performance reducing P99 latency by 50%"
      ],
      metrics: {
        throughput: "10,000+ RPS",
        latency: "50% reduction in P99",
        availability: "99.99%",
        mttr: "40% reduction"
      },
      category: "backend",
      featured: true
    },
    {
      id: 3,
      title: "Zero-Downtime Database Migration Framework",
      description: "Secure migration framework for production RDS instances to KMS-encrypted environments",
      technologies: ["AWS RDS", "KMS", "CloudFormation", "Lambda", "SNS"],
      achievements: [
        "Migrated 50+ production databases with zero downtime",
        "Implemented automated rollback mechanisms",
        "Achieved 100% data encryption compliance",
        "Reduced migration time by 70% through automation"
      ],
      metrics: {
        databases: "50+ migrated",
        downtime: "0 minutes",
        automation: "70% time reduction",
        compliance: "100%"
      },
      category: "devops",
      featured: true
    },
    {
      id: 4,
      title: "Real-Time Trade Validation System",
      description: "High-accuracy financial trade validation system for post-trade processing",
      technologies: ["Java", "Spring", "Event Sourcing", "SQL", "Message Queues"],
      achievements: [
        "Processed high-value trades with 100% accuracy",
        "Implemented event sourcing for audit compliance",
        "Reduced validation time by 60%",
        "Achieved regulatory compliance standards"
      ],
      metrics: {
        accuracy: "100%",
        processing: "60% faster",
        compliance: "Regulatory standards met",
        volume: "High-value trades"
      },
      category: "fintech",
      featured: false
    },
    {
      id: 5,
      title: "High-Performance Network Restore System",
      description: "Low-level C-based system for parallel disk imaging and network recovery",
      technologies: ["C", "Network Programming", "File Systems", "HTTP/HTTPS/FTP"],
      achievements: [
        "Implemented parallel disk imaging across multiple machines",
        "Supported multiple protocols and file systems",
        "Achieved failure-resilient resume capability",
        "Reduced restore time by 80% through optimization"
      ],
      metrics: {
        performance: "80% faster restore",
        protocols: "Multiple supported",
        reliability: "Failure-resilient",
        recognition: "Best Performer Award"
      },
      category: "systems",
      featured: false
    },
    {
      id: 6,
      title: "Financial Consensus Engine",
      description: "Real-time consensus engine processing analyst models for 1,500+ public companies",
      technologies: ["C#", "SQL Server", "ETL", "Data Normalization"],
      achievements: [
        "Processed data for 1,500+ public companies",
        "Implemented automated data normalization",
        "Achieved 40% deployment time reduction",
        "Enhanced data accuracy through validation pipelines"
      ],
      metrics: {
        companies: "1,500+",
        automation: "40% faster deployment",
        accuracy: "Enhanced validation",
        processing: "Real-time consensus"
      },
      category: "fintech",
      featured: false
    }
  ],

  achievements: [
    {
      title: "Best Performer Award",
      organization: "Verixo Technologies",
      year: "2016",
      description: "Recognized for solving critical deployment bottlenecks in network restore systems"
    },
    {
      title: "Best Contributor Award",
      organization: "People Tech IT Consultancy",
      year: "2024",
      description: "Outstanding contribution to platform innovation and client success"
    },
    {
      title: "Cost Optimization Champion",
      organization: "Multiple Companies",
      year: "2023-2024",
      description: "Consistently achieved 25-30% cost reduction across AWS environments"
    },
    {
      title: "Zero-Downtime Migration Lead",
      organization: "Amazon/Wissen",
      year: "2023-2024",
      description: "Led critical database migrations with 100% success rate"
    }
  ],

  education: {
    degree: "B.Tech in Electronics & Communication Engineering",
    university: "JNTU Hyderabad",
    year: "2024",
    gpa: "7.2/10",
    achievements: [
      "Best Organizer - Annual Technical Fest",
      "1st Place - Inter-College Coding/Robotics Competition",
      "Core Committee Member - Technical Club"
    ]
  },

  languages: [
    { name: "English", level: "Professional", proficiency: "Advanced" },
    { name: "Telugu", level: "Native", proficiency: "Native" },
    { name: "Hindi", level: "Conversational", proficiency: "Intermediate" }
  ],

  interests: [
    "Distributed Systems Architecture",
    "Cloud-Native Technologies",
    "System Programming",
    "DevOps Automation",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Blockchain Technology",
    "Cybersecurity",
    "Technical Writing"
  ]
};

// Export individual sections for modular usage
export const { personal, summary, experience, skills, certifications, projects, achievements, education } = PROFILE_DATA;
