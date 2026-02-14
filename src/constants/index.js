import ExploreInn from "../assets/projects/ExploreInn.png";
import MovieMania from "../assets/projects/MovieMania.png";
import QuickBazaar from "../assets/projects/QuickBazaarPhoto.png";
import uberClone from "../assets/projects/uberClone.jpeg";
import verify from "/verify.png";

export const HERO_CONTENT = `Hi, I'm Karan Singh Bisht , a results-driven MERN Stack Developer with a deep passion for creating cutting-edge web applications. My expertise spans both front-end and back-end development, allowing me to architect and deliver end-to-end solutions that drive business growth and user engagement.`;

export const ABOUT_TEXT = `I have a deep passion for building interactive, high-performance websites and applications. With expertise in the MERN stack (MongoDB, Express, React, Node.js), I specialize in crafting seamless full-stack solutions that are both scalable and user-centric.

I thrive on turning complex problems into simple, elegant solutions by leveraging modern web technologies. Whether it’s developing robust APIs, creating responsive and visually appealing front-end designs, or optimizing back-end performance, I focus on delivering end-to-end web applications that are intuitive and engaging.


`;

export const EXPERIENCES = [
  {
    year: "Jan 2026 - Present",
    role: "Software Engineer",
    company: "NDVTechsys",
    description: [
      "Engineered the full-stack NIA application, delivering a React + shadcn/ui + Typescript frontend optimized with lazy loading and caching to accelerate page rendering.",
      "Developed Express services with Redis, reducing database queries by 50% and optimizing response times for frequent requests.",
      "Introduced worker services using BullMQ for chat and background jobs, reducing database blocking time by 70% and improving system scalability to handle 5x concurrent requests.",
      "Containerized the application using Docker Compose, published images to Docker Hub, and deployed on AWS EC2 with S3-backed static hosting, improving release reliability and environment reproducibility.",
    ],
    technologies: [
      "React",
      "Typescript",
      "shadcn/ui",
      "Express.js",
      "Redis",
      "BullMQ",
      "Docker",
      "Docker Compose",
      "AWS EC2",
      "AWS S3",
    ],
  },
  {
    year: "Jul 2025 - Dec 2025",
    role: "Software Engineer",
    company: "ModelSuite AI (Startup)",
    description: [
      "Built a dynamic portfolio builder enabling models to generate professional portfolios using customizable presets, media uploads, and structured profile data; improved shareability with agencies and reduced manual curation effort.",
      "Improved dashboard performance, cutting load time from 3–3.5s to 500–800ms (~75%) using API batching, caching, and rendering optimization.",
      "Implemented an AI-driven persona generation workflow using Google's Gemini API, increasing profile completeness and reducing manual edits.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Google Gemini API",
      "API Optimization",
      "Caching",
    ],
  },
  {
    year: "Apr 2025 -Jul 2025",
    role: "Full Stack Web Developer Intern",
    company: "Harsar Infonics",
    description: [
      "Developed responsive and optimised UIs using React.js, Redux, Tailwind CSS, and Framer Motion, ensuring seamless interaction and performance across devices.",
      "Built a feature-rich admin dashboard with JWT authentication,cookies, user verification and management, real-time location tracking (Google Maps API), and an Instagram-style content feed with built-in moderation.",
      "Designed a secure, real-time backend using Node.js, Express.js, MongoDB (Mongoose), and Socket.IO to handle APIs, user data, and applied database optimising techniques(indexing).",
      "Performed hosting websites using google cloud platform and converted http websites to https.",
    ],
    technologies: [
      "React",
      "Vite",
      "TailwindCSS",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "GitHub",
      "Google APIs",
      "Google Cloud Platform",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Uber Clone",
    image: uberClone,
    description:
      "As someone who regularly uses Uber for commuting between college and home, I decided to take on the challenge of building my own ride-hailing platform — and it's been an incredible learning journey Goal: Recreate the Uber experience with real-time features, clean UI, and seamless interaction between rider and driver.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
      "MongoDB",
      "JWT",
      "Cookies",
      "Socket.io",
      "Context API",
      "Redux Toolkit",
      "Google Map API",
      "Github",
    ],
    link: "https://quickryde.netlify.app/",
    video:
      "https://drive.google.com/file/d/1ZQ7OaFJm9eIHS8Mpko8q9WKSmZL5TlbM/view?usp=drive_link",
  },
  {
    title: "Verify - Authenticity Validator for Academia",
    image: verify, // You'll need to add your image variable
    description:
      "Verify is an AI-powered blockchain-backed document authentication platform built to detect forged and tampered credentials. Developed for the ISRO hackathon where we achieved Top-5 placement. The platform enables secure role-based access control, university onboarding with controlled issuance workflows, and QR-code-based verification for instant validation of blockchain-anchored certificates and degree records.",
    technologies: [
      "React",
      "Typescript",
      "Redux",
      "Blockchain",
      "AI",
      "QR Code",
      "Github",
    ],
    link: "https://verify-v1.netlify.app/",
  },
  {
    title: "QuickBazaar – Cloud-Native Microservices E-commerce Platform",
    image: QuickBazaar, // Using your existing image variable
    description:
      "QuickBazaar is a cloud-native microservices-based e-commerce system with independent services for auth, user, cart, payment, rating, product and orders. The platform is orchestrated on Kubernetes using Helm charts with environment-specific configurations and rolling updates. Features secure inter-service communication via NGINX Ingress Controller and deploys MongoDB Community Edition with persistent storage for reliable data retention.",
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Kubernetes",
      "Docker",
      "Helm",
      "NGINX",
      "Microservices",
      "Github",
    ],
    link: "https://bucolic-rugelach-8be688.netlify.app/",
  },
  {
    title: "Movie Mania",
    image: MovieMania,
    description:
      "Movie Mania is a comprehensive streaming website designed for film and TV aficionados. ",
    technologies: ["HTML", "CSS", "React", "Redux Toolkit", "Github"],
    link: "https://movie-mania-lac.vercel.app/",
  },
];

export const CONTACT = {
  address: "A-77,Pochanpur,Dwarka New-Delhi 110077 ",
  phoneNo: "+91 7011106163",
  email: "karansbisht7@gmail.com",
};

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/karansinghbisht1108/",
  github: "https://github.com/Karan-Singh-Bisht",
  instagram: "",
  twitter: "",
};
