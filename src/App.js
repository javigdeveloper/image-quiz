import Controls from "./Controls";
import Cards from "./Cards";
import Sidebar from "./Sidebar";
import { useState } from "react";

function App() {
  const [imageText, setImageText] = useState([]);
  const [preSelected, setPreSelected] = useState([]);

  return (
    <div className="App">
      <div className="leftSide">
        <div className="centerForm">
          <Controls setImageText={setImageText} />
        </div>
        <Cards imageText={imageText} setPreSelected={setPreSelected} />
      </div>
      <div className="Sidebar">
        <Sidebar preSelected={preSelected} />
      </div>
    </div>
  );
}

export default App;
