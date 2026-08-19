import { ExternalLink, GitBranch } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
            Projects
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Things I've built.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            A selection of projects demonstrating my experience with
            frontend development, backend APIs, databases and
            full-stack application architecture.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-blue-500/30"
            >

              {/* Project Image */}
              <div className="relative overflow-hidden border-b border-white/10">

                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />

              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">

                {/* Title + Icons */}
                <div className="flex items-start justify-between gap-4">

                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-blue-500">
                      {index === 0 ? "Featured Project" : "Project"}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold">
                      {project.title}
                    </h3>
                  </div>

                  {/* Project Icons */}
                  <div className="flex gap-3">

                    {/* GitHub */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        className="text-gray-500 transition hover:text-white"
                      >
                        <GitBranch size={20} />
                      </a>
                    )}

                    {/* Live Demo ONLY if available */}
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="text-gray-500 transition hover:text-blue-400"
                      >
                        <ExternalLink size={20} />
                      </a>
                    ) : null}

                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

                {/* Links */}
                <div className="mt-7 flex items-center gap-6">

                  {/* Source Code */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-white"
                    >
                      <GitBranch size={16} />
                      Source Code
                    </a>
                  )}

                  {/* Live Demo ONLY if available */}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
                    >
                      Live Demo
                      <ExternalLink size={16} />
                    </a>
                  ) : null}

                </div>

              </div>
            </motion.article>
          ))}

        </div>

        {/* More Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-gray-500">
            More projects coming soon as I continue building and
            exploring new technologies.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;