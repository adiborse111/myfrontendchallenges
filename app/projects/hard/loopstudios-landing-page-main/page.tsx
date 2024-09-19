"use Client";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Second from "./components/Second";
import Third from "./components/Third";


const page = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Second />
      <Third />
      <Footer />
    </div>
  );
};

export default page;
