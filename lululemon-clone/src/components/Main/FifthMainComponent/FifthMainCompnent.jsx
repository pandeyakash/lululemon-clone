import { ItemContainer } from "../SecondMainComponent/ItemContainer/ItemContainer";
import "./FifthMainComponent.css";

export const FifthMainComponent = () => {
  return (
    <div className="fifth-main-component">
      <div className="fifth-main-component-container">
        <ItemContainer
          img="https://images.lululemon.com/is/image/lululemon/na_Aug24_wk3_M_OTM_1_3_Med_MediaAction_D_Hoodies?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          title="Can’t beat this classic."
          btntext="SHOP HOODIES & SWEATSHIRTS"
        />
        <ItemContainer
          img="https://images.lululemon.com/is/image/lululemon/NA_Sept24_WK5_M_OTM_1_3_Med_MediaAction_D_Pants?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          title="An urban legend."
          btntext="SHOP PANTS"
        />
        <ItemContainer
          img="https://images.lululemon.com/is/image/lululemon/NA_Sept24_WK4_M_OTM_1_3_Med_MediaAction_D_CoatsJackets?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          title="Layer and level up.."
          btntext="SHOP COATS & JACKETS"
        />
      </div>
    </div>
  );
};
