import { Display } from "./display";
import { Numpad } from "./numpad";

const Calculator = () => {
  return (
    <div className="min-h-screen min-w-full flex items-center justify-center ">
      <div className="border border-purple w-[414px] max-w-full bg-background">
        <Display />
        <Numpad />
      </div>
    </div>
  );
};

export default Calculator;
