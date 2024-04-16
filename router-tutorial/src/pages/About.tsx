import { useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail") ?? "true";
  const mode = searchParams.get("mode") ?? "0";

  const onToggleDetail = () => {
    setSearchParams((prev) => ({
      ...prev,
      detail: detail === "true" ? "false" : "true",
      mode: mode,
    }));
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams((prev) => ({
      ...prev,
      detail: detail,
      mode: nextMode,
    }));
  };

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해보는 프로젝트입니다.</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;
