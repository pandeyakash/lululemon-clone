import "./ShoesContent.css";

export const ShoesContent = () => {
  return (
    <div className="shoes_content">
      <div className="upper-shoes_content">
        <div className="left-upper-shoes_content">
          <div className="left-left-upper-shoes_content">
            <ul>
              <li>SHOES BY GENDER</li>
              <li>Women's Shoes</li>
              <li>Men's Shoes</li>
            </ul>
          </div>
          <div className="right-left-upper-shoes_content">
            <ul>
              <li>SHOE TYPES</li>
              <li>Cross Training Shoes</li>
              <li>Running Shoes</li>
              <li>Slides</li>
              <li>Sneakers</li>
              <li>Trail Running Shoes</li>
              <li>Workout Shoes</li>
            </ul>
          </div>
        </div>
        <div className="right-upper-shoes_content">
          <div>img</div>
          <h3>It's a concrete jungle.</h3>
          <p>Cushion every step with the Cityverse Sneaker</p>
          <span>Shop Shoes</span>
        </div>
      </div>
      <div className="lower-shoes">
        <div className="lower-shoes_content">
          <div className="left-lower-shoes_content">ACTIVITY</div>
          <div className="middle-lower-shoes_content">
            <span>Running</span>
            <span>Workout</span>
            <span>Casual</span>
            <span>Hiking</span>
          </div>
          <div className="right-lower-shoes_content">SHOP ALL SHOES</div>
        </div>
      </div>
    </div>
  );
};
