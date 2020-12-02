import React, { useState } from "react";

const SayComponent = () => {
  // useState(initialState)
  // * initialState : 최초의 상태가 가지고 있어야 할 값

  const [message, setMessage] = useState("");
  const [color, setColor] = useState("black");

  const onClickEnter = () => {
    setMessage("어서오십쇼");
  };
  const onClickLeave = () => {
    setMessage("잘가요~");
  };

  const styleRed = () => {
    setColor("red");
  };
  const styleGreen = () => {
    setColor("green");
  };
  const styleBlue = () => {
    setColor("blue");
  };
  // { color : color } -> { color } ( o )
  // { color : gamja } -> { gamja } ( x )
  return (
    <>
      <div>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>

        <h1 style={{ color }}>{message}</h1>
        <button onClick={styleRed}>빨간색</button>
        <button onClick={styleGreen}>초록색</button>
        <button onClick={styleBlue}>파란색</button>
      </div>
    </>
  );
};

export default SayComponent;
