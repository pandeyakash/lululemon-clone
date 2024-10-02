import { Button } from "../../Button/Button";
import "./EighthMainComponent.css";

export const EighthMainComponent = ({
  img,
  title,
  description,
  btn1text,
  btn2text,
}) => {
  return (
    <div className="eighth-main-component">
      <div className="eighth-main-component-container">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="buttons">
          <Button text={btn1text} />
          <Button text={btn2text} reverse="true" />
        </div>
      </div>
    </div>
  );
};
