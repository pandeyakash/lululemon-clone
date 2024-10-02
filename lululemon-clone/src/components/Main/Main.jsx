import { PiecesOfTheAction } from "./PiecesOfTheAction/PiecesOfTheAction";
import { SecondMainComponent } from "./SecondMainComponent/SecondMainComponent";
import "./Main.css";

export const Main = () => {
  return (
    <div className="main">
      <div className="main-container">
        <PiecesOfTheAction />
        <SecondMainComponent />
      </div>
    </div>
  );
};
