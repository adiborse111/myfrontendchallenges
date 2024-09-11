/* eslint-disable react/jsx-key */
import BoxModel from "./BoxModel";
import { projects } from "..";

const ProjectList = () => {
  return (
    <div className="py-10 lg:px-20 ml-10 grid lg:grid-cols-3 gap-y-10 justify-center">
      {projects.map((projects) => (
        <BoxModel 
          href={projects.href}
          image={projects.image}
          title={projects.title}
        />
      ))}
    </div>
  );
};

export default ProjectList;
