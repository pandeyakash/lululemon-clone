import { PiecesOfTheAction } from "./PiecesOfTheAction/PiecesOfTheAction";
import { SecondMainComponent } from "./SecondMainComponent/SecondMainComponent";
import { FourthMainSection } from "./FourthMainSection/FourthMainSection";
import "./Main.css";
import { FifthMainComponent } from "./FifthMainComponent/FifthMainCompnent";

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
      </div>
    </div>
  );
};
