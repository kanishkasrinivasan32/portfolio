/** All copy below is taken from the reference site's rendered DOM and live case studies. */
export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export const RESUME = { href: "/kanishka-s-resume.pdf", filename: "Kanishka-S-Resume.pdf" };

export const MARQUEE = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Analytics",
  "Retrieval-Augmented Generation",
  "Computer Vision",
  "Explainable AI",
  "Local-First AI",
];

export interface CaseStudy {
  caseNumber: string;
  objective: string;
  approach: string;
  contributions: string[];
  technologies: string[];
  note: string;
  sections?: { heading: string; body: string }[];
}

export interface Project {
  id: string;
  n: string;
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  summary: string;
  tags: string[];
  caseStudy: CaseStudy;
}

export const PROJECTS: Project[] = [
  {
    id: "rag-metadata",
    n: "01",
    image: "/images/project-rag.jpg",
    imageAlt: "Advanced Metadata Generation: Utilizing RAG for Enhanced Accuracy — project artwork",
    category: "RAG / Semantic Search / Document Intelligence",
    title: "Advanced Metadata Generation: Utilizing RAG for Enhanced Accuracy",
    summary:
      "Developed a local RAG-based application that generates metadata and answers queries from unstructured PDF documents using LLaMA 2, FAISS, and SentenceTransformers.",
    tags: ["RAG", "LLaMA 2", "FAISS"],
    caseStudy: {
      caseNumber: "01",
      objective:
        "Unstructured PDFs often carry missing or inconsistent metadata, and finding the right information by hand is slow. The objective was to automate metadata generation and question-answering over local documents — without sending any data to the cloud.",
      approach:
        "A fully local RAG pipeline: PDFs are parsed with PyMuPDF, chunked and embedded with SentenceTransformers, and indexed in FAISS for semantic retrieval. A LLaMA 2 model orchestrated through LangChain then generates metadata and answers queries strictly from the retrieved context.",
      contributions: [
        "Automated metadata extraction, eliminating manual effort",
        "Improved semantic search accuracy with FAISS retrieval",
        "Designed for privacy-conscious, fully local processing",
      ],
      technologies: ["Python", "LLaMA 2", "FAISS", "SentenceTransformers", "LangChain", "PyMuPDF"],
      note: "Summarized from resume. Repository and demo links will be added here when available.",
      sections: [
        {
          heading: "OBJECTIVE",
          body: "Unstructured PDFs often carry missing or inconsistent metadata, and finding the right information by hand is slow. The objective was to automate metadata generation and question-answering over local documents — without sending any data to the cloud.",
        },
        {
          heading: "APPROACH",
          body: "A fully local RAG pipeline: PDFs are parsed with PyMuPDF, chunked and embedded with SentenceTransformers, and indexed in FAISS for semantic retrieval. A LLaMA 2 model orchestrated through LangChain then generates metadata and answers queries strictly from the retrieved context.",
        },
        {
          heading: "KEY CONTRIBUTIONS",
          body: "• Automated metadata extraction, eliminating manual effort\n• Improved semantic search accuracy with FAISS retrieval\n• Designed for privacy-conscious, fully local processing",
        },
      ],
    },
  },
  {
    id: "vgg19-skin",
    n: "02",
    image: "/images/project-vgg19.jpg",
    imageAlt: "Leveraging the Power of VGG-19 CNN for Skin Disease Diagnosis — project artwork",
    category: "Computer Vision / Deep Learning / Medical Imaging",
    title: "Leveraging the Power of VGG-19 CNN for Skin Disease Diagnosis",
    summary:
      "Developed a deep learning model using VGG-19 to classify skin diseases, including Atopic Dermatitis and Melanoma, from medical images.",
    tags: ["VGG-19", "TensorFlow", "Medical Imaging"],
    caseStudy: {
      caseNumber: "02",
      objective:
        "Manual diagnosis of skin diseases such as Atopic Dermatitis and Melanoma is time-consuming and depends on expert availability. The project explored whether a convolutional network could automate classification and support earlier clinical decision-making.",
      approach:
        "A VGG-19 convolutional network fine-tuned through transfer learning; medical images are preprocessed and normalized, then passed through the pretrained backbone adapted to the disease-classification task.",
      contributions: [
        "Applied image preprocessing and transfer learning to improve classification performance",
        "Explored automated skin disease detection to reduce manual diagnosis effort",
        "Studied the path from automated classification to clinical decision support",
      ],
      technologies: ["Python", "VGG-19", "TensorFlow/Keras", "NumPy"],
      note: "Exploratory academic project · not a clinical or diagnostic tool.",
      sections: [
        {
          heading: "OBJECTIVE",
          body: "Manual diagnosis of skin diseases such as Atopic Dermatitis and Melanoma is time-consuming and depends on expert availability. The project explored whether a convolutional network could automate classification and support earlier clinical decision-making.",
        },
        {
          heading: "APPROACH",
          body: "A VGG-19 convolutional network fine-tuned through transfer learning; medical images are preprocessed and normalized, then passed through the pretrained backbone adapted to the disease-classification task.",
        },
        {
          heading: "KEY CONTRIBUTIONS",
          body: "• Applied image preprocessing and transfer learning to improve classification performance\n• Explored automated skin disease detection to reduce manual diagnosis effort\n• Studied the path from automated classification to clinical decision support",
        },
      ],
    },
  },
  {
    id: "intrusion-detection",
    n: "03",
    image: "/images/project-ids.jpg",
    imageAlt:
      "Adaptive & Explainable Intrusion Detection System Using Denoising Autoencoder and XGBoost — project artwork",
    category: "Cybersecurity / Explainable AI / Network Analytics",
    title: "Adaptive & Explainable Intrusion Detection System Using Denoising Autoencoder and XGBoost",
    summary:
      "Built a two-stage intrusion detection system using a Denoising Autoencoder and XGBoost on the UNSW-NB15 dataset.",
    tags: ["Autoencoder", "XGBoost", "SHAP"],
    caseStudy: {
      caseNumber: "03",
      objective:
        "Network intrusions need to be caught — and understood — quickly. The objective was a two-stage system that both detects attacks on the UNSW-NB15 dataset and explains why each alert was raised.",
      approach:
        "A Denoising Autoencoder learns normal traffic patterns and reconstructs inputs, flagging anomalies; XGBoost then classifies the flagged traffic. SHAP explains feature importance per decision, and fuzzy logic assigns each alert a risk level.",
      contributions: [
        "Explainable detections using SHAP",
        "Risk-level assignment with fuzzy logic",
        "Backend service for logging and monitoring with FastAPI, MySQL and AWS EC2",
      ],
      technologies: ["Python", "TensorFlow/Keras", "XGBoost", "SHAP", "FastAPI", "MySQL", "AWS EC2"],
      note: "Summarized from resume. Repository and demo links will be added here when available.",
      sections: [
        {
          heading: "OBJECTIVE",
          body: "Network intrusions need to be caught — and understood — quickly. The objective was a two-stage system that both detects attacks on the UNSW-NB15 dataset and explains why each alert was raised.",
        },
        {
          heading: "APPROACH",
          body: "A Denoising Autoencoder learns normal traffic patterns and reconstructs inputs, flagging anomalies; XGBoost then classifies the flagged traffic. SHAP explains feature importance per decision, and fuzzy logic assigns each alert a risk level.",
        },
        {
          heading: "KEY CONTRIBUTIONS",
          body: "• Explainable detections using SHAP\n• Risk-level assignment with fuzzy logic\n• Backend service for logging and monitoring with FastAPI, MySQL and AWS EC2",
        },
      ],
    },
  },
  {
    id: "intellora",
    n: "04",
    image: "/images/project-intellora.jpg",
    imageAlt: "Intellora — Local-First AI Learning Companion — project artwork",
    category: "AI / RAG / EdTech / Knowledge Management",
    title: "Intellora — Local-First AI Learning Companion",
    summary:
      "Built an AI-powered learning platform that answers questions from uploaded documents, websites, and YouTube transcripts using retrieval-augmented generation with source citations.",
    tags: ["RAG", "FastAPI", "React"],
    caseStudy: {
      caseNumber: "04",
      objective:
        "Learning material lives scattered across PDFs, websites and videos — hard to search, harder to retain. Intellora turns personal documents into an answerable, structured knowledge base that helps you actually learn.",
      approach:
        "A retrieval-augmented generation core: content from uploaded documents, websites and YouTube transcripts is chunked, embedded into ChromaDB, and answers are generated with source citations. On top sit AI-generated courses, quizzes, flashcards and knowledge maps — with learning data and embeddings stored locally by default.",
      contributions: [
        "AI-generated courses, lessons, quizzes and flashcards",
        "Spaced-repetition reviews and progress tracking",
        "Interactive knowledge maps",
        "Local-first storage with optional cloud AI providers",
      ],
      technologies: ["Python", "FastAPI", "React", "TypeScript", "SQLite", "ChromaDB", "Ollama", "LLaMA 2", "RAG"],
      note: "Summarized from resume. Repository and demo links will be added here when available.",
      sections: [
        {
          heading: "OBJECTIVE",
          body: "Learning material lives scattered across PDFs, websites and videos — hard to search, harder to retain. Intellora turns personal documents into an answerable, structured knowledge base that helps you actually learn.",
        },
        {
          heading: "APPROACH",
          body: "A retrieval-augmented generation core: content from uploaded documents, websites and YouTube transcripts is chunked, embedded into ChromaDB, and answers are generated with source citations. On top sit AI-generated courses, quizzes, flashcards and knowledge maps — with learning data and embeddings stored locally by default.",
        },
        {
          heading: "KEY CONTRIBUTIONS",
          body: "• AI-generated courses, lessons, quizzes and flashcards\n• Spaced-repetition reviews and progress tracking\n• Interactive knowledge maps\n• Local-first storage with optional cloud AI providers",
        },
      ],
    },
  },
];

export const SKILL_GROUPS = [
  {
    id: "ai-tools",
    title: "AI & Development Tools",
    icon: "sparkles",
    wide: true,
    items: [
      "Anthropic Claude",
      "OpenAI ChatGPT",
      "Google Gemini",
      "Microsoft Copilot",
      "Hugging Face",
      "LangChain",
      "Jupyter Notebook",
      "Google Colab",
      "scikit-learn",
    ],
  },
  { id: "languages", title: "Programming Languages", icon: "code", wide: false, items: ["Python", "SQL", "Java"] },
  {
    id: "competencies",
    title: "Core Competencies",
    icon: "brain",
    wide: false,
    items: ["Artificial Intelligence", "Machine Learning", "Data Analytics"],
  },
  { id: "version-control", title: "Version Control", icon: "git", wide: false, items: ["Git", "GitHub"] },
  {
    id: "soft-skills",
    title: "Soft Skills",
    icon: "heart",
    wide: false,
    items: ["Resilience", "Collaboration", "Leadership", "Communication", "Logical Thinking"],
  },
] as const;

export const EDUCATION = [
  {
    years: "2022 – 2026",
    title: "B.E. — Computer Science Engineering (Artificial Intelligence & Machine Learning)",
    school: "Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College",
    score: "CGPA: 8.78",
  },
  {
    years: "2022",
    title: "Higher Secondary Certificate (HSC)",
    school: "Kalaimagal Matriculation Higher Secondary School",
    score: "Percentage: 93%",
  },
  {
    years: "2020",
    title: "Secondary School Leaving Certificate (SSLC)",
    school: "The Dawn School (CBSE)",
    score: "Percentage: 82.8%",
  },
];

export const INTERNSHIP = {
  title: "Mobile App Development Intern",
  org: "NSIC",
  year: "2024",
  points: [
    "Gained practical knowledge of Android app development using Android Studio.",
    "Learned Android activity lifecycle concepts and basic UI/UX design principles.",
  ],
};

export const LEADERSHIP = [
  { title: "Sports Team Captain", text: "Appointed Sports Team Captain in school, leading and organizing athletic teams." },
  {
    title: "College Event Committees",
    text: "Took initiative in organizing college events, handling coordination and execution as part of event committees.",
  },
];

export const CERTIFICATIONS = [
  { title: "Fundamentals of Deep Learning", issuer: "NVIDIA", year: "2023" },
  { title: "Data Analytics Job Simulation", issuer: "Deloitte", year: "2025" },
  { title: "GenAI", issuer: "Guvi", year: "2024" },
  { title: "Cyber Security and Privacy", issuer: "NPTEL", year: "2024" },
  { title: "The Joy of Computing using Python", issuer: "NPTEL", year: "2023" },
  { title: "Claude Certified Architect — Foundations", issuer: "", year: "2026" },
];

export const CONTACT = [
  { id: "email", label: "Email", value: "kanishkasrinivasan2@gmail.com", href: "mailto:kanishkasrinivasan2@gmail.com", icon: "mail", external: false },
  { id: "phone", label: "Phone", value: "+91 7305308205", href: "tel:+917305308205", icon: "phone", external: false },
  { id: "linkedin", label: "LinkedIn", value: "linkedin.com/in/kanishka-srinivasan", href: "https://linkedin.com/in/kanishka-srinivasan", icon: "linkedin", external: true },
  { id: "github", label: "GitHub", value: "github.com/kanishkasrinivasan32", href: "https://github.com/kanishkasrinivasan32", icon: "github", external: true },
] as const;
