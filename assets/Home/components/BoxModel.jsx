import { Tilt } from "react-tilt";

const BoxModel = ({ href, image, title }) => {
  return (
    <Tilt>
      <div className="object-contain rounded-xl bg-gray-700 w-80 shadow-2xl">
        <a href={href}>
          <img src={image} alt="img" className="rounded-t-xl h-52 w-80" />
        </a>
        <div className="p-4 text-xl text-white">{title}</div>
      </div>
    </Tilt>
  );
};

export default BoxModel;
