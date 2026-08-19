import archiflowImage from "../assets/projects/archiflow.png";
import unfallatlasImage from "../assets/projects/unfallatlas.png";

export const projects = [
  {
    title: "ArchiFlow",
    description:
      "An AI-assisted system architecture modelling platform developed as part of a five-person university team. I contributed as a Frontend Application Developer, building React-based interfaces and full-stack features for visual architecture modelling, validation, persistence and export.",
    image: archiflowImage,
    github: "https://github.com/SandeepWebDev19/Marxdev",
    demo: "https://marxdev.vercel.app/",
    technologies: [
      "React",
      "TypeScript",
      "React Flow",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI API",
    ],
  },

  {
    title: "German Traffic Accident Analytics Platform",
    description:
      "A full-stack analytics platform for exploring approximately 2.1 million German traffic accident records from 2016–2024. The platform integrates accident and population data into MongoDB and provides REST APIs, interactive charts, regional comparisons and map-based analysis.",
    image: unfallatlasImage,
    github:
      "https://github.com/SandeepWebDev19/german-accident-analytics-platform",
    demo: null,
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "REST API",
      "Swagger",
      "Recharts",
      "Leaflet",
    ],
  },
];