import { Button } from "../../Button/Button";
import "./FourthMainSection.css";

export const FourthMainSection = ({ img, title, description, btntext }) => {
  return (
    <div className="fourth-main-section">
      <div className="fourth-main-section-container">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button text={btntext} />
      </div>
    </div>
  );
};
