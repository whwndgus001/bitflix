import React, { useState } from "react";

const FormEventComponent = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    console.log(nextForm);
    setForm(nextForm);
    const onClickSubmit = () => {
      alert("${name} / {message}");
    };
    return (
      <div>
        <h1>자바스크립트 객체 state, 이벤트 연습</h1>
        <input
          name="username"
          placeholder="사용자명"
          value={username}
          onChange={onChange}
        />
        <input
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={message}
          onChange={onChange}
        />
        <button onClick={onClickSubmit}>"확인"</button>
      </div>
    );
  };
};
export default FormEventComponent;
