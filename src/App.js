import Controls from "./Controls";
import Cards from "./Cards";
import Sidebar from "./Sidebar";
import { useState } from "react";

function App() {
  const [picture, setPicture] = useState(null);
  const [preSelected, setPreSelected] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [inputValues, setInputValues] = useState([]);

  return (
    <div className="App">
      <div className="leftSide">
        {isVisible && (
          <div className="centerForm">
            <Controls setPicture={setPicture} />
          </div>
        )}
        {picture && <Cards picture={picture} setPreSelected={setPreSelected} isVisible={isVisible} inputValues={inputValues} />}
      </div>
      {isVisible && (
        <div className="Sidebar">
          <Sidebar setPicture={setPicture} preSelected={preSelected} setIsVisible={setIsVisible} setInputValues={setInputValues} />
        </div>
      )}
    </div>
  );
}

export default App;
