"use client";

const Footer = () => {
  return (
    <div className="text-white py-5 flex flex-col gap-2">
      <h1 className="text-2xl">Solution by Aditya Borse</h1>
      <a href="https://github.com/adiborse111/myfrontendchallenges.git" className="hover:text-gray-500 w-fit underline">
        GitHub
      </a>
      <a href="https://adityaborseportfolio-aditya-borses-projects.vercel.app/" className="hover:text-gray-500 w-fit underline">
        Portfolio
      </a>
      <a href="https://www.frontendmentor.io/profile/adiborse111" className="hover:text-gray-500 w-fit underline">
        Frontend Mentor
      </a>
    </div>
  );
};

export default Footer;
