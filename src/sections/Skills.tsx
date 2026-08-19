import {
    Code2,
    Database,
    Server,
    TestTube,
    Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

const skillGroups = [
    {
        title: "Frontend Development",
        icon: Code2,
        skills: [
            "React",
            "TypeScript",
            "JavaScript",
            "HTML5",
            "CSS3",

        ],
    },
    {
        title: "Backend Development",
        icon: Server,
        skills: [
            "Node.js",
            "Express.js",
            "REST APIs",
            "API Integration",
        ],
    },
    {
        title: "Databases",
        icon: Database,
        skills: [
            "MongoDB",
            "Mongoose",
            "SQL",
            "Database Design",
        ],
    },
    {
        title: "Tools & Technologies",
        icon: Wrench,
        skills: [
            "Git",
            "GitHub",
            "Postman",
            "Swagger",
            "Vite",
            "React Flow",
            "VS Code",
        ],
    },
    {
        title: "Testing",
        icon: TestTube,
        skills: [
            "Jest",
            "Vitest",
            "Supertest",
        ],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="px-6 py-24 sm:py-28">
            <div className="mx-auto max-w-6xl">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
                        Skills
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Technologies I work with.
                    </h2>

                    <p className="mt-4 max-w-2xl leading-7 text-gray-400">
                        My current technology stack centers on frontend and full-stack web development,
                        with hands-on experience building responsive React interfaces, designing REST APIs,
                        and working with database-driven applications (MongoDB, MySQL).
                    </p>
                </motion.div>

                {/* Skills */}
                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    {skillGroups.map((group, index) => {
                        const Icon = group.icon;

                        return (
                            <motion.div
                                key={group.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05]"
                            >

                                {/* Icon + title */}
                                <div className="flex items-center gap-3">

                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                                        <Icon size={20} />
                                    </div>

                                    <h3 className="text-lg font-semibold">
                                        {group.title}
                                    </h3>

                                </div>

                                {/* Technologies */}
                                <div className="mt-5 flex flex-wrap gap-2">

                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-gray-300 transition hover:border-blue-500/30 hover:text-white"
                                        >
                                            {skill}
                                        </span>
                                    ))}

                                </div>

                            </motion.div>
                        );
                    })}

                </div>

                {/* Bottom note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-8 rounded-xl border border-blue-500/10 bg-blue-500/[0.04] p-5 text-sm leading-6 text-gray-400"
                >
                    <span className="font-medium text-blue-400">
                        Current focus:
                    </span>{" "}
                    Building production-style React and Node.js
                    applications, with a strong emphasis on clean API design and
                    test coverage."
                </motion.div>

            </div>
        </section>
    );
};

export default Skills;