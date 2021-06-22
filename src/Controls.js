// import { useEffect } from "react";

const Controls = ({ setImageText }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const myValue = e.target.myValue.value;

    const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${myValue}&image_type=photo`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log("hits is ", json.hits);
        setImageText(json.hits);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="myValue" />
      <button>Image search word</button>
    </form>
  );
};

export default Controls;
