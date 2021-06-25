const Controls = ({ setPicture }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const myValue = e.target.inputWord.value;

    const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${myValue}&image_type=photo`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        for (const key in json.hits) {
          // adding search word value to each picture object:
          json.hits[key].searchWord = myValue;
        }

        setPicture(json.hits);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="inputWord" />
      <button>Image search word</button>
    </form>
  );
};

export default Controls;
