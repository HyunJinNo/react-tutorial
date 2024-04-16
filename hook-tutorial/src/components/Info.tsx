import React, { useEffect, useReducer } from "react";

const reducer = (
  state: { name: string; nickname: string },
  action: { name: string; value: string }
) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

export const Info = () => {
  const [state, dispatch] = useReducer(reducer, { name: "", nickname: "" });
  const { name, nickname } = state;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  /*
  useEffect(() => {
    console.log("마운트 될 때만 실행됩니다.");
    console.log({ name, nickname });
  }, []);
  */

  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);

  return (
    <div>
      <div>
        <input
          name="name"
          type="text"
          value={name}
          placeholder="이름"
          onChange={onChange}
        />
        <input
          name="nickname"
          type="text"
          value={nickname}
          placeholder="닉네임"
          onChange={onChange}
        />
      </div>
      <div>
        <p>
          <b>이름:</b> {name}
        </p>
        <p>
          <b>닉네임:</b> {nickname}
        </p>
      </div>
    </div>
  );
};

export default Info;
