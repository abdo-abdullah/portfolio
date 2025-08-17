"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaLinux, FaGithub } from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiBurpsuite, 
  SiOwasp 
} from "react-icons/si";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <main className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen">
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md p-4 border-b border-gray-700"
      >
        <ul className="flex justify-center gap-12 text-lg font-semibold">
          {["Home", "Skills", "Projects", "Contact"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1, color: "#60A5FA" }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-40 h-40 mx-auto mb-6"
          >
            <Image
              src="/myphoto.png"
              alt="Abdo Abdallah"
              fill
              className="rounded-full object-cover shadow-xl border-4 border-blue-500/20"
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-400/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Abdo Abdallah
          </h1>
          <h2 className="text-xl md:text-2xl mt-3 font-semibold text-gray-300">
            Junior Web Pentester
          </h2>
          <p className="text-gray-400 mt-4 max-w-md mx-auto">
            Part-time <span className="text-blue-400">Bug Bounty Hunter</span> | Learning <span className="text-green-400">Flutter</span> | <span className="text-yellow-400">Web Development</span> Enthusiast
          </p>
          <div className="mt-8 flex justify-center gap-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.1, backgroundColor: "#2563EB" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1, backgroundColor: "#1F2937" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-gray-400 rounded-full font-semibold hover:shadow-xl transition-shadow"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={ref} className="py-20 px-6 bg-gray-900/30">
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
        >
          My Skills
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-300 mb-12 max-w-3xl mx-auto text-center text-lg"
        >
          Passionate about <span className="text-blue-400 font-semibold">Bug Bounty</span> and <span className="text-blue-400 font-semibold">Web Penetration Testing</span>.  
          Currently mastering <span className="text-green-400 font-semibold">Flutter</span>, with a strong foundation in <span className="text-yellow-400 font-semibold">Web Development</span> and <span className="text-cyan-400 font-semibold">Networking</span>.
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: <FaJs className="text-yellow-400 text-2xl" />, name: "JavaScript", color: "yellow-400" },
            { icon: <FaReact className="text-blue-400 text-2xl" />, name: "React", color: "blue-400" },
            { icon: <SiNextdotjs className="text-white text-2xl" />, name: "Next.js", color: "white" },
            { icon: <SiTailwindcss className="text-cyan-400 text-2xl" />, name: "Tailwind CSS", color: "cyan-400" },
            { icon: <SiMongodb className="text-green-400 text-2xl" />, name: "MongoDB", color: "green-400" },
            { icon: <SiBurpsuite className="text-orange-500 text-2xl" />, name: "Burp Suite", color: "orange-500" },
            { icon: <SiOwasp className="text-yellow-500 text-2xl" />, name: "OWASP", color: "yellow-500" },
            { icon: <FaLinux className="text-gray-300 text-2xl" />, name: "Linux", color: "gray-300" },
            { icon: <FaGithub className="text-gray-400 text-2xl" />, name: "GitHub", color: "gray-400" },
          ].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1, 
                boxShadow: `0 8px 20px rgba(${skill.color === "white" ? "255,255,255" : skill.color.split("-")[1]}, 0.3)`,
                backgroundColor: "#1F2937"
              }}
              className="flex flex-col items-center gap-3 bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              {skill.icon}
              <span className="text-sm font-semibold text-gray-200">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-900/50">
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Projects
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Pentesting Dashboard",
              description: "Web app for managing penetration tests and reporting vulnerabilities.",
              img: "/project1.png",
              link: "/projects/pentesting-dashboard",
            },
            {
              title: "Bug Bounty Finder",
              description: "Tool that helps automate recon and vulnerability hunting.",
              img: "/project2.png",
              link: "/projects/bug-bounty-finder",
            },
            {
              title: "Portfolio Website",
              description: "A modern personal portfolio built with Next.js and TailwindCSS.",
              img: "/project3.png",
              link: "/projects/portfolio",
            },
          ].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.3)" }}
              className="bg-gray-800 p-5 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <h4 className="mt-4 font-semibold text-xl">{project.title}</h4>
              <p className="text-gray-400 text-sm mt-2">{project.description}</p>
              <a href={project.link} className="text-blue-400 mt-3 block hover:underline">
                See details →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
        >
          Contact Me
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-800 max-w-xl mx-auto p-8 rounded-xl shadow-xl"
        >
          <p className="mb-4"><strong>Email:</strong> abdoabdallah15987@gmail.com</p>
          <p className="mb-4"><strong>Phone:</strong> 01283219928</p>
          <p className="mb-4"><strong>Location:</strong> Cairo, Egypt</p>
          <p className="mb-4">
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/abdo-abdullah" className="text-blue-400 hover:underline">
              github.com/abdo-abdullah
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a href="https://www.linkedin.com/in/abdo-abdallah-808637251" className="text-blue-400 hover:underline">
              linkedin.com/in/abdo-abdallah
            </a>
          </p>
        </motion.div>
      </section>
    </main>
  );
}