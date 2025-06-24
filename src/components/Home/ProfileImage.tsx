import { motion } from "framer-motion";

const ProfileImage = () => {
  return (
    <div className="relative w-full md:w-1/2 flex justify-center items-center">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="rounded-full p-1 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 shadow-xl"
      >
        <img
          src="https://drive.google.com/uc?export=view&id=1lkNF2FFHYN5LpUFB51rA8rP0lUIuXMIW"
          alt="Norbert"
          className="object-cover w-64 h-64 rounded-full border-4 border-white dark:border-gray-900 shadow-md"
        />


      </motion.div>
    </div>
  );
};

export default ProfileImage;
