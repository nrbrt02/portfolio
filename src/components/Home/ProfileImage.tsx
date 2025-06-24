import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import ProfilePic from "../../assets/pro.jpg";

const ProfileImage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full md:w-1/2 flex justify-center items-center">
      <motion.div
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsOpen(true)}
        className="cursor-pointer rounded-full p-1 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 shadow-xl"
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1724772313198-a52d1d72a532?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Norbert"
          className="object-cover w-64 h-64 rounded-full border-4 border-white dark:border-gray-900 shadow-md"
        />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-[90%] max-w-xl bg-white dark:bg-gray-900 rounded-lg p-6 shadow-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                {/* Close Button Row */}
                <div className="flex justify-end mb-4">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-pink-600 text-sm font-medium"
                    aria-label="Close modal"
                  >
                    ✕ Close
                  </button>
                </div>

                {/* Image and Info */}
                <img
                  src="https://plus.unsplash.com/premium_photo-1724772313198-a52d1d72a532?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Full Norbert"
                  className="rounded-lg w-full object-cover"
                />
                <p className="mt-4 text-center text-sm text-gray-700 dark:text-gray-300">
                  Norbert Mwiseneza — Full-Stack Developer | DevOps Enthusiast
                </p>
              </motion.div>
            </motion.div>


          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileImage;
