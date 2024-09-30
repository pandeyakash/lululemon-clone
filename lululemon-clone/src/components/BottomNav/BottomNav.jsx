import "./BottomNav.css";
import { WomenContent } from "./WomenContent/WomenContent";
import { MenContent } from "./MenContent/MenContent";
import { AccessoriesContent } from "./AccessoriesContent/AccessoriesContent";
import { ShoesContent } from "./ShoesContent/ShoesContent";
import { WhatsNewContent } from "./WhatsNewContent/WhatsNewContent";
import { WMTMContent } from "./WMTMContent/WMTMContent";
import { useState } from "react";

export const BottomNav = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const dropDownOptions = [
    {
      label: "WOMEN",
      content: <WomenContent />,
    },
    {
      label: "MEN",
      content: <MenContent />,
    },
    {
      label: "ACCESSORIES",
      content: <AccessoriesContent />,
    },
    {
      label: "SHOES",
      content: <ShoesContent />,
    },
    {
      label: "WHAT'S NEW",
      content: <WhatsNewContent />,
    },
    {
      label: "WE MADE TOO MUCH",
      content: <WMTMContent />,
    },
  ];

  return (
    <div className="bottom_nav">
      <div className="logo-bottom_nav">logo</div>
      <div className="drop_down-bottom_nav">
        {/* <span>WOMEN</span>
        <span>MEN</span>
        <span>ACCESSORIES</span>
        <span>SHOES</span>
        <span>WHAT'S NEW</span>
        <span>WE MADE TOO MUCH</span> */}
        {dropDownOptions.map((option, index) => (
          <div
            className="dropdown-item"
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <span className="dropdown-button">{option.label}</span>
            {hoverIndex === index && (
              <div className="dropdown-content">{option.content}</div>
            )}
          </div>
        ))}
      </div>
      <div className="right-bottom_nav">
        <div className="search-bottom_nav">
          <span>icon</span>
          <input type="text" placeholder="Search" />
        </div>
        <div>
          <span>icon</span>
          <span>Sign In</span>
        </div>
        <div>
          <span>icon</span>
        </div>
        <div>
          <span>icon</span>
        </div>
      </div>
    </div>
  );
};
