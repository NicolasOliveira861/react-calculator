import { CalcProps } from "lib/resultProps";
import { Backspace, Divide, Percent } from "phosphor-react";
import { useEffect, useState } from "react";

const Numpad = ({ resultFunction, calc, calcFunction, result }: CalcProps) => {
  const [percentagePartial, setPercentagePartial] = useState(0);
  const [percentageTotal, setPercentageTotal] = useState(0);

  const ops = ["/", "*", "+", "-", ","];

  const updateCalc = (value: string) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc!.slice(-1)))
    ) {
      return;
    }

    calcFunction!(calc + value);

    if (!ops.includes(value)) {
      resultFunction!(eval(calc + value).toString());
    }
  };

  const handleBackspace = () => {
    const newCalc = calc!.slice(0, calc!.length - 1);
    const lastChar = newCalc.split("").pop();

    if (ops.includes(lastChar!)) {
      calcFunction!(newCalc);
      resultFunction!(eval(calc!.slice(0, calc!.length - 2)));
    } else {
      calcFunction!(newCalc);
      resultFunction!(eval(newCalc));
    }
  };

  const handleResult = () => {
    if (percentagePartial > 0) {
      return handlePercentage();
    }

    calcFunction!(result!);
  };

  const handlePercentage = () => {
    if (percentagePartial > 0) {
      setPercentageTotal(parseFloat(result!));
    } else {
      setPercentagePartial(parseFloat(result!));

      calcFunction!("");
      resultFunction!("");
    }
  };

  useEffect(() => {
    if (percentagePartial > 0 && percentageTotal > 0) {
      const percentage = (percentagePartial * 100) / percentageTotal;

      resultFunction!(percentage.toString());
      calcFunction!(percentage.toString());

      setPercentagePartial(0);
      setPercentageTotal(0);
    }
  }, [percentagePartial, percentageTotal]);

  return (
    <div id="numpad" className="bg-white rounded-t-[2.1875rem] p-8 h-[80%]">
      <div className="flex flex-wrap text-4xl text-purple gap-y-8">
        <button
          id="clear"
          className="calc-btn-container"
          onClick={() => {
            calcFunction!("");
            resultFunction!("");
          }}
        >
          <span className="calc-btn">C</span>
        </button>

        <button
          type="button"
          id="percentage"
          className="calc-btn-container"
          onClick={handlePercentage}
        >
          <span className="calc-btn">
            <Percent size={36} color={"#7280FF"} />
          </span>
        </button>

        <button
          type="button"
          id="divide"
          className="calc-btn-container"
          onClick={() => updateCalc("/")}
        >
          <span className="calc-btn">
            <Divide size={36} color={"#7280FF"} />
          </span>
        </button>

        <button
          type="button"
          id="backspace"
          className="calc-btn-container"
          onClick={handleBackspace}
        >
          <span className="calc-btn">
            <Backspace size={36} color={"#7280FF"} />
          </span>
        </button>

        <button
          type="button"
          id="seven"
          className="calc-btn-container"
          onClick={() => updateCalc("7")}
        >
          <span className="calc-btn">7</span>
        </button>

        <button
          type="button"
          id="eight"
          className="calc-btn-container"
          onClick={() => updateCalc("8")}
        >
          <span className="calc-btn">8</span>
        </button>

        <button
          type="button"
          id="nine"
          className="calc-btn-container"
          onClick={() => updateCalc("9")}
        >
          <span className="calc-btn">9</span>
        </button>

        <button
          type="button"
          id="multiply"
          className="calc-btn-container"
          onClick={() => updateCalc("*")}
        >
          <span className="calc-btn">X</span>
        </button>

        <button
          type="button"
          id="seven"
          className="calc-btn-container"
          onClick={() => updateCalc("4")}
        >
          <span className="calc-btn">4</span>
        </button>

        <button
          type="button"
          id="eight"
          className="calc-btn-container"
          onClick={() => updateCalc("5")}
        >
          <span className="calc-btn">5</span>
        </button>

        <button
          type="button"
          id="nine"
          className="calc-btn-container"
          onClick={() => updateCalc("6")}
        >
          <span className="calc-btn">6</span>
        </button>

        <button
          type="button"
          id="multiply"
          className="calc-btn-container"
          onClick={() => updateCalc("-")}
        >
          <span className="calc-btn">-</span>
        </button>

        <button
          type="button"
          id="seven"
          className="calc-btn-container"
          onClick={() => updateCalc("1")}
        >
          <span className="calc-btn">1</span>
        </button>

        <button
          type="button"
          id="eight"
          className="calc-btn-container"
          onClick={() => updateCalc("2")}
        >
          <span className="calc-btn">2</span>
        </button>

        <button
          type="button"
          id="nine"
          className="calc-btn-container"
          onClick={() => updateCalc("3")}
        >
          <span className="calc-btn">3</span>
        </button>

        <button
          type="button"
          id="multiply"
          className="calc-btn-container"
          onClick={() => updateCalc("+")}
        >
          <span className="calc-btn">+</span>
        </button>

        <button
          type="button"
          id="seven"
          className="calc-btn-container"
          onClick={() => updateCalc("0")}
        >
          <span className="calc-btn">0</span>
        </button>

        <button
          type="button"
          id="eight"
          className="calc-btn-container"
          onClick={() => updateCalc(".")}
        >
          <span className="calc-btn">,</span>
        </button>

        <button
          type="button"
          id="nine"
          className="calc-btn-container equal-btn-container"
          onClick={handleResult}
        >
          <span className="calc-btn equal-btn">=</span>
        </button>
      </div>
    </div>
  );
};

export { Numpad };
