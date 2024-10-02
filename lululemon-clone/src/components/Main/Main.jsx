import { PiecesOfTheAction } from "./PiecesOfTheAction/PiecesOfTheAction";
import { SecondMainComponent } from "./SecondMainComponent/SecondMainComponent";
import { FourthMainSection } from "./FourthMainSection/FourthMainSection";
import "./Main.css";
import { FifthMainComponent } from "./FifthMainComponent/FifthMainCompnent";
import { SeventhMainComponent } from "./SeventhMainComponent/SeventhMainComponent";
import { EighthMainComponent } from "./EighthMainComponent/EighthMainComponent";
import { NinthMainComponent } from "./NinthMainComponent/NinthMainComponent";

export const Main = () => {
  return (
    <div className="main">
      <div className="main-container">
        <PiecesOfTheAction />
        <SecondMainComponent />
        <FourthMainSection
          img="https://images.lululemon.com/is/image/lululemon/NA_OCT24_Wk2_DG_WMHD_1_1_Med_MediaAction_D_HPTile?wid=1440&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          title="On 10/10, playdates are in session."
          description="Want to come out and play?"
          btntext="LEARN MORE"
        />
        <FifthMainComponent />
        <SeventhMainComponent />
        <EighthMainComponent
          img="https://images.lululemon.com/is/image/lululemon/NA_Sept24_WK4_W_Yoga_1_1_Med_MediaAction_D_Whatsnew?wid=1440&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          title="Feel your way around."
          description="Wunder Under is back in four unique fabrics, each one as intriguing as the next."
          btn1text="SHOP WUNDER UNDER"
          btn2text="SHOP BY COLOR"
        />
        <NinthMainComponent />
      </div>
    </div>
  );
};
