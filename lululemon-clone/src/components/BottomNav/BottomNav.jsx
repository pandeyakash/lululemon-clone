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
      <div className="logo-bottom_nav">
        <img
          src="data:image/png;base64,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"
          alt="logo"
        />
      </div>
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
