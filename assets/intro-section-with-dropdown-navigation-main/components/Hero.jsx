import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import meet from "../images/client-maker.svg";
import maker from "../images/client-maker.svg";
import herodesk from "../images/image-hero-desktop.png";

const Hero = () => {
  return (
    <div className="flex flex-row">
      <div className="px-44 flex flex-col">
        <h1 className="mt-36 text-7xl font-bold">
          Make <br />
          remote work
        </h1>
        <h4 className="w-[22rem] mt-10">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </h4>
        <button className="p-4 mt-10 border-2 border-black bg-black hover:bg-white w-32 text-white hover:text-black rounded-xl h-12 items-center flex justify-center">
          Learn More
        </button>
        <div className="flex flex-row mt-24 gap-10">
          <div>
            <img src={databiz} alt="" />
          </div>
          <div>
            <img src={audiophile} alt="" />
          </div>
          <div>
            <img src={meet} alt="" />
          </div>
          <div>
            <img src={maker} alt="" />
          </div>
        </div>
      </div>
      <div className="w-1/2 flex object-contain pl-24 pt-10 h-[80vh]">
        <img src={herodesk} alt="" className="" />
      </div>
    </div>
  );
};

export default Hero;
