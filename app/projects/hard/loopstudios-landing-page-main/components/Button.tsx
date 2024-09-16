"use client";

import { useState } from "react";

const Button = ({ name }: { name: string }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col w-fit items-center h-1">
      <button
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {name}
      </button>
      <div className={`w-5 border mt-1 ${!visible && "hidden"}`}></div>
    </div>
  );
};

export default Button;
