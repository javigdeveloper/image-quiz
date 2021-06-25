const Sidebar = ({ setPicture, preSelected, setIsVisible, setInputValues }) => {
  const inputNumber = 3;
  let inputArr = [];
  let tempValue = "";
  let inputNameValues = [];
  let inputValues = [];

  // creating inputs with individual name attribute:
  for (let index = 0; index < inputNumber; index++) {
    tempValue = "value" + index;
    inputNameValues.push(tempValue);
    inputArr.push(<input type="text" name={tempValue} key={index} />);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setPicture(preSelected);
    setIsVisible(false);

    // getting alternate answer options from inputs:
    inputNameValues.forEach((element) => {
      inputValues.push(e.target[element].value);
    });
    setInputValues(inputValues);
  };

  return (
    <div className="inSideBar">
      <h1>Selected pictures and text options:</h1>
      {preSelected.map((pic) => {
        return <img src={pic.previewURL} alt="no data available" key={pic.id} />;
      })}
      <form onSubmit={handleSubmit}>
        {inputArr.map((el) => el)}
        <button>Go to game</button>
      </form>
    </div>
  );
};

export default Sidebar;
