import React from "react";
import { ITextAreaData } from "../../interfaces/index";
import { useState } from "react";
import "./styles/index.css";
interface ICollapsableTextArea {
  data: ITextAreaData[];
  element: ITextAreaData;
  setData: any;
}
const CollapsableTextArea: React.FC<ICollapsableTextArea> = ({
  data,
  setData,
  element,
}) => {
  const [collapsed, setCollapsed] = useState(true);
  const handleClick = () => {
    setCollapsed(!collapsed);
  };
  const handleRemoveItem = (id: number) => {
    setData([...data].filter((element) => element.id !== id));
  };
  return (
    <div className="mainDiv">
      <div className="textDiv">
        <div
          className={!collapsed ? "arrowDown" : "arrowRight"}
          onClick={handleClick}
        ></div>
        <h3>{element.question}</h3>
      </div>
      {!collapsed && (
        <>
          <p className="answerField">{element.answer}</p>
          <button
            className="removeButton"
            onClick={() => {
              handleRemoveItem(element.id);
            }}
          >
            Remove
          </button>
        </>
      )}
      <div className="borderDiv"></div>
    </div>
  );
};

export default CollapsableTextArea;
