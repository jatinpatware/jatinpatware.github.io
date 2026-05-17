// ============================================================
// SINGLE SOURCE OF TRUTH — update here, everything else syncs
// ============================================================
const resumeData = {

  name: "Jatin Patware",
  title: "Senior Data Engineer",
  tagline1: "Transforming Raw Data into Competitive Advantage.",
  tagline2: "Designing data systems that scale.",
  sub: "8+ Years · Petabyte Scale · Real-Time Pipelines · AI/LLM Integration",
  location: "Hyderabad, India",
  email: "jatincse19@gmail.com",
  linkedin: "https://linkedin.com/in/jatin-patware-b9411183",
  github: "https://github.com/jatinpatware",
  portfolio: "https://jatinpatware.github.io",

  heroBadges: [
    "Apache Spark", "Kafka Streams", "AWS", "Apache Iceberg",
    "Data Mesh", "LLM Integration"
  ],

  summary: `Data Engineer with 8+ years of experience known for strong system design instincts
    and structured logical thinking — translating ambiguous business and infrastructure problems
    into clean, scalable data architectures. Experienced across the full data platform lifecycle:
    from requirements and design through to delivery, governance, and optimisation. Deep hands-on
    exposure to Apache Spark, AWS, and distributed pipeline design at petabyte scale. Currently at
    Fanatics, one of the world's largest licensed sports merchandise platforms. Equally comfortable
    whiteboarding a data mesh architecture, reviewing an engineer's design, or digging into a pipeline
    bottleneck. Experienced in mentoring engineers, driving cross-functional alignment, and integrating
    AI/LLM tooling into data workflows.`,

  focus: [
    "Clean data architecture from ambiguous requirements",
    "Pipeline performance — Spark UI and DAG debugging are second nature",
    "Data contracts and quality frameworks that prevent incidents",
    "LLM tooling integration to reduce engineering overhead",
    "Mentoring engineers and cross-functional technical alignment"
  ],

  skills: [
    { category: "Core", items: ["System Design", "Data Architecture", "Apache Spark", "Scala", "PySpark", "SQL", "Python", "Distributed Systems", "ETL / Pipeline Design", "Technical Mentoring"] },
    { category: "Cloud & Infra", items: ["AWS S3", "AWS EMR", "AWS Glue", "AWS Lambda", "AWS Redshift", "AWS Bedrock", "Azure ADF", "Azure Functions", "Azure HD Insights", "Snowflake", "Docker"] },
    { category: "Streaming", items: ["Apache Kafka", "Kafka Streams", "Event-driven Architecture", "Real-Time Processing"] },
    { category: "Storage & Query", items: ["Apache Iceberg", "Spark SQL", "Trino", "Hive", "Redshift", "S3 Data Lake", "Parquet", "ORC"] },
    { category: "Orchestration", items: ["Apache Airflow", "Stonebranch", "DAG Design", "Dependency Management"] },
    { category: "Data Platform", items: ["Data Mesh", "Data Contracts", "Data Lineage", "Data Quality Frameworks", "Data Cataloguing", "Data Governance", "SLA Management"] },
    { category: "AI / LLM", items: ["AWS Bedrock", "Bedrock Agents", "LLaMA3", "Glean", "Claude (Anthropic)", "LLM Pipeline Integration", "Agentic Solutions"] },
    { category: "BI / Legacy", items: ["Power BI", "SSAS Tabular", "SSMS", "SSIS", "C#", "Stored Procedures"] },
    { category: "Engineering", items: ["CI/CD Pipelines", "Git", "Agile / Scrum", "System Design Reviews", "Performance Tuning", "Spark UI", "DAG Inspection"] }
  ],

  experience: [
    {
      company: "Fanatics",
      companyDesc: "Global Licensed Sports Merchandise Platform",
      period: "Feb 2022 – Present",
      roles: [
        {
          title: "Senior Data Engineer",
          period: "Mar 2025 – Present",
          stack: "Apache Spark (Scala) · AWS (S3, EMR, Glue, Lambda, Bedrock) · Kafka Streams · Airflow · Stonebranch · Trino · Python · SQL · Docker",
          bullets: [
            "Own design and reliability of real-time order event processing on Kafka Streams — canonical data models and transformation contracts supporting <strong>30–40K messages/min at peak</strong> across multiple downstream consumers",
            "Maintain and evolve the canonical Iceberg layer at <strong>petabyte scale</strong>, consumed by downstream BI and analytics systems",
            "Built an <strong>agentic solution for automated order data lineage tracing</strong> across a complex multi-layer pipeline — enabling engineers to debug field discrepancies end-to-end across Kafka Streams, Iceberg, and downstream BI layers",
            "Integrated LLM-powered capabilities using AWS Bedrock Agents, Glean, and Claude — automated insight surfacing and reduced engineering overhead",
            "Mentored junior and mid-level engineers; go-to design reviewer across cross-functional squads",
            "Drove data mesh adoption — data contracts, lineage, and cataloguing at platform scale"
          ]
        },
        {
          title: "Data Engineer III",
          period: "Mar 2022 – Feb 2025",
          stack: "Apache Spark (Scala) · AWS (S3, EMR, Glue, Lambda) · Kafka Streams · Stonebranch · Trino · Python · SQL",
          bullets: [
            "Designed and delivered Spark batch pipelines on AWS processing petabyte-scale commerce data — significant runtime and compute cost reductions via Spark UI and DAG tuning",
            "Built backend data pipelines powering executive dashboards — enabling <strong>200+ ecommerce metrics</strong> consumed by senior leadership",
            "Designed and built an <strong>in-house data quality framework in Scala/Spark with YAML-based rule configuration</strong> — adopted across critical pipelines for validation, SLA enforcement, and alerting",
            "Built an <strong>LLM-powered executive insight engine</strong> (internal hackathon) — LLaMA3 on EC2, invoked via AWS Lambda, generating natural language insights from enriched S3 commerce data",
            "Built ETL pipelines in Scala/Spark powering BI reporting layers — translating raw commerce events into clean, reliable analytical datasets",
            "Owned orchestration across <strong>100+ workflows</strong> on Stonebranch — rationalised dependency graphs and standardised failure recovery approaches"
          ]
        }
      ]
    },
    {
      company: "Fractal Analytics",
      period: "Nov 2020 – Jan 2022",
      roles: [
        {
          title: "Data Engineer",
          period: "Nov 2020 – Jan 2022",
          stack: "Snowflake · Azure Data Factory · Python · SQL",
          bullets: [
            "Built ETL pipelines into Snowflake for Marketing Mix Modelling and Supply Chain analytics clients",
            "Created transformation and harmonisation layers across client datasets",
            "Worked across multiple client engagements with focus on pipeline reliability and data consistency"
          ]
        }
      ]
    },
    {
      company: "MAQ Software",
      period: "Jul 2018 – Oct 2020",
      roles: [
        {
          title: "BI & Backend Engineer",
          period: "Jul 2018 – Oct 2020",
          stack: "SSMS · SSAS · SQL · Azure Data Factory · Azure Functions · C# · Power BI · HD Insights",
          bullets: [
            "Developed enterprise BI solutions — tabular SSAS models, SSIS ETL pipelines, stored procedures, and Power BI dashboards",
            "Built Azure Functions for API ingestion and CI/CD pipelines for automated deployment"
          ]
        }
      ]
    }
  ],

  // Add link when cert is published publicly; set link: null to hide the badge link
  certifications: [
    { name: "AWS Certified Data Engineer – Associate", icon: "☁️", featured: true, link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/4fdc06a7d5484a28a7366cf8c0d0f1d7" },
    { name: "Microsoft Azure DP-200 / DP-201", icon: "🔷", link: "https://www.credly.com/badges/9e072037-6fde-4af1-91b2-64d56ae5e08a/public_url" },
    { name: "Microsoft Azure AZ-203", icon: "🔷", link: null },
    { name: "Microsoft Power BI 70-778", icon: "🔷", link: null },
    { name: "Coursera Data Structures & Algorithms Specialisation", icon: "📘", link: null }
  ],

  // Set github: "https://github.com/jatinpatware/<repo>" when ready to publish
  projects: [
    {
      name: "Data Quality Framework",
      desc: "Scala/Spark DQ framework with YAML-based rule configuration — covering validation, SLA enforcement, and alerting across batch pipelines.",
      stack: ["Scala", "Apache Spark", "YAML", "AWS"],
      status: "coming-soon",
      github: null
    },
    {
      name: "LLM Executive Insight Engine",
      desc: "LLM-powered insight engine — LLaMA3 on EC2, invoked via AWS Lambda, generating natural language insights from structured pipeline data.",
      stack: ["LLaMA3", "AWS Lambda", "EC2", "S3", "Python"],
      status: "coming-soon",
      github: null
    },
    {
      name: "Pipeline Lineage Tracer",
      desc: "Agentic tool for automated end-to-end data lineage tracing across a multi-layer streaming and batch pipeline — enabling engineers to debug field discrepancies without manual digging.",
      stack: ["Kafka Streams", "Apache Iceberg", "Python", "Claude AI"],
      status: "coming-soon",
      github: null
    }
  ],

  education: [
    {
      degree: "M.Tech — Computer Science & Engineering",
      school: "National Institute of Technology Allahabad (MNNIT)",
      period: "2016 – 2018",
      cgpa: "8.55 / 10",
      notes: ["AIR-1518 in GATE 2016 (Computer Science)", "Co-ordinator, Data Analytics & ML Workshop (2017, 2018)"]
    },
    {
      degree: "B.E. — Computer Science & Engineering",
      school: "Madhav Institute of Technology & Science, Gwalior (MITS)",
      period: "2012 – 2016",
      cgpa: "7.8 / 10",
      notes: []
    }
  ],

  achievements: [
    "AIR-1518 in GATE 2016 (Computer Science)",
    "Recognised by management for autonomous problem-solving on a high-impact production project at Fanatics",
    "Co-ordinator, Data Analytics & ML Workshop at MNNIT (2017, 2018)"
  ]
};
