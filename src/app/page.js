"use client";
import { Mail, GitHub, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import {Image} from 'next/image';
import portfolioData from '../../data/portfolio.json';
 import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export default function Home() {
  const { personal, projects, skills } = portfolioData;

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pl-16">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-purple-50/30 to-pink-50/40" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />

        <div className="max-w-7xl mx-auto px-8 py-16 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-4 text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 bg-clip-text text-transparent"
              >
                {personal.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg lg:text-xl text-slate-700 mb-6 leading-relaxed font-medium"
              >
                {personal.title}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-slate-600 mb-8 leading-relaxed max-w-xl"
              >
                {personal.bio}
              </motion.p>

              <motion.nav
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                <a
                  href="#work"
                  onClick={(e) => scrollToSection(e, '#work')}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="inline-flex items-center gap-2 border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-lg hover:border-indigo-400 hover:text-indigo-700 hover:bg-white/50 transition-all duration-300 backdrop-blur-sm"
                >
                  Contact Me
                </a>
              </motion.nav>

              <motion.nav
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex gap-4 mt-8"
                aria-label="Social links"
              >
                <motion.a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="text-slate-500 hover:text-slate-900 transition-colors p-2 hover:bg-white/50 rounded-lg"
                >
                  
                  <FaGithub className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="text-slate-500 hover:text-blue-600 transition-colors p-2 hover:bg-white/50 rounded-lg"
                >
                  <FaLinkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={`mailto:${personal.email}`}
                  whileHover={{ y: -2 }}
                  className="text-slate-500 hover:text-indigo-600 transition-colors p-2 hover:bg-white/50 rounded-lg"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </motion.nav>
            </motion.div>
             
            {/* Hero Image - SVG Background Pattern */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full max-w-lg mx-auto"
            >
              
              {/* Paste your image here */}
              <img
                src={personal.avatar}
                alt={personal.name}
                className="w-full h-auto rounded-full aspect-square object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Showcase - Unique Layout */}
      <motion.section 
      id="work" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{duration:0.6, ease:"easeOut"}}
      className="mb-3"
        >
         <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Projects</h2>
        <p className="text-slate-600 mb-12  pl-20 text-nowrap italic text-center">
          Projects that showcase my ability to solve complex problems and deliver impact
        </p>

        {/* Featured Projects - Larger Cards */}
        {projects.filter(p => p.featured).map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="mb-10 group px-36"
          >
            <a
              href={project.demo || project.github || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`grid lg:grid-cols-2 gap-6 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              {/* Project Visual */}
              <div className={`relative overflow-hidden  bg-slate-100 shadow-lg ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                {project.media?.type === 'video' ? (
                  <video
                    src={project.media.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : project.media ? (
                  <img
                    src={project.media.src}
                    alt={project.media.alt || project.title}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : null}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Info */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
                  Featured
                </span>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Impact Metric */}
                <p className="text-indigo-600 font-bold mb-4">
                  {project.impact}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-sm text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 text-sm">
                  {project.demo && (
                    <span className="inline-flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-3 transition-all">
                      View Live <ExternalLink className="w-4 h-4" />
                    </span>
                  )}
                  {project.github && (
                    <span className="inline-flex items-center gap-2 text-slate-600 font-semibold hover:text-slate-900">
                      Source Code {/* <Github className="w-4 h-4" /> */}
                    </span>
                  )}
                </div>
              </div>
            </a>
          </motion.article>
        ))}

        {/* Other Projects - Compact List */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-3xl pl-28 font-bold text-slate-900 mb-6 mt-16"
        >
          More Projects
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <a
                href={project.demo || project.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 rounded-lg border-2 border-slate-200 bg-white hover:border-indigo-300 hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h4>

                <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>

                <p className="text-indigo-600 font-semibold text-sm mb-3">
                  {project.impact}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs text-slate-500">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </motion.section>
 
      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h2 className="mb-6 text-3xl font-bold text-slate-900">About Me</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
I am a Backend Engineer focused on building structured, secured and scalable applications. 
I design and develop RESTful APIs, microservices, manage data and enforce security
 to ensure systems are efficient and reliable
in real world use.
            </p>
            <p className="text-slate-600 leading-relaxed">
              My approach emphasizes clean architecture, performance and writing code that remains easy to work with as systems evolve.
     While backend development is my core focus, 
      I also work with modern frontend frameworks when needed, 
    allowing me to support full-stack applications and ensure smooth integration between systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <h3 className="mb-6 text-2xl font-bold text-slate-900">Skills & Tools</h3>
            <ul className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="px-4 py-2 border-2 border-slate-200 rounded-xl text-slate-700 font-medium bg-white hover:border-indigo-400 hover:text-indigo-700 transition-all duration-200"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="rounded-3xl p-12 text-center backdrop-blur-sm"
        >
          <h2 className="mb-4 text-3xl font-bold text-slate-900">Let's Work Together</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Currently available for freelance projects and full-time opportunities.
            Let's discuss how I can help bring your ideas to life.
          </p>

          <nav className="flex flex-wrap justify-center gap-8" aria-label="Contact methods">
            <motion.a
              href={`mailto:${personal.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-slate-700 hover:text-indigo-600 transition-colors font-medium"
            >
              <Mail className="w-5 h-5" />
              Email
            </motion.a>
            <motion.a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              <FaLinkedin className="w-5 h-5" />
             
              LinkedIn
            </motion.a>
            <motion.a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors font-medium"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </motion.a>
          </nav>
        </motion.div>
      </section>
    </div>
  );
}