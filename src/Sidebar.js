import { useState } from "react";

const Sidebar = ({ setPicture, preSelected, setIsVisible, setInputValues }) => {
  const [inputNumber, setInputNumber] = useState(0);
  let inputArr = [];
  let tempValue = "";
  let inputNameValues = [];
  let inputValuesArr = [];

  // creating inputs with individual name attribute:
  for (let index = 0; index < inputNumber; index++) {
    tempValue = "value" + index;
    inputNameValues.push(tempValue);
    inputArr.push(<input type="text" name={tempValue} key={index} />);
  }

  const handleInputNumberSubmit = (e) => {
    e.preventDefault();
    setInputNumber(e.target.fieldNumber.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPicture(preSelected);
    setIsVisible(false);

    // getting alternate answer options from inputs:
    inputNameValues.forEach((element) => {
      inputValuesArr.push(e.target[element].value);
    });
    setInputValues(inputValuesArr);
  };

  return (
    <div className="inSideBar">
      <h1>Selected pictures and text options:</h1>
      {preSelected.map((pic) => {
        return <img src={pic.previewURL} alt="no data available" key={pic.id} />;
      })}
      <form onSubmit={handleSubmit} id="inputForm">
        {inputArr.map((el) => el)}
        {preSelected.length > 0 && <button>Go to game</button>}
      </form>
      {inputNumber === 0 && (
        <form onSubmit={handleInputNumberSubmit} id="inputAmountForm">
          <label htmlFor="fieldNumber">How many fields do you want?</label>
          <input type="number" id="fieldNumber" name="fieldNumber" min="3" />
          <button>Create fields</button>
        </form>
      )}
    </div>
  );
};

export default Sidebar;
