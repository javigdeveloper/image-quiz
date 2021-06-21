// import { useEffect } from "react";

const Controls = ({ setImageText }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const myValue = e.target.myValue.value;

    const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${myValue}&image_type=photo`;
    fetch(url)
      .then((response) => response.json())
      // .then((json) => setImageText(json.hits[0].largeImageURL));
      // .then((json) => setImageText(json.hits));
      .then((json) => {
        console.log(json.hits);
        setImageText(json.hits);
      });
    console.log("url is ", url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="myValue" />
      <button>Image search word</button>
    </form>
  );
};

export default Controls;
