import transform from "../images/desktop/image-transform.jpg";
import standout from "../images/desktop/image-stand-out.jpg";
import photo from "../images/desktop/image-photography.jpg";
import graphic from "../images/desktop/image-graphic-design.jpg";
import mobilephoto from "../images/mobile/image-photography.jpg"
import mobilegraphic from "../images/mobile/image-graphic-design.jpg"

const Second = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex lg:flex-row flex-col-reverse w-full justify-between">
          <div className="flex flex-col lg:w-1/2 lg:px-40 lg:py-44 max-lg:justify-center max-lg:items-center max-lg:text-center max-lg:py-16">
            <h1 className="text-5xl font-black font-serif">
              Transform your brand
            </h1>
            <h4 className="mt-10 text-balance">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </h4>
            <div className="mt-10">
              <button className="border-b-5 border-yellow-200 font-bold px-1 hover:border-yellow-400">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src={transform} alt="img" className="w-full" />
          </div>
        </div>

        <div className="flex lg:flex-row-reverse flex-col-reverse w-full justify-between">
          <div className="flex flex-col lg:w-1/2 lg:px-40 lg:py-44 max-lg:justify-center max-lg:items-center max-lg:text-center max-lg:py-16">
            <h1 className="text-5xl font-black font-serif">
              Stand out to the right audience
            </h1>
            <h4 className="mt-10 text-balance">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </h4>
            <div className="mt-10">
              <button className="border-b-5 border-yellow-200 font-bold px-1 hover:border-yellow-400">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src={standout} alt="img" className="w-full" />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col w-full">
          <div className="relative lg:w-1/2">
            <img src={mobilegraphic} alt="" className="w-full lg:hidden" />
            <img src={graphic} alt="" className="w-full max-lg:hidden" />
            <div className="absolute inset-0 flex flex-col items-center justify-center lg:px-52 px-10 pt-80">
              <h2 className="text-gray-600 font-serif text-3xl font-bold">
                Graphic Design
              </h2>
              <p className="text-center mt-10 font-semibold">
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential clients’
                attention.
              </p>
            </div>
          </div>
          <div className="relative lg:w-1/2">
            <img src={mobilephoto} alt="" className="w-full lg:hidden" />
            <img src={photo} alt="" className="w-full max-lg:hidden" />
            <div className="absolute inset-0 flex flex-col items-center justify-center lg:px-52 px-10 pt-80">
              <h2 className="text-gray-600 font-serif text-3xl font-bold">
                Photography
              </h2>
              <p className="text-center mt-10 font-semibold">
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Second;
