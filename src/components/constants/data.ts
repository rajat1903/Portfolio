// This file contains constants and data used across the portfolio template. 
// Update the values to personalize your portfolio.

export const ABOUT_ME = {
  name: "Rajat Deshmukh",
  title: "Software Developer",
  location: "Indore, India",
  email: "rajatdeshmukh66@gmail.com",
  description: [
     "Passionate software developer with a solid foundation in Python, Java, and MySQL. Skilled in building projects using frameworks such as Django and Spring Boot. Quick learner with strong problem-solving abilities and a continuous drive to expand technical expertise. Collaborative team player experienced in working on group projects and delivering quality solutions. Eager to contribute technical skills, adaptability, and enthusiasm to a software development role and support organizational success."
  ],
  profileImage: "/download.gif", // Replace with your profile image
  profileGif: "/giphy.gif", // Replace with your personalised gif
};

export const USER_NAMES = {
  githubUsername: "rajat1903",
  leetcodeUsername: "user-null", // remove or keep blank if you don't have a LeetCode profile
  hashnodeUsername: "", // remove or keep blank if you don't have a Hashnode profile
};

export const SOCIAL_LINKS = {
  github: "https://github.com/rajat1903",
  linkedin: "https://www.linkedin.com/in/rajat-deshmukh-264666280/",
  twitter: "https://x.com/rajatd01",
  leetcode: "https://leetcode.com/u/user-null/",
  // remove or keep blank if you don't have a Peerlist profile
  peerlist: "",
  instagram: "https://instagram.com/__rajat.1903__",
  email: "mailto:rajatdeshmukh66@gmail.com",
 // remove if you don't have a blog
  blog: "",
  resume: "https://drive.google.com/file/d/1xgCtyl-uA_IuvOS5gxccH-vIwwFTGrdk/view?usp=drive_link",
};

// Contact form endpoint (update with your own Formspree endpoint)
export const FORM_ENDPOINT = "";

export const SKILLS = { // Keep only the skills you want to showcase and remove the rest
  frontend: [
    "HTML", "CSS", "JavaScript", "React"
  ],
  backend: [
    "Django", "Flask", "Spring Boot", "FastAPI"
  ],
  databases: [
    "MongoDB", "MySQL", "PostgreSQL", "SQLite", "Supabase"
  ],
  languages: [
    "C", "C++", "Java", "Python"
  ],
  cloudDevOps: [
    "AWS", "Docker", "Vercel", "Netlify"
  ],
  tools: [
    "VS Code", "Git", "GitHub", "Postman"
  ],
};

export const PROJECTS = [
  {
    name: "AI Email Reply Generator",
    description: "An AI-powered email reply generator that uses Artificial Intelligence to generate replies to emails.",
    tech: ["React", "Spring Boot", "Gemini API"],
    link: "https://email-reply-generator-online.netlify.app/",
    github: "https://github.com/rajat1903/AI-Email-Reply-Generator-Online",
  },
  {
    name: "Shop Inventory Manager",
    description: "A shop inventory manager that allows you to manage your shop inventory.",
    tech: ["Python", "Tkinter", "MySQL"],
    link: "https://github.com/rajat1903/Shop-Inventory-Manager",
    github: "https://github.com/rajat1903/Shop-Inventory-Manager",
  },
  {
    name: "Ecommerce Backend API",
    description: "A ecommerce backend API that allows you to manage your ecommerce inventory.",
    tech: ["Python", "Django", "SQLite"],
    link: "https://github.com/rajat1903/Ecommerce-API",
    github: "https://github.com/rajat1903/Ecommerce-API",
  },
  // Add more projects as needed
];

export type ExperienceItem = {
  company: string;
  companyLink?: string;
  role: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
};

export const EXPERIENCE: ExperienceItem[] = [];

export const EDUCATION = [
  {
    degree: "Masters of Computer Application",
    institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
    institutionLink: "https://www.rgpv.ac.in/",
    period: "2024 - 2026",
    score: "7.8 GPA",
  },
  // Add more education as needed
];