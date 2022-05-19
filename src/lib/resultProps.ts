import { Dispatch, SetStateAction } from "react";

export interface CalcProps {
  result?: string | "0";
  calc?: string;
  calcFunction?: Dispatch<SetStateAction<string>>;
  resultFunction?: Dispatch<SetStateAction<string>>;
}
