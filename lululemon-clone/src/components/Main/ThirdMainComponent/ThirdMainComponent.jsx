import { useState } from "react";
import "./ThirdMainComponent.css";

export const ThirdMainComponent = () => {
  const users = [
    {
      img: "https://images.lululemon.com/is/image/lululemon/LW3HR0S_027597_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      title: "Cable Knit Oversized Half Zip",
      price: "$148",
    },
    {
      img: "https://images.lululemon.com/is/image/lululemon/LW4BWSS_0001_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      title: "Wunder Puff Long Jacket",
      price: "$398",
    },
    {
      img: "https://images.lululemon.com/is/image/lululemon/LM3FANS_0001_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      title: "High Pile Fleece Full-Zip Jacket",
      price: "$198",
    },
    {
      img: "https://images.lululemon.com/is/image/lululemon/LM3FAQS_066854_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      title: "High Pile Fleece Vest",
      price: "$148",
    },
    {
      img: "https://images.lululemon.com/is/image/lululemon/LM4ARGS_033123_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      title: "Men's Route Ready Lightweight Insulated Jacket",
      price: "$198",
    },
    {
      img: "https://images.lululemon.com/is/image/lululemon/LU9CACS_066854_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      title: "Slouchy Sling Bag 6L",
      price: "$68",
    },
    {
      img: "https://images.lululemon.com/is/image/lululemon/LU9BW9S_0001_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      title: "Warm Revelation Beanie Wordmark",
      price: "$48",
    },
    {
      img: "https://images.lululemon.com/is/image/lululemon/LW4CGGS_0001_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      title: "Relaxed-Fit Zip-Front Wool Coat",
      price: "$398",
    },
  ];

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
          <h2>What's New This Week</h2>
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
