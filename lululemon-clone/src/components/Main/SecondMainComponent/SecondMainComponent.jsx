import { ItemContainer } from "./ItemContainer/ItemContainer";
import "./SecondMainComponent.css";

export const SecondMainComponent = () => {
  return (
    <div className="second-main-component">
      <div className="second-main-component-container">
        <ItemContainer
          img="https://images.lululemon.com/is/image/lululemon/NA_Oct24_WK1_AG_OTM_1_2_Lg_MediaAction_D_WomensFallClothes_V2?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          title="Big City Lights."
          description="The surprising warmth of the Fleece-Lined Insulated Long Coat is the real star."
          btntext="SHOP WOMEN FALL CLOTHES"
        />
        <ItemContainer
          img="https://images.lululemon.com/is/image/lululemon/NA_Oct24_WK1_AG_OTM_1_2_Lg_MediaAction_D_MensFallClothes?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          title="Reinvention ready."
          description="The versatile High Pile Fleece Jacket covers every version of you."
          btntext="SHOP MEN FALL CLOTHES"
        />
      </div>
    </div>
  );
};
