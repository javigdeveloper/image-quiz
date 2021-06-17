import Controls from "./Controls";
import Cards from "./Cards";
import { useState } from "react";

function App() {
  const [image, setImage] = useState("Hi");
  return (
    <div>
      <Controls setImage={setImage} />
      <Cards image={image} />
    </div>
  );
}

export default App;
