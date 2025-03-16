// projects.js
export const projects = [
  {
    title: "IoT Data Processing Pipeline",
    description: `Built a high-throughput IoT solution on AWS IoT Core, Kinesis, and
              DynamoDB. Enabled real-time analytics for millions of sensor
              readings.`,
    imgSrc: "./assets/glue.png",
    category: "iot",
  },
  {
    title: "Helm Chart Deployment",
    description: `Created a Helm chart for multi-container microservices on
              Kubernetes. Streamlined CI/CD with versioned Helm releases for
              alpha, beta, and gamma environments.`,
    imgSrc: "images/project2.png",
    category: "devops",
  },
  {
    title: "AWS RDS Migration & Optimization",
    description: `Migrated MS SQL databases to Amazon RDS with minimal downtime.
              Analyzed 1-year usage data to optimize costs using Reserved
              Instances.`,
    imgSrc: "images/project3.png",
    category: "cloud",
  },
  {
    title: "Elastic Beanstalk Customization",
    description: `Customized EB environments for security and monitoring. Implemented
              strict egress rules, advanced logging, and CloudWatch metrics for
              multi-tier apps.`,
    imgSrc: "images/project4.png",
    category: "devops iot",
  },
];
