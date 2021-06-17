const Controls = ({ setImage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const myValue = e.target.myValue.value;
    setImage(myValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="myValue" />
      <button>Image search word</button>
    </form>
  );
};

export default Controls;
