import React from "react";
import { ITextAreaData } from "../../interfaces/index";
import { useState } from "react";

interface ICollapsableTextArea {
  data: ITextAreaData[];
  element: ITextAreaData;
  setData: any;
}
const myStyle = {
  mainDiv: {
    width: "500px",
  },
  textDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  arrowRight: {
    width: "0px",
    height: "0px",
    borderTop: "8px solid transparent",
    borderBottom: " 8px solid transparent",
    borderLeft: " 8px solid black",
  },
  arrowDown: {
    width: "0px",
    height: "0px",
    borderLeft: "8px solid transparent",
    borderRight: " 8px solid transparent",
    borderTop: " 8px solid black",
  },
};
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
    <div style={myStyle.mainDiv as React.CSSProperties}>
      <div style={myStyle.textDiv as React.CSSProperties}>
        <div
          style={!collapsed ? myStyle.arrowDown : myStyle.arrowRight}
          onClick={handleClick}
        ></div>
        <h3>{element.question}</h3>
      </div>
      {!collapsed && (
        <>
          <p style={{ wordWrap: "break-word" }}>{element.answer}</p>
          <button
            onClick={() => {
              handleRemoveItem(element.id);
            }}
          >
            Remove
          </button>
        </>
      )}
      <div style={{ borderBottom: "2px solid gray", marginTop: "20px" }}></div>
    </div>
  );
};

export default CollapsableTextArea;
