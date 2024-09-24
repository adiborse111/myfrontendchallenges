import React from "react";
import * as Switch from "@radix-ui/react-switch";

const SwitchDemo = () => (
  <form>
    <div className="flex items-center">
      <Switch.Root
        className="w-[42px] h-[25px] rounded-full relative bg-blue-500 hover:bg-blue-300 outline-none cursor-default"
        id="airplane-mode"
      >
        <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </Switch.Root>
    </div>
  </form>
);

export default SwitchDemo;
