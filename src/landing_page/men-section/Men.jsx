import './men.css';
import menImg1 from '../../assets/men/men1.avif';
import menImg2 from '../../assets/men/men2.webp';
import menImg3 from '../../assets/men/men3.webp';

function Men() {
  return (
    <section className="men-section" id="men">
      <div className="men-container">
        <h2 className="section-title">Men's Collection</h2>
        <div className="men-items">
          <div className="men-item">
            <img src={menImg1} alt="Stylish Jacket" className="men-item-img" />
            <h3 className="men-item-title">Stylish Jacket</h3>
            <p className="men-item-price">$79.99</p>
            <div className="product-actions">
              <button className="btn-cart">Add to Cart</button>
              <button className="btn-buy">Buy Now</button>
            </div>
          </div>
          <div className="men-item">
            <img src={menImg2} alt="Casual Shirt" className="men-item-img" />
            <h3 className="men-item-title">Oversized Textured T-shirt</h3>
            <p className="men-item-price">$39.99</p>
            <div className="product-actions">
              <button className="btn-cart">Add to Cart</button>
              <button className="btn-buy">Buy Now</button>
            </div>
          </div>
          <div className="men-item">
            <img src={menImg3} alt="Classic Jeans" className="men-item-img" />
            <h3 className="men-item-title">Classic Jeans</h3>
            <p className="men-item-price">$49.99</p>
            <div className="product-actions">
              <button className="btn-cart">Add to Cart</button>
              <button className="btn-buy">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Men;