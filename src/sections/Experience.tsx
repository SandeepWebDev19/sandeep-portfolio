import {
  Briefcase,
  Users,
  User,
} from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    type: "Professional Experience",
    icon: Briefcase,
    title: "Web Developer Intern",
    company: "Softmusk Pvt. Ltd.",
    period: "Jan 2024 – Jun 2024",
    description:
      "Worked as a Web Developer Intern, contributing to responsive web applications, backend services and user-focused dashboards in a collaborative Agile development environment.",
    highlights: [
      "Developed responsive websites using HTML, CSS, JavaScript and React.",
      "Built and optimized REST APIs with Node.js and worked on improving database query efficiency.",
      "Collaborated with developers to design and build user-friendly dashboards from requirements through delivery.",
      "Improved website performance and search visibility through code optimization and SEO practices.",
      "Used Git for version control and contributed within an Agile development workflow.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "REST APIs",
      "Git",
    ],
  },

  {
    type: "University Team Project",
    icon: Users,
    title: "ArchiFlow — AI-Powered Architecture Editor",
    company: "MarxDev · Team of 5",
    period: "Nov 2025 – Mar 2026",
    description:
      "Contributed as a Frontend Application Developer to a full-stack AI-assisted system architecture modelling platform developed as a five-person university team.",
    highlights: [
      "Developed React-based interfaces for diagram and element management.",
      "Built the Property Management Panel for editing element properties and diagram metadata.",
      "Implemented frontend integration with backend APIs for diagram persistence and data management.",
      "Contributed to multi-format diagram export including JSON, JSON-LD and Turtle/RDF.",
      "Worked with React Flow for the visual architecture modelling canvas and contributed to evaluating frontend technologies.",
      "Collaborated with a five-person development team using Git and shared development workflows.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "React Flow",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI API",
      "Jest",
    ],
  },

  {
    type: "Independent Project",
    icon: User,
    title: "German Traffic Accident Analytics Platform",
    company: "Personal Full-Stack Project",
    period: "April 2026 – July 2026",
    description:
      "Built a full-stack analytics platform for exploring German traffic accident data from 2016–2024, covering the complete workflow from data ingestion and backend APIs to frontend visualization.",
    highlights: [
      "Integrated approximately 2.1 million German traffic accident records into a harmonised MongoDB schema.",
      "Designed REST APIs for accident trends, regional comparisons and per-capita analysis.",
      "Built an interactive React frontend for exploring accident statistics.",
      "Created data visualizations using Recharts and map-based exploration using Leaflet.",
      "Developed the backend with Node.js, Express and Mongoose and documented APIs using Swagger.",
      "Worked independently across data processing, backend development, database integration and frontend visualization.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "Swagger",
      "Recharts",
      "Leaflet",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
            Experience
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Experience & development.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            From professional web development to collaborative university
            projects and independent full-stack applications.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-12">

          {/* Timeline line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-8">

            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  key={experience.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="relative md:pl-16"
                >

                  {/* Timeline icon */}
                  <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border border-blue-500/30 bg-[#050505] text-blue-500 md:flex">
                    <Icon size={18} />
                  </div>

                  {/* Card */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-blue-500/30 sm:p-8">

                    {/* Header */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                      <div>
                        <span className="text-xs font-medium uppercase tracking-widest text-blue-500">
                          {experience.type}
                        </span>

                        <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                          {experience.title}
                        </h3>

                        <p className="mt-1 text-gray-400">
                          {experience.company}
                        </p>
                      </div>

                      <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-400">
                        {experience.period}
                      </span>

                    </div>

                    {/* Description */}
                    <p className="mt-6 leading-7 text-gray-400">
                      {experience.description}
                    </p>

                    {/* Highlights */}
                    <ul className="mt-6 space-y-3">
                      {experience.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 text-sm leading-6 text-gray-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-gray-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                  </div>
                </motion.article>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;