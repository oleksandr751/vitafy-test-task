import { useEffect, useState } from "react";
import AddNew from "./components/addNew";
import CollapsableTextArea from "./components/textArea";
import { dataValues } from "./data";
import { ITextAreaData } from "./interfaces/index";
function App() {
  const [data, setData] = useState<ITextAreaData[]>(
    JSON.parse(localStorage.getItem("data") || JSON.stringify(dataValues))
  );
  const sortDesc = () => {
    setData([...data.sort((a, b) => a.question.localeCompare(b.question))]);
  };
  const sortAsc = () => {
    setData([...data.sort((a, b) => b.question.localeCompare(a.question))]);
  };
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  return (
    <div style={{ marginLeft: "20px" }}>
      <h1>FAQ</h1>
      <div>
        <button onClick={sortDesc}>Sort DESC</button>
        <button onClick={sortAsc}>Sort ASC</button>
      </div>
      {data.map((element, idx) => (
        <CollapsableTextArea
          data={data}
          element={element}
          key={element.id}
          setData={setData}
        />
      ))}
      <AddNew data={data} setData={setData} />
    </div>
  );
}

export default App;
