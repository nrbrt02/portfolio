import HeroSection from "../components/Home/HeroSection";
import ProfileImage from "../components/Home/ProfileImage";
import WorkExperience from "../components/Home/WorkExperience";
import TopProjectsPreview from "../components/projects/TopProjectsPreview";
import TopSkillsPreview from "../components/skills/TopSkillsPreview";

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 flex flex-col justify-center">
          <HeroSection />
        </div>
        <ProfileImage />
      </div>

      <div className="max-w-6xl mx-auto mt-16 px-6">
        <TopSkillsPreview />
        <TopProjectsPreview />
        <WorkExperience />
      </div>
    </div>
  );
};

export default Home;
