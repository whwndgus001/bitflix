import React from "react";

// const PropsComponent = (props) => {
//   console.log(props);
//   return (
//     <>
//       <ul>
//         <li> 이름 : {props.name} </li>
//         <li> 나이 : {props.age}</li>
//       </ul>
//     </>
//   );
// };

// 주의할 점
// 부모 컴포넌트에서 넘기는 Key값과 변수로 사용할 변수명이 똑같아야 한다.
// ex) 부모에서 {name:"abc", age:10} -> 자식에서는 ({name, age})
const PropsComponent = ({ name, age }) => {
  return (
    <>
      <div>
        {name} / {age}
      </div>
    </>
  );
};

export default PropsComponent;
