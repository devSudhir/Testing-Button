import { useState } from "react";
import { Buttons } from "./Buttons/Button";
export function Counter() {
  const [value, setValue] = useState(0);

  return (
    <>
      <h1 data-testid="counter_header">Counter</h1>
      <h3 data-testid="counter_value">{value}</h3>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Buttons label="ADD" onClick={setValue(value + 1)}></Buttons>
        <Buttons label="REDUCE" onClick={setValue(value - 1)}></Buttons>
      </div>
    </>
  );
}
