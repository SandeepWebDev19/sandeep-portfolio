import {
  Mail,
  MapPin,
  ArrowUpRight,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";

const GithubIcon = ({ size = 22 }: { size?: number }) => (
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

const LinkedinIcon = ({ size = 22 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.85c0-3.77-2.01-5.52-4.7-5.52-2.16 0-3.13 1.19-3.67 2.03V8.5H9.13V21h3.5v-6.19c0-1.63.31-3.21 2.33-3.21 1.99 0 2.02 1.87 2.02 3.31V21H21v-7.15Z" />
  </svg>
);

const Contact = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-24 px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-500">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let's build something together.
          </h2>

          <p className="mt-4 leading-7 text-gray-400">
            I'm currently interested in frontend and full-stack
            development opportunities, working student positions and
            internships. Feel free to get in touch.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">

          {/* Email */}
          <motion.a
            href="mailto:sandeepdhange2000@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05]"
          >
            <Mail size={22} className="text-blue-500" />

            <h3 className="mt-5 font-semibold">
              Email
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              sandeepdhange2000@gmail.com
            </p>

            <ArrowUpRight
              size={18}
              className="mt-5 text-gray-600 transition group-hover:text-white"
            />
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/SandeepWebDev19"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05]"
          >
            <div className="text-blue-500">
              <GithubIcon size={22} />
            </div>

            <h3 className="mt-5 font-semibold">
              GitHub
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              View my projects and code
            </p>

            <ArrowUpRight
              size={18}
              className="mt-5 text-gray-600 transition group-hover:text-white"
            />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/sandeep-shankar-dhange/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05]"
          >
            <div className="text-blue-500">
              <LinkedinIcon size={22} />
            </div>

            <h3 className="mt-5 font-semibold">
              LinkedIn
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Connect with me professionally
            </p>

            <ArrowUpRight
              size={18}
              className="mt-5 text-gray-600 transition group-hover:text-white"
            />
          </motion.a>

        </div>

        {/* Bottom Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin size={16} />
            Germany · Open to frontend & full-stack opportunities
          </div>

          {/* Download CV */}
          <a
            href="/Sandeep_Shankar_Dhange_CV.pdf"
            download
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            <Download size={17} />
            Download CV
          </a>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;