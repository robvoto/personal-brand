window.PERSONAL_BRAND_DATA = {
  capabilities: [
    {
      title: 'Technical analysis',
      body: 'Translate messy rules, data and integration issues into clear delivery work.',
    },
    {
      title: 'Delivery leadership',
      body: 'Keep stakeholders, delivery teams and technical teams aligned through Agile/Scrum delivery.',
    },
    {
      title: 'AI-enabled systems',
      body: 'Build practical AI tools and use them with real constraints, not hype.',
    },
    {
      title: 'Process clarity',
      body: 'Turn unclear processes into simple flows, shared understanding and agreed next steps.',
    },
    {
      title: 'Stakeholder translation',
      body: 'Explain complex detail differently for policy, business, technical and delivery audiences.',
    },
    {
      title: 'Presentation and alignment',
      body: 'Create workshops, diagrams and presentation artefacts that help validate, decide and move.',
    },
  ],
  toolkit: [
    {
      title: 'Delivery tools / methods',
      tags: ['Jira', 'Azure DevOps', 'Confluence', 'Miro', 'Agile delivery', 'Scrum', 'Kanban'],
    },
    {
      title: 'Analysis methods',
      tags: ['BPMN 2.0', 'Process mapping', 'User stories', 'Gherkin', 'Traceability matrix', 'UML', 'RACI matrix', 'Flow charts'],
    },
    {
      title: 'Technical / data',
      tags: ['SQL', 'Java', 'Postman', 'REST APIs', 'ETL', 'Data mapping', 'Selenium', 'Cucumber'],
    },
    {
      title: 'AI / coding',
      tags: ['Python', 'OpenAI', 'Claude Code', 'Codex', 'LangChain', 'Playwright', 'FastAPI', 'RAG', 'Prompting'],
    },
  ],
  caseStudies: [
    {
      company: 'DEWR',
      title: 'Payment rules transformation',
      summary: 'Turned fragmented employment program policy into structured payment rules, workflows, user stories and acceptance criteria.',
      tags: ['Policy', 'Payments', 'BPMN', 'SQL'],
      caseFile: {
        situation:
          'When I joined DEWR, the payments team was working through a major transformation of national employment programs. The rules were fragmented across old documentation, system behaviour and stakeholder knowledge. There was no single source of truth, and the team had to transition from legacy behaviour into a new platform under a fixed go-live date.',
        task:
          'My role was to define payment rules that policy could validate and delivery teams could implement. That meant turning policy intent, legacy rules and edge cases into business rules, workflows, user stories, data mappings and acceptance criteria.',
        action:
          'I started with outcome-based payments because they gave us a practical entry point into the system. I analysed legacy documentation, reconstructed business rules, created BPMN workflows, defined field-level mappings, wrote user stories and Gherkin acceptance criteria, and worked directly with developers and QA to clarify behaviour and edge cases. Where there was no interface, I used SQL to inspect underlying data structures and validate how the system actually worked.',
        result:
          'The work gave policy, business and technical teams a shared foundation for implementation. The program went live on 1 November 2025 with the payment rules, workflows and delivery artefacts in place. I was then trusted to independently lead similar payment work for the RAES program.',
      },
    },
    {
      company: 'ABS',
      title: 'Financial data platform',
      summary: 'Defined data rules, edge cases and processing logic for a national financial reporting platform.',
      tags: ['Data', 'Reporting', 'UX', 'APIs'],
      caseFile: {
        situation:
          'At ABS, I worked on a cloud-hosted financial data collection platform supporting national statistical reporting. The platform needed to capture business financial data accurately and align policy, UX and engineering around the same processing logic.',
        task:
          'My role was to turn policy and reporting requirements into clear user stories, data rules, edge cases and acceptance criteria that engineering teams could build and test.',
        action:
          'I owned and prioritised the delivery backlog, worked with UX designers to ensure screens matched data capture needs, defined processing logic and edge cases, and supported REST API testing and data validation using Postman. I also used Miro during refinement sessions to keep policy intent and engineering execution aligned.',
        result:
          'The work turned complex reporting policy into structured system rules and workflows, giving the team clearer delivery direction and improving consistency across UX, engineering and data validation.',
      },
    },
    {
      company: 'NSW eHealth',
      title: 'Secure network transformation',
      summary: 'Coordinated requirements and stakeholder alignment across LHDs, vendors and infrastructure teams.',
      tags: ['Infrastructure', 'Vendors', 'LHDs', 'Governance'],
      caseFile: {
        situation:
          'At NSW eHealth, I worked on a Secure Service Edge transformation across NSW Local Health Districts. The program involved infrastructure, security, vendors, operational stakeholders and multiple technical teams, with a scale and complexity well outside a normal application BA role.',
        task:
          'My role was to help bring structure to the work: clarify requirements, align stakeholders, support governance, and produce the artefacts needed so infrastructure, application and business teams could work from the same view.',
        action:
          'I coordinated requirements across LHD stakeholders, vendors and internal teams. I facilitated workshops, produced BPMN models, BRDs, requirements traceability artefacts and structured communications. I also had to rapidly build enough understanding of infrastructure concepts such as Zscaler, AWS, Algosec, switching and firewalls to ask the right questions and document decisions properly.',
        result:
          'The work helped maintain alignment and traceability across a large multi-vendor program. It also showed my ability to step into a complex technical domain, learn fast, and operate effectively between senior stakeholders and technical teams.',
      },
    },
    {
      company: 'Department of Health',
      title: 'Aged care reporting platform',
      summary: 'Translated aged care policy into functional requirements, user stories and delivery-ready backlog items.',
      tags: ['Health', 'Agile', 'Azure DevOps', 'Policy'],
      caseFile: {
        situation:
          'At the Federal Department of Health, I worked on the Annual Accountability Report for the Transition Care Programme, a financial and operational reporting solution for Australian aged care providers. The work started in a more traditional waterfall style, with heavy functional documentation already expected.',
        task:
          'My role was to analyse, design and document the functional and non-functional requirements so the reporting process could be implemented clearly across the Form Submission Portal and Form Management Portal.',
        action:
          'I worked through the policy and reporting requirements, produced process maps and wireframes, and helped transition the work into Agile delivery while still managing the existing documentation expectations. I created epics, user stories and features in Azure DevOps, wrote acceptance criteria using Gherkin, and worked closely with Siebel analysts, developers and testers so the requirement detail was clear enough to build and validate.',
        result:
          'The work gave the delivery team a clearer structure for implementation. Developers and testers had usable stories, visuals and acceptance criteria instead of relying only on large functional documents, which made the solution easier to understand, build and test.',
      },
    },
    {
      company: 'Phoenix DX',
      title: 'Recruitment workflow platform',
      summary: 'Led BA and Agile delivery for a recruitment and staff tracking platform, from discovery through MVP.',
      tags: ['Agile', 'Workflow', 'MVP', 'Stakeholders'],
      caseFile: {
        situation:
          'At Phoenix DX, I led the BA work for a recruitment and job tracking solution for Serco. The client needed to move toward a more automated recruitment and staff tracking process, and the delivery approach also required bringing the client into a more Agile way of working.',
        task:
          'My role was to gather requirements, run workshops, document current processes, define the initial backlog and support delivery through MVP. This included story writing, grooming, sprint planning, sprint reviews and stakeholder validation.',
        action:
          'I co-led the work from discovery through solution design and MVP implementation. I worked with the product owner to prioritise features, wrote user stories and acceptance criteria, facilitated backlog refinement, and prepared scripted sprint reviews so stakeholders could give structured feedback as the system evolved. I also helped the team adapt the delivery rhythm to respond to changing business needs without losing control of scope.',
        result:
          'We delivered an MVP that helped Serco start the move toward an automated recruitment and staff tracking solution. The work showed end-to-end BA delivery: discovery, workflow design, backlog structure, Agile ceremonies, stakeholder validation and incremental delivery.',
      },
    },
    {
      company: 'Rockstar Coders',
      title: 'Digital product delivery',
      summary: 'Managed delivery across web, mobile and SaaS products with distributed teams and client stakeholders.',
      tags: ['SaaS', 'Mobile', 'Remote teams', 'BPMN'],
      caseFile: {
        situation:
          'At Rockstar Coders, I worked as BA, Scrum Master and delivery lead across multiple US client accounts. One of the strongest examples was the Tony Robbins Breakthrough mobile app, which needed stabilisation, backlog control and delivery leadership across a distributed team.',
        task:
          'My role was to help bring structure to the work: manage requirements, support the product owner, prioritise the backlog, coordinate developers and QA, and keep delivery moving while the app continued to evolve.',
        action:
          'I led delivery across BA, Scrum Master and Product Owner responsibilities. I wrote and refined user stories, defined acceptance criteria, supported testing, ran Agile ceremonies and kept the team aligned across mobile, web and backend work. I also adjusted the delivery approach where needed, including using different rhythms for different parts of the work so the team was not wasting time in unnecessary meetings.',
        result:
          'The app improved significantly, with the rating moving from 2.9 to 4.9. The work showed my ability to operate across product, delivery, requirements and stakeholder management in a distributed environment.',
      },
    },
    {
      company: 'NSW Department of Education',
      title: 'Student data migration',
      summary: 'Supported a large-scale student management transformation using SQL, ETL analysis and data validation.',
      tags: ['Education', 'SQL', 'ETL', 'Migration'],
      caseFile: {
        situation:
          'At NSW Department of Education, I worked on the LMBR transformation, a large student management modernisation program across NSW public schools. The work involved replacing and migrating data from existing student systems into a new platform.',
        task:
          'My role was to support the data migration stream by gathering data requirements, documenting the existing dataset, defining cleansing and transformation logic, and helping the vendor understand how the current student data worked.',
        action:
          'I worked with vendor data analysts, solution leads, DBAs and internal stakeholders to define migration, cleansing and validation requirements. I used SQL and PL/SQL to extract, obscure and validate data, produced functional and technical documentation, and supported mapping between the existing system and the target platform.',
        result:
          'The work gave the team clearer migration rules, better data understanding and stronger alignment between internal stakeholders and the vendor. It supported a major transformation program spanning 2,200 schools.',
      },
    },
    {
      company: 'Frucor Suntory',
      title: 'SAP / EDI integration',
      summary: 'Defined inbound and outbound IDOC mappings for major customer integrations including Woolworths, Dominos and Compass.',
      tags: ['SAP', 'EDI', 'Integration', 'Data mapping'],
      caseFile: {
        situation:
          'At Frucor Suntory, major customers had moved to electronic purchasing, dispatch and invoicing standards. Frucor needed its systems to integrate properly with customers such as Woolworths, Dominos and Compass.',
        task:
          'My role was to define the data requirements and mapping specifications for the order-to-cash integration, covering inbound and outbound SAP IDOC / EDI transactions.',
        action:
          'I produced detailed mapping sheets showing the data exchange requirements for each transaction type. I worked with offshore developers in Malaysia and business stakeholders in New Zealand to clarify requirements, resolve issues and ensure the mappings matched customer standards and Frucor’s operational needs.',
        result:
          'The online order-to-cash integration was implemented successfully, giving Frucor a structured way to exchange purchasing, dispatch and invoicing data with major customers.',
      },
    },
  ],
  appliedAi: [
    {
      featured: true,
      title: 'Job Intelligence Tool',
      image: {
        src: 'job_hunter_img.png',
        alt: 'Job Hunter panther icon',
      },
      body: 'Highly customisable AI job intelligence platform that helps candidates find relevant roles, filter noise, assess fit and make faster application decisions.',
      links: [
        {
          label: 'Demo',
          href: 'https://drive.google.com/file/d/1X5fwEAcQ3bDygtQ6dC_Wuu5c_a4gxJQQ/view?usp=sharing',
        },      
      ],
    },
    {
      title: 'knowMe',
      featuredAligned: true,
      body: 'Live LLM assistant for asking evidence-based questions about my experience.',
      links: [
        {
          label: 'Website',
          href: 'https://knowme-reeo.onrender.com/',
        },
      ],
    },
    {
      title: 'AI Coding Orchestrator',
      body: 'AI agent that manages coding agents: backlog planning, approval gates, task instructions, review, escalation and controlled delivery.',
      badges: ['Agentic AI', 'Approval gates', 'Review loop'],
    },
    {
      title: 'Workflow Automation Prototype',
      body: 'Monday.com ticketing workflow with intake, routing, ownership, SLA tracking and escalation logic.',
      badges: ['Monday.com', 'SLA tracking', 'Escalation'],
    },
  ],
  industries: [
    {
      title: 'Government / APS',
    },
    {
      title: 'Health',
    },
    {
      title: 'Education',
    },
    {
      title: 'Finance / payments',
    },
    {
      title: 'Insurance',
    },
    {
      title: 'FMCG / supply chain',
    },
    {
      title: 'SaaS / consulting',
    },
  ],
  educationTop: [
    {
      title: "Bachelor's Degree in Information Technology",
    },
    {
      title: 'Certified Associate in Project Management',
      logo: {
        src: 'capm.png',
        alt: 'PMI CAPM logo',
        wide: false,
      },
    },
    {
      title: 'Certified Scrum Master',
      logo: {
        src: 'scrummaster.png',
        alt: 'Certified Scrum Master logo',
        wide: true,
      },
    },
  ],
  educationBottom: [
    { title: 'BPMN 2.0 Business Process Modelling Certificate' },
    { title: 'OutSystems Associate Reactive Developer' },
    { title: 'Guidewire Policy and Claim Centre' },
  ],
};
