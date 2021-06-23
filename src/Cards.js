const Cards = ({ picture, setPreSelected, isVisible, inputValues }) => {
  const handleImageClick = (photo, e) => {
    // console.log("photo is ", photo, "event is ", e);
    console.log("clicked photo");
    setPreSelected((prevR) => {
      return [...prevR, photo];
    });
  };

  if (isVisible) {
    return (
      <div>
        <h1>Cards Component</h1>
        {picture.map((photo) => (
          <div key={photo.id} onClick={(e) => handleImageClick(photo, e)}>
            <img src={photo.webformatURL} alt="no data available" />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Cards Component</h1>
        {picture.map((photo) => {
          return (
            <div key={photo.id}>
              <img src={photo.webformatURL} alt="no data available" />
              <div className="options">
                <select>
                  {inputValues.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
                  <option value={photo.searchWord}>{photo.searchWord}</option>
                </select>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Cards;
