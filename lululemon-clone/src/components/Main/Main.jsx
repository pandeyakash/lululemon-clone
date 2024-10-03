import { PiecesOfTheAction } from "./PiecesOfTheAction/PiecesOfTheAction";
import { SecondMainComponent } from "./SecondMainComponent/SecondMainComponent";
import { ThirdMainComponent } from "./ThirdMainComponent/ThirdMainComponent";
import { FourthMainSection } from "./FourthMainSection/FourthMainSection";
import "./Main.css";
import { FifthMainComponent } from "./FifthMainComponent/FifthMainCompnent";
import { SixthMainComponent } from "./SixthMainComponent/SixthMainComponent";
import { SeventhMainComponent } from "./SeventhMainComponent/SeventhMainComponent";
import { EighthMainComponent } from "./EighthMainComponent/EighthMainComponent";
import { NinthMainComponent } from "./NinthMainComponent/NinthMainComponent";
import { TenthMainComponent } from "./TenthMainComponent/TenthMainComponent";

export const Main = () => {
  const array1 = [
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
  return (
    <div className="main">
      <div className="main-container">
        <PiecesOfTheAction />
        <SecondMainComponent />
        <ThirdMainComponent users={array1} heading="What's New This Week" />
        <FourthMainSection
          img="https://images.lululemon.com/is/image/lululemon/NA_OCT24_Wk2_DG_WMHD_1_1_Med_MediaAction_D_HPTile?wid=1440&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          title="On 10/10, playdates are in session."
          description="Want to come out and play?"
          btntext="LEARN MORE"
        />
        <FifthMainComponent />
        <SixthMainComponent />
        <SeventhMainComponent />
        <EighthMainComponent
          img="https://images.lululemon.com/is/image/lululemon/NA_Sept24_WK4_W_Yoga_1_1_Med_MediaAction_D_Whatsnew?wid=1440&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          title="Feel your way around."
          description="Wunder Under is back in four unique fabrics, each one as intriguing as the next."
          btn1text="SHOP WUNDER UNDER"
          btn2text="SHOP BY COLOR"
        />
        <NinthMainComponent />
        <TenthMainComponent />
      </div>
    </div>
  );
};
