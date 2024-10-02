import "./TenthMainComponent.css";
import { Button } from "../../Button/Button";

export const TenthMainComponent = () => {
  return (
    <div className="tenth-main-component">
      <div className="tenth-main-component-container">
        <img
          src="https://images.lululemon.com/is/image/lululemon/na_Jul24_Q3_BrandStatement_D?wid=1322&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          alt=""
        />
        <div className="inside-box">
          <h2>Score a new favourite fit for your goals.</h2>
          <Button text="SHOP WE MADE TOO MUCH" />
        </div>
      </div>
    </div>
  );
};
