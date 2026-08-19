import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "M.Sc. Web Engineering",
    field: "Computer Science",
    institution: "Technische Universität Chemnitz",
    period: "Oct 2024 – Present",
    result: "Current Grade: 2.0",
    description:
      "Currently pursuing a Master's degree focused on web engineering, software development and modern web technologies.",
  },
  {
    degree: "B.Sc. Physics, Computer Science & Mathematics",
    field: "PMCs",
    institution:
      "KLE Society's Raja Lakhamagouda Science Institute",
    period: "2020 – 2023",
    result: "CGPA: 8.74 / 10",
    description:
      "Completed a multidisciplinary Bachelor's degree combining Physics, Computer Science and Mathematics.",
  },
];

const Education = () => {
  return (
    <section id="education" className="px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
            Education
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My academic background.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            My academic background combines computer science with
            mathematics, physics and web engineering.
          </p>
        </motion.div>

        {/* Education cards */}
        <div className="mt-10 space-y-6">

          {education.map((item, index) => (
            <motion.article
              key={item.degree}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-blue-500/30 sm:p-8"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">

                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                  <GraduationCap size={24} />
                </div>

                {/* Content */}
                <div className="flex-1">

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

                    <div>
                      <h3 className="text-xl font-semibold sm:text-2xl">
                        {item.degree}
                      </h3>

                      <p className="mt-1 text-blue-400">
                        {item.field}
                      </p>

                      <p className="mt-1 text-gray-400">
                        {item.institution}
                      </p>
                    </div>

                    <div className="flex flex-col items-start gap-2 sm:items-end">
                      <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-400">
                        {item.period}
                      </span>

                      <span className="text-sm font-medium text-gray-300">
                        {item.result}
                      </span>
                    </div>

                  </div>

                  <p className="mt-5 max-w-3xl leading-7 text-gray-400">
                    {item.description}
                  </p>

                </div>

              </div>
            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;