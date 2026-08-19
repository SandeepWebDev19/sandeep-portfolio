import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Github = ({ size }: { size: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
    >
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
);

const Linkedin = ({ size }: { size: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
    >
        <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.85c0-3.77-2.01-5.52-4.7-5.52-2.16 0-3.13 1.19-3.67 2.03V8.5H9.13V21h3.5v-6.19c0-1.63.31-3.21.31-3.21 2.02 0 2.02 1.87 2.02 3.31V21H21v-7.15Z" />
    </svg>
);

const Hero = () => {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
        >
            <div className="mx-auto max-w-5xl text-center">

                {/* Greeting */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-5 text-lg font-medium text-white-500"
                >
                    Hi, I'm Sandeep Dhange, a passionate web developer.
                </motion.p>

                {/* Main heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl font-bold tracking-tight text-blue-500 md:text-7xl"
                >
                    I'm a Full-Stack Developer
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400f"
                >
                    I build modern, responsive and scalable web applications
                    using React, TypeScript, Node.js and modern web technologies.
                </motion.p>

                {/* Main buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-8 flex flex-wrap justify-center gap-4"
                >
                    {/* View Projects */}
                    <a
                        href="#projects"
                        className="rounded-lg border border-white/10 px-6 py-3 font-medium transition hover:-translate-y-0.5 hover:bg-blue-500"
                    >
                        View Projects
                    </a>

                    {/* Download CV */}
                    <a
                        href="/Sandeep-Shankar-Dhange-CV.pdf"
                        download
                        className="rounded-lg border border-white/10 px-6 py-3 font-medium transition hover:-translate-y-0.5 hover:bg-blue-500"
                    >
                        Download CV
                    </a>

                    {/* Contact */}
                    <a
                        href="#contact"
                        className="rounded-lg border border-white/10 px-6 py-3 font-medium transition hover:-translate-y-0.5 hover:bg-white/5"
                    >
                        Contact Me
                    </a>
                </motion.div>

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-8 flex justify-center gap-5"
                >
                    {/* GitHub */}
                    <a
                        href="https://github.com/SandeepWebDev19"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-gray-400 transition hover:text-white"
                    >
                        <Github size={22} />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/sandeep-shankar-dhange/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-gray-400 transition hover:text-white"
                    >
                        <Linkedin size={22} />
                    </a>
                </motion.div>

            </div>

            {/* Scroll indicator */}
            <motion.a
                href="#about"
                animate={{ y: [0, 8, 0] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                }}
                className="absolute bottom-8 text-gray-500"
                aria-label="Scroll to about section"
            >
                <ArrowDown size={22} />
            </motion.a>

        </section>
    );
};

export default Hero;