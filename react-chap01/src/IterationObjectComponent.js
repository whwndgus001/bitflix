import React, { useState } from "react";

const IterationObjectComponent = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "별" },
    { id: 3, text: "달" },
    { id: 4, text: "은하수" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  // 입력했을 때 inputText에 값 집어 넣기
  const _handleInputTextChange = (e) => setInputText(e.target.value);

  // 추가 버튼 클릭 했을 때
  const _handleAddButtonClick = () => {
    // 원본을 복사한다. -> 원소를 추가한다. -> 기존 state에 덮어쓴다.(set~~~)

    // push, concat의 차이점
    // push : 원본 배열의 제일 뒤에 원소를 추가한다.
    // concat : 제일 뒤에 원소를 추가한 배열을 새로 만든다.

    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });

    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const _handleRemoveItem = (id) => {
    // ex) 1번을 삭제하고 싶다 -> 1번빼고 다 살려
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };
  return (
    <div>
      <input type="text" onChange={_handleInputTextChange} value={inputText} />
      <button onClick={_handleAddButtonClick}>추가</button>

      <ul>
        {names.map((name) => (
          <li key={name.id} onDoubleClick={() => _handleRemoveItem(name.id)}>
            {name.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IterationObjectComponent;
