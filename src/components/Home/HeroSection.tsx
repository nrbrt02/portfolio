import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-8 text-center md:text-left"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
        Hi, I’m Norbert 👋
      </h1>

      <TypeAnimation
        sequence={[
          "Norbert Mwiseneza",
          2000,
          "Full-Stack Developer",
          2000,
          "Cloud Enthusiast",
          2000,
          "DevOps Operator",
          2000,
          "Lifelong Learner",
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300"
      />

      <div className="flex justify-center md:justify-start gap-6 text-2xl text-gray-600 dark:text-gray-300 mt-4">
        
        <a
          href="https://twitter.com/aun_nor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="hover:text-pink-500 transition-transform hover:scale-125" />
        </a>
        <a
          href="https://www.linkedin.com/in/mwiseneza-imurinde-norbert"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-pink-500 transition-transform hover:scale-125" />
        </a>
        <a
          href="https://github.com/nrbrt02"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-pink-500 transition-transform hover:scale-125" />
        </a>
        <a
          href="mailto:nrbrt2002@gmail.com"
          className="hover:text-pink-500 transition-transform hover:scale-125"
          aria-label="Email Norbert"
        >
          <FaEnvelope />
        </a>
        
      </div>


      <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-6">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://docs.google.com/document/d/1ox4PyrOngIWMnkc0SPam3a9K6tWY2SGd/edit?usp=sharing&ouid=103324068879615888343&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl shadow-lg transition"
        >
          View CV
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://docs.google.com/document/d/1L77JGEiZvSBPDDpQMs5YAwa_DakXH3u4/edit?usp=sharing&ouid=103324068879615888343&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 border border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white font-semibold rounded-xl transition"
        >
          View Resume
        </motion.a>

      </div>
    </motion.section>
  );
};

export default HeroSection;
