"use Client";

import Hero from "./components/Hero";
import Second from "./components/Second";


const page = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Second />
    </div>
  );
};

export default page;
