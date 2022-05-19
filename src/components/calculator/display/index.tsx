import { CalcProps } from "lib/resultProps";
import { Gear, Sliders } from "phosphor-react";
import { useState } from "react";

const Display = ({ result, calc }: CalcProps) => {
  return (
    <div
      id="displayContainer"
      className="flex flex-col m-[2.1875rem] justify-between h-[20%]"
    >
      <div id="top" className="w-full flex justify-end">
        {/* <div id="icons" className="flex gap-x-2">
          <Sliders size={28} color={"#7280FF"} />
          <Gear size={28} color={"#7280FF"} />
        </div> */}
      </div>

      <div id="displayContent" className="flex items-end justify-end">
        <span className="mb-3 mr-1 text-slate-400">({result || "0"})</span>
        <span className="flex w-auto justify text-purple  text-[3.125rem] font-light bg-transparent text-right">
          {calc || "0"}
        </span>
      </div>
    </div>
  );
};

export { Display };
