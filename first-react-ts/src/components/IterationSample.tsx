import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "A" },
    { id: 2, text: "B" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(3);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputText(e.target.value);
  };

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const onRemove = (id: number) => {
    const nextNames = names.filter((name) => {
      return name.id !== id;
    });
    setNames(nextNames);
  };

  const nameList = names.map((name) => {
    return (
      <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
        {name.text}
      </li>
    );
  });

  return (
    <div>
      <input type="text" value={inputText} onChange={onChange} />
      <button onClick={onClick}>Add</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
