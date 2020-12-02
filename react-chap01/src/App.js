import React from "react";
import SayComponent from "./SayComponent";
import CounterComponent from "./CounterComponent";
import MyComponent from "./MyComponent";
import PropsComponent from "./PropsComponent";
import FormEventComponent from "./FormEventComponent";
import IterationObjectComponent from "./IterationObjectComponent";
import Average2 from "./Average2";
import AverageUseMemo from "./AverageuseMemo";
import AverageUseCallback from "./AverageUseCallback";

function App() {
  return (
    // <> </>Fragment
    <>
      {/* <div>hello</div>
      <MyComponent />
      <PropsComponent name={"Junghyun Cho"} age={25} />
      <CounterComponent /> */}
      {/* <SayComponent /> */}
      {/* <FormEventComponent /> */}
      {/* <IterationObjectComponent /> */}
      <AverageUseCallback />
    </>
  );
}

export default App;
