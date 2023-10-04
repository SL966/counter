import React, { useState } from "react";
import { AutoCounter } from "./Components/AutoCounter/AutoCounter";
import { ManualCounter } from "./Components/ManualCounter/ManualCounter";
import { Time } from "./Components/AutoCounter/Counter";
import s from "./App.module.css";
import { ButtonGroup } from "./Components/ButtonGroup/ButtonGroup";

export function App() {
  const ManualCounterMemo = React.memo(AutoCounter);

  const [backgroundColor, setBackgroundColor] = useState<string>();

  const changeBackgroundColor = (color: string) => {
    setBackgroundColor(color);
  };

  return (
    <div style={{ backgroundColor, width: "100vw", height: "100vh" }}>
      <ManualCounterMemo />
      <ManualCounter />
      <ButtonGroup changeBackgroundColor={changeBackgroundColor} />
    </div>
  );
}

export default App;
