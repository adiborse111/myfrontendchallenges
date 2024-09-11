import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";

const Home2 = () => {
  return (
    <div className="bg-[#22313f] h-full flex flex-col px-5">
      <div className="text-3xl font-bold border-b-2 border-gray-500 text-gray-300 py-6">
        Frontend Mentor Challenges
      </div>
      <ProjectList />
      <Footer />
    </div>
  );
};

export default Home2;
