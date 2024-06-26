import React, { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    message: "message",
    username: "username",
  });
  const { message, username } = form;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const handleClick = () => {
    alert(`${message}: ${username}`);
    setForm({
      message: "message",
      username: "username",
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요."
        value={message}
        onChange={onChange}
      />
      <input
        type="text"
        name="username"
        placeholder="아무거나 입력해 보세요."
        value={username}
        onChange={onChange}
        onKeyUp={handleKeyPress}
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default EventPractice;
