const Cards = ({ imageText, setPreSelected }) => {
  const handleImageClick = (photo, e) => {
    console.log("photo is ", photo, "event is ", e);
    setPreSelected((prevR) => {
      return [...prevR, photo];
    });
  };

  // return (
  //   <div>
  //     <h1>Cards Component</h1>
  //     {imageText.map((photo) => {
  //       let tags = photo.tags.split(",");
  //       // console.log(photo.webformatURL);
  //       return (
  //         <div key={photo.id}>
  //           <div onClick={(e) => handleImageClick(photo, e)}>
  //             <img src={photo.webformatURL} alt="no data available" />
  //           </div>
  //           <div className="options">
  //             <select>
  //               <option value={tags[0]}>{tags[0]}</option>
  //               <option value={tags[1]}>{tags[1]}</option>
  //               <option value={tags[2]}>{tags[2]}</option>
  //             </select>
  //           </div>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );

  return (
    <div>
      <h1>Cards Component</h1>
      {imageText.map((photo) => {
        let tags = photo.tags.split(",");
        // console.log(photo.webformatURL);
        return (
          <div key={photo.id}>
            <div onClick={(e) => handleImageClick(photo, e)}>
              <img src={photo.webformatURL} alt="no data available" />
            </div>
            <div className="options">
              <select>
                <option value={tags[0]}>{tags[0]}</option>
                <option value={tags[1]}>{tags[1]}</option>
                <option value={tags[2]}>{tags[2]}</option>
              </select>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
