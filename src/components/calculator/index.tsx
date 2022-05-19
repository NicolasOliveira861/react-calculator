import { useState } from "react";
import { Display } from "./display";
import { Numpad } from "./numpad";

const Calculator = () => {
  const [result, setResult] = useState("");
  const [calc, setCalc] = useState("");

  return (
    <div className="min-h-screen min-w-full flex items-center justify-center overflow-hidden max-h-screen">
      <div className="border border-purple w-[414px] max-w-full bg-background min-h-full">
        <Display calc={calc} result={result} />
        <Numpad
          result={result}
          resultFunction={setResult}
          calc={calc}
          calcFunction={setCalc}
        />
      </div>
    </div>
  );
};

export default Calculator;
