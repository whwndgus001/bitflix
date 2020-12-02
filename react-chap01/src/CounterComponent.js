import React, { useState } from "react";

const CounterComponent = () => {
  //   let count = 0;

  // useState hooks를 활용해 컴포넌트 상태값 만들기
  const [count, setCount] = useState(0);

  // 이벤트 함수
  const onIncreaseButtonClick = () => {
    // count = count + 1;
    // console.log(count);
    setCount(count + 1);
  };
  return (
    <>
      <div>{count}</div>
      <div>
        <button onClick={onIncreaseButtonClick}>증가시키기</button>
      </div>
    </>
  );
};
export default CounterComponent;
