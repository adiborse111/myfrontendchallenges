const Footer = () => {
  return (
    <div className="border-t-2 border-gray-500 mt-10 lg:p-10 flex lg:flex-row flex-col lg:justify-between">
      <h1 className="text-xl text-gray-500">
        Challenges provided by{" "}
        <a 
          href="https://www.frontendmentor.io"
          className="text-white">
          frontendmentor.io
        </a>
      </h1>
      <h1 className="text-xl text-gray-500">
        Solutions by{" "}
        <a
          href="https://www.frontendmentor.io/profile/adiborse111"
          className="text-white"
        >
          Aditya Borse
        </a>
      </h1>
      <a href="https://github.com/adiborse111/FrontendChalleges.git" className="text-white text-xl">GitHub</a>
    </div>
  );
};

export default Footer;
