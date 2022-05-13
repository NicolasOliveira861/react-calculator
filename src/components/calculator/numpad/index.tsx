import { Backspace, Divide, Percent } from "phosphor-react";

const Numpad = () => {
  return (
    <div id="numpad" className="bg-white rounded-t-[2.1875rem] p-8">
      <div className="flex flex-wrap text-4xl text-purple gap-y-8">
        <button id="clear" className="calc-btn-container">
          <span className="calc-btn">C</span>
        </button>

        <button id="percentage" className="calc-btn-container">
          <span className="calc-btn">
            <Percent size={36} color={"#7280FF"} />
          </span>
        </button>

        <button id="divide" className="calc-btn-container">
          <span className="calc-btn">
            <Divide size={36} color={"#7280FF"} />
          </span>
        </button>

        <button id="backspace" className="calc-btn-container">
          <span className="calc-btn">
            <Backspace size={36} color={"#7280FF"} />
          </span>
        </button>

        <button id="seven" value={7} className="calc-btn-container">
          <span className="calc-btn">7</span>
        </button>

        <button id="eight" value={8} className="calc-btn-container">
          <span className="calc-btn">8</span>
        </button>

        <button id="nine" value={9} className="calc-btn-container">
          <span className="calc-btn">9</span>
        </button>

        <button id="multiply" className="calc-btn-container">
          <span className="calc-btn">X</span>
        </button>
      </div>
    </div>
  );
};

export { Numpad };
