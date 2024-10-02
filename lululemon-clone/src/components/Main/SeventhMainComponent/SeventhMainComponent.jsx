import { ItemContainer } from "../SecondMainComponent/ItemContainer/ItemContainer";
import "./SeventhMainComponent.css";

export const SeventhMainComponent = () => {
  return (
    <div className="seventh-main-component">
      <div className="seventh-main-component-container">
        <ItemContainer
          img="https://images.lululemon.com/is/image/lululemon/na_Aug24_wk3_W_OTM_1_3_Med_MediaAction_D_Hoodies?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          title="Complete: your looks."
          btntext="SHOP HOODIES & SWEATSHIRTS"
        />
        <ItemContainer
          img="https://images.lululemon.com/is/image/lululemon/NA_Sept24_WK5_W_OTM_1_3_Med_MediaAction_D_Pants?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          title="Your all day long pant."
          btntext="SHOP PANTS"
        />
        <ItemContainer
          img="https://images.lululemon.com/is/image/lululemon/na_Aug24_wk2_W_OTM_1_3_Med_MediaAction_D_Coats?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          title="Go even bolder."
          btntext="SHOP COATS & JACKETS"
        />
      </div>
    </div>
  );
};
