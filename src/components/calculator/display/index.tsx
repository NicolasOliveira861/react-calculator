import { Gear, Sliders } from "phosphor-react";

const Display = () => {
  return (
    <div
      id="displayContainer"
      className="flex flex-col m-[2.1875rem] justify-between h-[200px]"
    >
      <div id="top" className="w-full flex justify-end">
        <div id="icons" className="flex gap-x-2">
          <Sliders size={28} color={"#7280FF"} />
          <Gear size={28} color={"#7280FF"} />
        </div>
      </div>

      <input
        id="displayContent"
        className="flex justify-end text-purple  text-[3.125rem] font-light bg-transparent text-right"
      />
    </div>
  );
};

export { Display };
