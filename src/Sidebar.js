const Sidebar = ({ preSelected }) => {
  return (
    <div className="inSideBar">
      <h1>Selected Pictures</h1>
      {preSelected.map((pic) => {
        return <img src={pic.previewURL} alt="no data available" key={pic.id} />;
      })}
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <button>Go to game</button>
    </div>
  );
};

export default Sidebar;

// {preSelected.length > 0 && <img src={preSelected} alt="no data available" />}
