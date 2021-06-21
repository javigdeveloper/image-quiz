import Controls from "./Controls";
import Cards from "./Cards";
import { useState } from "react";

function App() {
  const [imageText, setImageText] = useState([]);
  return (
    <div>
      <Controls setImageText={setImageText} />
      <Cards imageText={imageText} />
    </div>
  );
}

export default App;
