// Professional Resume Data for CV Generation
export const RESUME_DATA = {
  personalInfo: {
    fullName: "Vinayak Chiluka",
    title: "Principal Software Architect | Distributed Systems Engineer",
    email: "chilukavinayak.p@gmail.com",
    phone: "+91 84249 49070",
    location: "Hyderabad, Telangana 500050, India",
    linkedin: "https://www.linkedin.com/in/chilukavinayak/",
    github: "https://github.com/chilukavinayak",
    portfolio: "https://vinayak-chiluka.me/",
    summary: "Distinguished Principal Software Engineer with 9+ years architecting fault-tolerant, high-throughput distributed systems at enterprise scale. Proven expertise in cloud-native architecture, microservices orchestration, and platform engineering across fintech, e-commerce, and IoT domains. Led critical infrastructure migrations handling 10,000+ RPS with 99.99% uptime while optimizing costs by 30%+."
  },

  professionalExperience: [
    {
      position: "Senior Principal Software Engineer",
      company: "Wissen Technology",
      location: "Pune, Maharashtra",
      duration: "August 2024 - Present",
      type: "Full-time",
      achievements: [
        "Designed and deployed reusable AWS CDK modules and Helm charts supporting multi-tenant IoT platforms, significantly reducing code duplication and accelerating client onboarding",
        "Led the migration of critical production RDS databases to KMS-encrypted instances, ensuring data security compliance with minimal downtime and clear rollback strategies",
        "Optimized AWS infrastructure costs by analyzing RDS usage patterns and recommending Reserved Instances, saving 20–30% in annual cloud spend",
        "Improved system reliability by building robust S3–SQS–Lambda pipelines for data ingestion and alerts, including health checks and automated SES notifications",
        "Enabled operational excellence and team productivity through detailed architecture documentation, KT sessions, and debugging support across EKS, Elastic Beanstalk, and Active Directory-based authentication flows"
      ],
      technologies: ["AWS", "Kubernetes", "Java", "Spring Boot", "CDK", "IoT Core", "Lambda", "DynamoDB", "EKS"]
    },
    {
      position: "Software Developer Assistant Manager",
      company: "People Tech IT Consultancy",
      location: "Hyderabad, Telangana",
      duration: "May 2023 - July 2024",
      type: "Amazon Client",
      achievements: [
        "Architected and delivered scalable, client-specific IoT data pipelines on AWS using CDK, IoT Core, SQS, Lambda, and DynamoDB—supporting real-time processing at 10K+ RPS with modular, reusable infrastructure",
        "Led secure migration of production RDS instances to KMS-encrypted environments, implementing zero-downtime strategies and achieving full compliance with data security standards",
        "Reduced AWS operational costs by 30% through in-depth analysis of RDS usage patterns, recommending Reserved Instances, and optimizing CloudWatch monitoring configurations"
      ],
      technologies: ["AWS", "Java", "Spring Cloud", "DynamoDB", "SQS", "Lambda", "EKS", "CDK"]
    },
    {
      position: "Senior Software Engineer",
      company: "People Tech IT Consultancy",
      location: "Hyderabad, Telangana",
      duration: "November 2021 - April 2023",
      type: "Amazon Client",
      achievements: [
        "Worked on a high-volume internal Amazon platform handling over 10,000+ RPS, supporting logistics and fulfillment operations at global scale",
        "Developed and optimized Java microservices on AWS (Lambda, SQS, RDS), improving system throughput, fault tolerance, and deployment automation",
        "Reduced AWS infrastructure cost by 25% by implementing Spot Instances, optimizing RDS configurations, and eliminating unused resources",
        "Led secure RDS-to-KMS encryption migrations for live production databases, ensuring compliance with Amazon's data security standards with zero downtime",
        "Improved observability and incident response by integrating CloudWatch, X-Ray, and custom metrics, achieving a 40% reduction in MTTR"
      ],
      technologies: ["Java", "Spring Boot", "AWS Lambda", "RDS", "CloudWatch", "X-Ray", "SQS"]
    },
    {
      position: "Software Engineer",
      company: "Wissen (Morgan Stanley)",
      location: "Mumbai, Maharashtra",
      duration: "January 2020 - November 2021",
      type: "Financial Services",
      achievements: [
        "Worked on Post-Trade Validation systems ensuring accurate settlement and reconciliation of high-value trades, with a strong focus on data integrity and compliance",
        "Resolved several critical production issues across trade validation pipelines, contributing to system stability and reducing downstream escalation incidents",
        "Quickly ramped up on complex internal frameworks and domain logic, actively contributing to key modules and collaborating with global teams across New York and London"
      ],
      technologies: ["Java", "Spring", "SQL", "Financial Systems", "Event Sourcing"]
    },
    {
      position: "Software Engineer",
      company: "Visible Alpha",
      location: "Mumbai, Maharashtra",
      duration: "September 2017 - November 2019",
      type: "FinTech",
      achievements: [
        "Developed and maintained core backend components using C# and SQL to power Visible Alpha's consensus engine, enabling real-time access to granular sell-side models for over 1,500 public companies",
        "Integrated automated build and deployment pipelines using Jenkins and Git, improving release reliability and reducing deployment time for production environments by 40%",
        "Collaborated with data analysts and financial SMEs to normalize proprietary industry metrics into structured formats, enhancing the accuracy of pre-built comp tables used by investment teams",
        "Optimized data ingestion and transformation workflows, reducing processing time for analyst models and increasing system throughput for high-volume institutional usage"
      ],
      technologies: ["C#", "SQL Server", "Jenkins", "Git", "ETL"]
    },
    {
      position: "Software Engineer",
      company: "63 Moons",
      location: "Mumbai, Maharashtra",
      duration: "November 2016 - September 2017",
      type: "Trading Systems",
      achievements: [
        "Provided production support and issue resolution for high-frequency trading systems at 63 Moons, ensuring minimal downtime and quick turnaround for critical trading incidents",
        "Collaborated with development teams to analyze, debug, and deploy hotfixes in a time-sensitive trading environment"
      ],
      technologies: ["High-Frequency Trading", "Low-Latency Systems", "Production Support"]
    },
    {
      position: "Software Engineer",
      company: "Verixo Technologies Pvt Ltd",
      location: "Mumbai, Maharashtra",
      duration: "June 2015 - November 2016",
      type: "Systems Programming",
      achievements: [
        "Engineered a high-performance network restore system in C for thin clients, enabling parallel disk imaging across machines via HTTP, HTTPS, FTP, FTPS, and shared network storage (NTFS, FAT32, exFAT, ext4)",
        "Implemented advanced features like partition splitting, failure-resilient resume support, and automated multi-machine remote boot recovery, significantly reducing restore time and increasing reliability",
        "Independently handled design, coding, and optimization, resolving complex edge cases in low-level disk operations and earning recognition as Best Performer for solving a long-standing deployment bottleneck"
      ],
      technologies: ["C", "Systems Programming", "Network Protocols", "File Systems"]
    }
  ],

  technicalSkills: {
    programmingLanguages: [
      { name: "Java", proficiency: "Expert", experience: "8+ years", frameworks: ["Spring Boot", "Spring Cloud", "Microservices"] },
      { name: "C", proficiency: "Advanced", experience: "6+ years", frameworks: ["Systems Programming", "Network Programming"] },
      { name: "Python", proficiency: "Intermediate", experience: "4+ years", frameworks: ["Flask", "Django", "Data Analysis"] },
      { name: "C#", proficiency: "Intermediate", experience: "3+ years", frameworks: [".NET", "ASP.NET"] },
      { name: "SQL", proficiency: "Advanced", experience: "8+ years", frameworks: ["PostgreSQL", "MySQL", "SQL Server"] }
    ],
    cloudTechnologies: [
      { name: "AWS", proficiency: "Expert", services: ["EC2", "Lambda", "RDS", "S3", "DynamoDB", "IoT Core", "EKS", "ECS"] },
      { name: "Infrastructure as Code", proficiency: "Advanced", tools: ["AWS CDK", "CloudFormation", "Terraform"] }
    ],
    devopsTools: [
      { name: "Container Orchestration", proficiency: "Advanced", tools: ["Kubernetes", "Docker", "Helm"] },
      { name: "CI/CD", proficiency: "Advanced", tools: ["Jenkins", "GitHub Actions", "CodePipeline"] },
      { name: "Monitoring", proficiency: "Advanced", tools: ["CloudWatch", "X-Ray", "Prometheus", "Grafana"] }
    ],
    architecturePatterns: [
      "Microservices Architecture",
      "Event-Driven Architecture", 
      "Domain-Driven Design",
      "Circuit Breaker Pattern",
      "Event Sourcing",
      "CQRS"
    ]
  },

  certifications: [
    {
      name: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      date: "2024",
      level: "Professional"
    },
    {
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      level: "Associate"
    }
  ],

  education: {
    degree: "B.Tech in Electronics & Communication Engineering",
    university: "JNTU Hyderabad",
    year: "2024",
    gpa: "7.2/10"
  },

  awards: [
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
      title: "Best Organizer Award",
      organization: "College Technical Events",
      year: "2014",
      description: "Successfully led and coordinated multiple technical and cultural events"
    }
  ],

  keyAchievements: [
    "Architected and deployed systems handling 10,000+ RPS with 99.99% uptime",
    "Consistently achieved 25-30% cost reduction across AWS environments",
    "Led zero-downtime migrations for 50+ production databases",
    "Reduced MTTR by 40% through advanced observability implementations",
    "Built fault-tolerant IoT platforms processing 1M+ events daily"
  ],

  languages: [
    { name: "English", level: "Professional" },
    { name: "Telugu", level: "Native" },
    { name: "Hindi", level: "Conversational" }
  ]
};

// Export functions for CV generation
export const generatePDFData = () => {
  return {
    ...RESUME_DATA,
    generatedDate: new Date().toISOString(),
    version: "2024.1"
  };
};

export const getExperienceSummary = () => {
  const totalYears = new Date().getFullYear() - 2015;
  const companies = RESUME_DATA.professionalExperience.map(exp => exp.company);
  const uniqueCompanies = [...new Set(companies)];
  
  return {
    totalExperience: `${totalYears}+ years`,
    companiesWorked: uniqueCompanies.length,
    majorClients: ["Amazon", "Morgan Stanley", "Visible Alpha"],
    keyMetrics: {
      rpsHandled: "10,000+",
      uptime: "99.99%",
      costOptimization: "30%",
      mttrReduction: "40%"
    }
  };
};
