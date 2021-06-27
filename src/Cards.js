const Cards = ({ picture, setPreSelected, isVisible, inputValues }) => {
  const handleImageClick = (photo, e) => {
    setPreSelected((prevR) => {
      return [...prevR, photo];
    });
  };

  // choose options from possible answers and adding correct answer randomly:
  const chooseOptions = (arr) => {
    let mutable = [...arr];
    let newArr = [];
    for (let i = 0; i < 4; i++) {
      let temp = Math.floor(Math.random() * mutable.length);
      newArr.push(mutable.splice(temp, 1));
    }

    let answerIndex = Math.floor(Math.random() * (newArr.length + 1));
    newArr.splice(answerIndex, 0, "answer");
    return newArr.flat();
  };

  const handleSelect = (e, answer) => {
    if (e.target.value === answer) {
      e.target.style.backgroundColor = "rgb(55, 146, 55)";
    }
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
        {picture.map((photo) => {
          return (
            <div key={photo.id}>
              <img src={photo.webformatURL} alt="no data available" />
              <div className="options">
                <select onChange={(e) => handleSelect(e, photo.searchWord)}>
                  <option value="blank"></option>
                  {chooseOptions(inputValues).map((item, index) => {
                    if (item === "answer") {
                      return (
                        <option value={photo.searchWord} key={index}>
                          {photo.searchWord}
                        </option>
                      );
                    }
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
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
