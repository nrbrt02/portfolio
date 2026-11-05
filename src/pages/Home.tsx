import HeroSection from "../components/Home/HeroSection";
import WorkExperience from "../components/Home/WorkExperience";

const Home = () => {
  return (
    <section id="home" className="scroll-mt-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 min-h-[60vh]">
        <div className="flex flex-col justify-center">
          <HeroSection />
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 px-6">
        <WorkExperience />
      </div>
    </section>
  );
};

export default Home;
