// Single source of truth for all site copy.
// Edit this file whenever your resume changes — components read from here.

export const profile = {
  name: 'Sornalakshmi G',
  roles: ['Data Analyst', 'Full Stack Developer', 'ML Engineer'],
  tagline:
    'I turn raw data and rough ideas into shipped products — from MERN applications to trained deep learning models.',
  location: 'Vellore, Tamil Nadu, India',
  email: 'sornalakshmi2910@gmail.com',
  phone: '+91 7010248928',
  github: 'https://github.com/sornalakshmi2910',
  githubUsername: 'sornalakshmi2910',
  linkedin: 'https://linkedin.com/in/sornalakshmi-g',

  about: `Full Stack Developer and Data Analyst with a foundation in the MERN stack and applied deep learning.
I build responsive, production-ready web applications and pair them with data-driven features — from RESTful
APIs and secure auth to CNN-based image classifiers and RAG pipelines. Currently completing my B.Tech in
Computer Science (Data Science) at VIT Vellore.`,

  stats: [
    { label: 'Projects Built', value: '10+' },
    { label: 'Technologies', value: '25+' },
    { label: 'Certifications', value: '4' },
    { label: 'CGPA', value: '8.15' },
  ],

  skills: {
    'Data Analysis': [
      'Python', 'SQL', 'R', 'Pandas', 'NumPy', 'Power BI', 'Tableau', 'Matplotlib', 'Seaborn',
    ],
    'Full Stack Dev': [
      'React.js', 'Next.js', 'Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'MySQL', 'Tailwind CSS',
    ],
    'AI / ML': [
      'TensorFlow', 'PyTorch', 'Scikit-learn', 'CNN', 'RAG', 'LLMs', 'Deep Learning',
    ],
    'Tools & Cloud': [
      'Git', 'GitHub', 'AWS', 'Docker', 'Postman', 'CI/CD', 'Streamlit', 'MLflow',
    ],
  },

  experience: [
    {
      role: 'Full Stack Developer Intern',
      company: 'Daacworks Technologies Pvt. Ltd.',
      location: 'Bangalore (Remote)',
      period: 'May 2025 – July 2025',
      points: [
        'Engineered full-stack features and analytics dashboards with React.js and Next.js across 5+ application modules.',
        'Optimised RESTful backend APIs and data pipelines with Node.js, improving processing efficiency by ~25%.',
        'Built reusable visualisation components (charts, timelines) supporting real-time analytics.',
        'Collaborated within an agile, cross-functional team to ship scalable, production-ready features end-to-end.',
      ],
    },
  ],

  education: {
    school: 'Vellore Institute of Technology, Vellore',
    degree: 'B.Tech, Computer Science and Engineering (Data Science)',
    period: '2022 – 2026',
    detail: 'CGPA: 8.15',
  },

  // Fallback projects shown if GitHub fetch fails or while loading.
  featuredProjects: [
    {
      title: 'AI-Powered Crop Disease Detection',
      description:
        'Deep learning pipeline (ResNet101, ConvNeXtBase, DenseNet121) trained on 5,000+ agricultural images to classify crop diseases across 10+ categories with 91.2% accuracy, deployed via Streamlit.',
      tags: ['Python', 'CNN', 'Deep Learning', 'Streamlit'],
      link: 'https://github.com/sornalakshmi2910',
      stars: 0,
    },
    {
      title: 'AI Doctor Assistant (RAG)',
      description:
        'End-to-end RAG healthcare chatbot over 500+ medical documents — vector indexing, retrieval, and a Streamlit interface for symptom-based queries, improving contextual accuracy by 40%.',
      tags: ['Python', 'RAG', 'LLM', 'Streamlit'],
      link: 'https://github.com/sornalakshmi2910',
      stars: 0,
    },
    {
      title: 'Learning Management System',
      description:
        'Full-stack MERN LMS with course creation, enrollment, and real-time progress tracking. JWT-based auth with role-based access for Admin, Instructor, and Student.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      link: 'https://github.com/sornalakshmi2910',
      stars: 0,
    },
    {
      title: 'Multiple Disease Prediction',
      description:
        'Machine learning system predicting multiple diseases (diabetes, heart, Parkinson\'s) with high accuracy using ensemble models and a clean Streamlit interface.',
      tags: ['Python', 'Scikit-learn', 'Streamlit', 'ML'],
      link: 'https://github.com/sornalakshmi2910',
      stars: 0,
    },
    {
      title: 'Crop Yield Prediction',
      description:
        'ML-powered crop yield forecasting system using weather, soil, and historical data to help farmers plan better.',
      tags: ['Python', 'Machine Learning', 'Pandas', 'NumPy'],
      link: 'https://github.com/sornalakshmi2910',
      stars: 0,
    },
    {
      title: 'Supermarket Management System',
      description:
        'Full-featured PHP-based supermarket management application with inventory tracking, billing, and reporting dashboards.',
      tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
      link: 'https://github.com/sornalakshmi2910',
      stars: 0,
    },
  ],

  certifications: [
    { name: 'Generative AI Professional', issuer: 'Oracle', year: '2025' },
    { name: 'AWS Solutions Architect', issuer: 'Infosys Springboard', year: '2024' },
    { name: 'AWS Cloud Practitioner', issuer: 'AWS Academy', year: 'Pursuing' },
    { name: 'Power BI for Beginners', issuer: 'Simplilearn', year: '2024' },
  ],
};
