import emily from "../images/desktop/image-emily.jpg";
import thomas from "../images/desktop/image-thomas.jpg";
import jennie from "../images/desktop/image-jennie.jpg";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center gap-16 lg:py-32 py-20 px-16">
      <h1 className="lg:text-2xl text-xl font-serif text-gray-400 font-bold">
        C L I E N T &nbsp; T E S T I M O N I A L S
      </h1>
      <div className="flex lg:flex-row flex-col lg:px-44 lg:gap-5 gap-20">
        <div className="flex flex-col gap-10 items-center">
          <img src={emily} alt="" className="rounded-full size-16" />
          <h1 className="text-center">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </h1>
          <div className="flex flex-col items-center">
            <h1 className="text-black font-bold">Emily R.</h1>
            <h1 className="text-xs text-gray-500">Marketing Director</h1>
          </div>
        </div>

        <div className="flex flex-col gap-10 items-center">
          <img src={thomas} alt="" className="rounded-full size-16" />
          <h1 className="text-center">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </h1>
          <div className="flex flex-col items-center">
            <h1 className="text-black font-bold">Thomas S.</h1>
            <h1 className="text-xs text-gray-500">Chief Operating Officer</h1>
          </div>
        </div>

        <div className="flex flex-col gap-10 items-center">
          <img src={jennie} alt="" className="rounded-full size-16" />
          <h1 className="text-center">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </h1>
          <div className="flex flex-col items-center">
            <h1 className="text-black font-bold">Jennie F.</h1>
            <h1 className="text-xs text-gray-500">Business Owner</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
