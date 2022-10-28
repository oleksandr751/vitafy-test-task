import React, { ChangeEvent } from "react";
import { useState } from "react";
import { ITextAreaData } from "../../interfaces/index";
const myStyle = {
  mainDiv: {
    display: "flex",
    flexDirection: "column",
    width: "500px",
  },
  childDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
};
interface IAddNew {
  data: ITextAreaData[];
  setData: any;
}
const AddNew: React.FC<IAddNew> = ({ data, setData }) => {
  const initialState = {
    question: "",
    answer: "",
    id: Math.floor(Math.random() * 10000),
  };
  const [inputValues, setInputValues] = useState(initialState);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
      id: Math.floor(Math.random() * 10000),
    });
  };
  const handleClick = () => {
    setData([...data, inputValues]);
    setInputValues(initialState);
    localStorage.setItem("data", JSON.stringify(data));
  };
  return (
    <div style={myStyle.mainDiv as React.CSSProperties}>
      <h1>Add new</h1>
      <div style={myStyle.childDiv as React.CSSProperties}>
        <p>Question</p>
        <input
          onChange={handleChange}
          name="question"
          value={inputValues.question}
        ></input>
      </div>
      <div style={myStyle.childDiv as React.CSSProperties}>
        <p>Answer</p>
        <input
          onChange={handleChange}
          name="answer"
          value={inputValues.answer}
        ></input>
      </div>
      <button style={{ width: "50px" }} onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default AddNew;
