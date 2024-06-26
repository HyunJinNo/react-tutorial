import { useContext } from "react";
import ColorContext from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  const { actions } = useContext(ColorContext);

  return (
    <div className="SelectColors">
      <h2>색상을 선택하세요.</h2>
      <div>
        <div style={{ display: "flex" }}>
          {colors.map((color) => {
            return (
              <div
                key={color}
                style={{
                  background: color,
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  e.preventDefault(); // 마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 무시함.
                  actions.setSubcolor(color);
                }}
              />
            );
          })}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SelectColors;
