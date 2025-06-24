import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen px-6 py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <motion.div
        className="max-w-3xl mx-auto space-y-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-pink-600 mb-2">Get in Touch</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4 text-lg">
            <FaEnvelope className="text-pink-600" />
            <span>nrbrt2002@gmail.com</span>
          </div>


          <div className="flex items-center gap-4 text-lg">
            <FaMapMarkerAlt className="text-pink-600" />
            <span>Kigali, Rwanda</span>
          </div>

          <div className="flex gap-6 mt-4 text-2xl">
            <a
              href="https://github.com/nrbrt02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-pink-600 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mwiseneza-imurinde-norbert"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-pink-600 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
