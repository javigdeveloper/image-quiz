const Cards = ({ imageText }) => {
  return (
    <div>
      <h1>Cards Component</h1>
      {imageText.map((photo) => (
        <div key={photo.id}>
          <img src={photo.webformatURL} alt="no data available" />
          <div className="card">
            <select>
              <option value={photo.tags[0]}>{photo.tags}</option>
              <option value={photo.tags[1]}>{photo.tags}</option>
              <option value={photo.tags[2]}>{photo.tags}</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
