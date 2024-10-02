import { Button } from "../../../Button/Button";
import "./ItemComtainer.css";

export const ItemContainer = ({ img, title, description, btntext }) => {
  return (
    <div className="item-container">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <Button text={btntext} />
    </div>
  );
};
