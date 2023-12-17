import React from "react";

export default function BillInput({ billAmount, setBillAmount }) {
  return (
    <div className="input">
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill Amount"
        value={billAmount}
        onChange={(e) => setBillAmount(Number(e.target.value))}
      />
    </div>
  );
}
