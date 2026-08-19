import { Code2, Database, Layers3, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const focusAreas = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive and accessible interfaces with React, TypeScript and modern CSS.",
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Developing REST APIs and server-side applications using Node.js, Express and databases.",
  },
  {
    icon: Layers3,
    title: "Full-Stack Applications",
    description:
      "Connecting frontend applications with APIs, databases and scalable backend services.",
  },
  {
    icon: Rocket,
    title: "Continuous Learning",
    description:
      "Currently strengthening my skills in modern JavaScript, TypeScript, React and backend development.",
  },
];

const About = () => {
  return (
    <section id="about" className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            A developer who enjoys building things.
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-8 text-gray-300">
              I'm a Web Engineering student and software developer
              interested in building modern frontend and full-stack
              applications.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              My development journey combines professional software
              experience with hands-on web development. I enjoy taking
              an idea from the initial interface through the backend
              API and database.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              I'm currently focusing on React, TypeScript, Node.js,
              Express, REST APIs and database-driven applications while
              building projects that demonstrate these skills in real
              use cases.
            </p>

            {/* Small stats */}
            <div className="mt-8 grid max-w-lg grid-cols-3 gap-4">

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-bold text-white">React</p>
                <p className="mt-1 text-xs text-gray-500">
                  Frontend
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-bold text-white">Node</p>
                <p className="mt-1 text-xs text-gray-500">
                  Backend
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-bold text-white">MongoDB</p>
                <p className="mt-1 text-xs text-gray-500">
                  Database
                </p>
              </div>

            </div>
          </motion.div>

          {/* Focus cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

            {focusAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05]"
                >
                  <div className="flex gap-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-400">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;