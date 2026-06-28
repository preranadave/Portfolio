import projectOne from "../../assets/images/Project1.webp";
import projectTwo from "../../assets/images/Project2.webp";
import projectThree from "../../assets/images/Project3.webp";
import projectFour from "../../assets/images/Project4.webp";
import projectFive from "../../assets/images/Project5.webp";
import projectSix from "../../assets/images/Project6.webp";
import jagHome from "../../assets/images/jag-home.webp";

import personalprojectOne from "../../assets/images/personal-project-1.webp";
import personalprojectTwo from "../../assets/images/personal-project-2.webp";
import personalprojectThree from "../../assets/images/personal-project-3.webp";
import personalprojectFour from "../../assets/images/personal-project-4.webp";

export const personalProjectTypes = {
  REACT: "react",
  HTML_CSS_JS: "html-css-js",
};

export const clientProjects = [
  {
    id: "handmade-milano",
    title: "Handmade in Milano",
    tech: "WordPress HTML Template",
    description:
      "A refined editorial page build translating the provided concept into a responsive production experience.",
    liveUrl: "https://www.la-giardiniera.it/about/handmade-in-milano",
    figmaUrl:
      "https://www.figma.com/proto/WEqyUKELh9aJGUKxpAksRs/Handmade-in-Milano-a",
    preview: projectOne,
    accent: "#8f3f2d",
  },
  {
    id: "trigild",
    title: "Trigild",
    tech: "WordPress Elementor",
    description:
      "Corporate website implementation with clean content hierarchy, responsive layouts, and conversion-focused pages.",
    liveUrl: "https://trigild.com/",
    preview: projectTwo,
    accent: "#315f72",
  },
  {
    id: "popularity-products",
    title: "Popularity Products",
    tech: "Shopify / Dawn",
    description:
      "Shopify storefront work using Dawn theme patterns, custom styling, and ecommerce-ready responsive sections.",
    liveUrl:
      "https://popularityproducts.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=139272159525",
    figmaUrl:
      "https://www.figma.com/proto/lVg9mDHl6IB9ns8UaPefkX/206_popularityproducts.com-35010-1a",
    preview: projectThree,
    accent: "#5b7c3d",
  },
  {
    id: "loumi-home",
    title: "Loumi Skincare Home",
    tech: "Shopify / Flow",
    description:
      "Premium skincare storefront homepage with soft product storytelling and polished responsive composition.",
    liveUrl:
      "https://loumiskincare.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=154965213349",
    figmaUrl:
      "https://www.figma.com/proto/JikKSwd9NRzkXye8wyWUbu/60_loumiskincare.com-34484-h-final",
    preview: projectFour,
    accent: "#b77b63",
  },
  {
    id: "loumi-ingredients",
    title: "Loumi Ingredients Page",
    tech: "Shopify",
    description:
      "Ingredient education page designed for clarity, scannability, and brand-aligned product confidence.",
    liveUrl: "https://loumiskincare.com/pages/ingredients",
    figmaUrl:
      "https://www.figma.com/proto/sJibAHv4lcZR8XSMLJU9zO/ingredients-a",
    preview: projectFive,
    accent: "#7f8f6f",
  },
  {
    id: "loumi-before-after",
    title: "Loumi Before & After",
    tech: "Shopify",
    description:
      "Results-focused page with clean visual structure and mobile-friendly browsing for proof-led ecommerce.",
    liveUrl: "https://loumiskincare.com/pages/before-after",
    figmaUrl:
      "https://www.figma.com/proto/F0auRTWTO7e5SNGjbRDukq/before-after-d",
    preview: projectSix,
    accent: "#ba6f7a",
  },
  //   {
  //   id: "loumi-product",
  //   title: "Loumi Product Page",
  //   tech: "Shopify",
  //   description: "Product detail page implementation focused on information hierarchy, trust signals, and polished buying flow.",
  //   liveUrl: "https://loumiskincare.com/collections/all/products/botanical-face-oil",
  //   figmaUrl: "https://www.figma.com/proto/UUBSFtEH6bEFr1qG0jaSMO/loumiskincare-product-page-c-final",
  //   preview: projectTwo,
  //   accent: "#ad7859",
  // },
  {
    id: "jag-new-york",
    title: "Jag New York",
    tech: "WordPress",
    description:
      "Brand website work with a clean presentation layer and reliable responsive page structure.",
    liveUrl: "https://jagnewyork.com/",
    preview: jagHome,
    accent: "#2f3845",
  },
];

export const personalProjects = [
  // {
  //   id: "carpool",
  //   title: "Carpool",
  //   tech: ["React", "JavaScript", "CSS"],
  //   description: "Ride sharing system with driver, passenger, and admin flows for creating, searching, and booking rides.",
  //   githubUrl: "https://github.com/preranadave/carpool-project",
  //   preview: carpoolImage,
  // },
  // {
  //   id: "employee-task-management",
  //   title: "Employee Task System",
  //   tech: ["React", "Local State", "Tailwind"],
  //   description: "Task management UI where admins assign work and employees update progress through a clean dashboard flow.",
  //   githubUrl: "https://github.com/preranadave/EmployeeTaskManagement",
  //   preview: taskImage,
  // },
  // {
  //   id: "daily-mental-health-blog",
  //   title: "Daily Mental Health Blog",
  //   tech: ["React", "Tailwind", "CRUD"],
  //   description: "A newspaper-inspired blog interface for creating, updating, deleting, and reading mental health posts.",
  //   githubUrl: "https://github.com/preranadave/DailyBlogPosts",
  //   preview: blogImage,
  // },
  {
    id: "all-stars-home-services",
    title: "All Stars Home Services",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Responsive marketing site for a home services business with service highlights and contact-focused layout.",
    githubUrl: "https://github.com/preranadave/allStarsHomeServices",
    preview: personalprojectOne,
  },
  {
    id: "legal-pro-connect",
    title: "Legal Pro Connect",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Professional legal services landing page with clear practice-area sections and lead capture structure.",
    githubUrl: "https://github.com/preranadave/legal-pro-connect",
    preview: personalprojectTwo,
  },
  {
    id: "miller-storm",
    title: "Miller Storm",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Brand-forward static website built with semantic markup, custom styling, and interactive UI details.",
    githubUrl: "https://github.com/preranadave/MillerStorm",
    preview: personalprojectThree,
  },
  {
    id: "whisker-wash",
    title: "Whisker Wash",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Pet grooming business site with service pricing, gallery sections, and mobile-friendly navigation.",
    githubUrl: "https://github.com/preranadave/whisker-wash",
    preview: personalprojectFour,
  },
];

export default personalProjects;
