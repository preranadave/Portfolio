import project1 from '../assets/images/Project1.webp';
import project2 from '../assets/images/Project2.webp';
import project3 from '../assets/images/Project3.webp';
import project4 from '../assets/images/Project4.webp';
import project5 from '../assets/images/Project5.webp';
import project6 from '../assets/images/Project6.webp';
import jagHome from '../assets/images/jag-home.webp';
import personal1 from '../assets/images/personal-project-1.webp';
import personal2 from '../assets/images/personal-project-2.webp';
import personal3 from '../assets/images/personal-project-3.webp';
import personal4 from '../assets/images/personal-project-4.webp';
import aboutImg from '../assets/images/about-img.jpeg';

export { aboutImg };

export const skills = {
  "Front-End": ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Responsive Design", "Cross-Browser Compatibility", "Pixel-Perfect UI"],
  "Shopify": ["Shopify Theme Development", "Liquid", "Sections & Templates", "Customization", "E-commerce UI"],
  "WordPress": ["WordPress", "Elementor", "WPBakery"],
  "Design": ["Figma to HTML", "Figma Handoff", "UI/UX Best Practices"],
  "AI Workflow": ["ChatGPT", "Claude", "Cursor", "AI-Assisted Dev", "AI Debugging", "Code Optimization"],
};

export const experience = [
  {
    company: "Aceinfoway (AQE Group)",
    role: "Junior Front-End Developer",
    period: "April 2025 – Present",
    type: "Full-time",
    responsibilities: [
      "Developed responsive websites using HTML, CSS, JavaScript",
      "Built Shopify sections and templates",
      "Customized WordPress websites",
      "Converted Figma designs into production-ready interfaces",
      "Collaborated with designers and developers",
    ],
  },
  {
    company: "Aceinfoway (AQE Group)",
    role: "Front-End Developer Intern",
    period: "Jan 2025 – March 2025",
    type: "Internship",
    responsibilities: [
      "Built responsive layouts and converted design mockups",
      "Implemented UI enhancements and fixed styling issues",
      "Learned reusable component architecture",
    ],
  },
  {
    company: "TOPS Technologies",
    role: "React Developer Trainee",
    period: "Oct 2023 – Dec 2024",
    type: "Training",
    responsibilities: [
      "Learned React.js and built component-based applications",
      "Developed Carpool Service project",
      "Worked with Tailwind CSS and modern JavaScript",
    ],
  },
  {
    company: "Xpertnest",
    role: "Junior Web Developer",
    period: "Oct 2020 – Mar 2022",
    type: "Full-time",
    responsibilities: [
      "Worked with Angular, ASP.NET, HTML, CSS, JavaScript, jQuery",
      "Developed front-end features and UI enhancements",
      "Collaborated with clients and maintained existing systems",
    ],
  },
  {
    company: "Silvertouch Technologies Ltd.",
    role: "Trainee Engineer",
    period: "Oct 2020 – Mar 2022",
    type: "Internship",
    responsibilities: [
      "Core PHP training with HTML/CSS",
      "Database integration and dynamic web pages",
      "Software architecture understanding",
    ],
  },
];

export const clientProjects = [
  {
    id: "handmade-milano",
    title: "Handmade in Milano",
    tech: "WordPress HTML Template",
    description: "A refined editorial page build translating the provided concept into a responsive production experience.",
    liveUrl: "https://www.la-giardiniera.it/about/handmade-in-milano",
    figmaUrl: "https://www.figma.com/proto/WEqyUKELh9aJGUKxpAksRs/Handmade-in-Milano-a",
    preview: project1,
    accent: "#8f3f2d",
    tags: ["WordPress", "HTML", "CSS"],
  },
  {
    id: "trigild",
    title: "Trigild",
    tech: "WordPress Elementor",
    description: "Corporate website implementation with clean content hierarchy, responsive layouts, and conversion-focused pages.",
    liveUrl: "https://trigild.com/",
    preview: project2,
    accent: "#315f72",
    tags: ["WordPress", "Elementor"],
  },
  {
    id: "popularity-products",
    title: "Popularity Products",
    tech: "Shopify / Dawn",
    description: "Shopify storefront work using Dawn theme patterns, custom styling, and ecommerce-ready responsive sections.",
    liveUrl: "https://popularityproducts.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=139272159525",
    figmaUrl: "https://www.figma.com/proto/lVg9mDHl6IB9ns8UaPefkX/206_popularityproducts.com-35010-1a",
    preview: project3,
    accent: "#5b7c3d",
    tags: ["Shopify", "Liquid", "CSS"],
  },
  {
    id: "loumi-home",
    title: "Loumi Skincare Home",
    tech: "Shopify / Flow",
    description: "Premium skincare storefront homepage with soft product storytelling and polished responsive composition.",
    liveUrl: "https://loumiskincare.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=154965213349",
    figmaUrl: "https://www.figma.com/proto/JikKSwd9NRzkXye8wyWUbu/60_loumiskincare.com-34484-h-final",
    preview: project4,
    accent: "#b77b63",
    tags: ["Shopify", "Figma", "CSS"],
  },
  {
    id: "loumi-ingredients",
    title: "Loumi Ingredients Page",
    tech: "Shopify",
    description: "Ingredient education page designed for clarity, scannability, and brand-aligned product confidence.",
    liveUrl: "https://loumiskincare.com/pages/ingredients",
    figmaUrl: "https://www.figma.com/proto/sJibAHv4lcZR8XSMLJU9zO/ingredients-a",
    preview: project5,
    accent: "#7f8f6f",
    tags: ["Shopify", "Liquid"],
  },
  {
    id: "loumi-before-after",
    title: "Loumi Before & After",
    tech: "Shopify",
    description: "Results-focused page with clean visual structure and mobile-friendly browsing for proof-led ecommerce.",
    liveUrl: "https://loumiskincare.com/pages/before-after",
    figmaUrl: "https://www.figma.com/proto/F0auRTWTO7e5SNGjbRDukq/before-after-d",
    preview: project6,
    accent: "#ba6f7a",
    tags: ["Shopify", "Liquid"],
  },
  {
    id: "jag-new-york",
    title: "Jag New York",
    tech: "WordPress",
    description: "Brand website work with a clean presentation layer and reliable responsive page structure.",
    liveUrl: "https://jagnewyork.com/",
    preview: jagHome,
    accent: "#2f3845",
    tags: ["WordPress", "HTML", "CSS"],
  },
];

export const personalProjects = [
  {
    id: "all-stars-home-services",
    title: "All Stars Home Services",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "Responsive marketing site for a home services business with service highlights and contact-focused layout.",
    githubUrl: "https://github.com/preranadave/allStarsHomeServices",
    preview: personal1,
  },
  {
    id: "legal-pro-connect",
    title: "Legal Pro Connect",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "Professional legal services landing page with clear practice-area sections and lead capture structure.",
    githubUrl: "https://github.com/preranadave/legal-pro-connect",
    preview: personal2,
  },
  {
    id: "miller-storm",
    title: "Miller Storm",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "Brand-forward static website built with semantic markup, custom styling, and interactive UI details.",
    githubUrl: "https://github.com/preranadave/MillerStorm",
    preview: personal3,
  },
  {
    id: "whisker-wash",
    title: "Whisker Wash",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "Pet grooming business site with service pricing, gallery sections, and mobile-friendly navigation.",
    githubUrl: "https://github.com/preranadave/whisker-wash",
    preview: personal4,
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering",
    institution: "V.V.P Engineering College, Rajkot",
    year: "2020",
    grade: null,
  },
  {
    degree: "Diploma in Engineering",
    institution: "Atmiya Institute of Science and Technology",
    year: "2017",
    grade: "80%",
  },
];

export const techMarquee = [
  "React.js", "Shopify", "Tailwind CSS", "JavaScript", "HTML5", "CSS3",
  "Figma", "Liquid", "WordPress", "GSAP", "Framer Motion",
  "Git", "Elementor", "jQuery"
];
