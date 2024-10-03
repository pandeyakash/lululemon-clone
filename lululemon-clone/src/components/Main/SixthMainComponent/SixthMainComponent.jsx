import { ThirdMainComponent } from "../ThirdMainComponent/ThirdMainComponent";
import { Button } from "../../Button/Button";
import "./SixthMainComponent.css";

export const SixthMainComponent = () => {
  const array2 = [
    {
      img: "https://images.lululemon.com/is/image/lululemon/LM3FGKS_0002_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      title: "Soft Jersey Short-Sleeve Shirt",
      price: "$58",
    },
    {
      img: "https://images.lululemon.com/is/image/lululemon/LU9BXCS_0393_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      title: "Cactus Material Saddle Crossbody Bag 2L",
      price: "$128",
    },
    {
      img: "https://images.lululemon.com/is/image/lululemon/LW9EWOS_067816_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      title: "Dual Pouch Wristlet",
      price: "$48 - $58",
    },
    {
      img: "https://images.lululemon.com/is/image/lululemon/LW3EOZS_063407_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      title: "Scuba Oversized Full-Zip Hoodie",
      price: "$128",
    },
    {
      img: "https://images.lululemon.com/is/image/lululemon/LW3FTFS_033123_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      title: "Hold Tight Long-Sleeve Shirt",
      price: "$68",
    },
    {
      img: "https://images.lululemon.com/is/image/lululemon/LW1EIOS_026956_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      title: "lululemon Align Dress",
      price: "$148",
    },
    {
      img: "https://images.lululemon.com/is/image/lululemon/LM3FA9S_064494_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      title: "Steady State Half Zip",
      price: "$128",
    },
    {
      img: "https://images.lululemon.com/is/image/lululemon/LM5AR5S_0001_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      title: "ABC Classic Fit 5 Pocket Pant 32''L Warpstreme",
    },
  ];
  return (
    <div className="sixth-main-component">
      <div className="sixth-main-component-container">
        <div className="corousel">
          <ThirdMainComponent users={array2} />
        </div>
        <div className="button">
          <Button text="SHOP BESTSELLERS" />
        </div>
      </div>
    </div>
  );
};
