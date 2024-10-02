import "./PiecesOfTheAction.css";
import { Button } from "../../Button/Button";

export const PiecesOfTheAction = () => {
  return (
    <div className="pieces-of-the-action">
      <div className="pieces-of-the-action-container">
        <div className="image-container">
          <img
            src="https://images.unsplash.com/photo-1655701522771-4fecfb72daaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhpbmclMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
            alt="image-1"
          />
          <img
            src="https://images.unsplash.com/photo-1656523267493-31b9b2cfdc47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoaW5nJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D"
            alt="image-2"
          />
          <div className="square-box">
            <h2>lululemon</h2>
            <ul>
              <li>Women's What's New</li>
              <li>Men's What's New</li>
              <li>All Women's</li>
              <li>All Men's</li>
              <li>All Accessories</li>
            </ul>
          </div>
          <div className="button-container">
            <Button text="SHOP WHAT'S NEW" />
          </div>
        </div>
        <div className="bottom-text">
          <h2>Cover Story</h2>
          <p>
            Picture-perfect outerwear turns every ensemble into a headliner.
          </p>
        </div>
      </div>
    </div>
  );
};
