import BillInput from "../BillInput/BillInput";
import SelectPercentage from "../SelectPercentage/SelectPercentage";
import Output from "../Output/Output";
import "./TipCal.css";
import Reset from "../Reset/Reset";
import { useState } from "react";

export default function TipCal() {
  const [billAmount, setBillAmount] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const handleReset = () => {
    setBillAmount("");
    setPercentage1(0);
    setPercentage2(0);
  };

  console.log(billAmount);
  return (
    <>
      <div className="wrap">
        <div className="app">
          <BillInput billAmount={billAmount} setBillAmount={setBillAmount} />
          <SelectPercentage
            percentage={percentage1}
            setPercentage={setPercentage1}
          >
            How do you like the service?
          </SelectPercentage>
          <SelectPercentage
            percentage={percentage2}
            setPercentage={setPercentage2}
          >
            How did your friend like the servie?
          </SelectPercentage>
          <Output bill={billAmount} per1={percentage1} per2={percentage2} />
          <Reset reset={handleReset} />
        </div>
      </div>
    </>
  );
}
