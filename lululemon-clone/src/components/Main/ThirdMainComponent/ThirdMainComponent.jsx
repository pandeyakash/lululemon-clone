import { useState } from "react";
import "./ThirdMainComponent.css";

export const ThirdMainComponent = ({ users, heading }) => {
  const [startIndex, setStartIndex] = useState(0);
  const displayItems = 4;

  const handleLeftClick = () => {
    setStartIndex((prev) => (prev - 1 + users.length) % users.length);
  };

  const handleRightClick = () => {
    setStartIndex((prev) => (prev + 1) % users.length);
  };

  const displayArray = () => {
    const array = [];
    for (let i = 0; i < displayItems; i++) {
      array.push(users[(startIndex + i) % users.length]);
    }
    return array;
  };

  return (
    <div className="third-main-component">
      <div className="third-main-component-container">
        <div className="heading">
          <h2>{heading}</h2>
        </div>
        <div className="sliding">
          <button className="left-click-button" onClick={handleLeftClick}>
            &lt;
          </button>
          {displayArray().map((ele, index) => (
            <div className="single-item-container">
              <div className="img">
                <img src={ele.img} alt={ele.title} />
              </div>
              <div className="info">
                <p className="title">{ele.title}</p>
                <p className="price">{ele.price}</p>
              </div>
            </div>
          ))}
          <button className="right-click-button" onClick={handleRightClick}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};
