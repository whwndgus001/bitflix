import styled from "styled-components";
import React, { useState } from "react";

const AppContainer = styled.div`
  background-color: ${(props) => (props.colorcode ? props.colorcode : "gray")};
  font-size: 3rem;
`;

function App() {
  const [color, setColor] = useState("white");
  return (
    <>
      <AppContainer colorcode={color}>Hello</AppContainer>
      <button onClick={() => setColor("red")}>빨강</button>
      <button onClick={() => setColor("green")}>초록</button>
      <button onClick={() => setColor("blue")}>파랑</button>
    </>
  );
}
export default App;
