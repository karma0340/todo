import './women.css';
import womenImg1 from '../../assets/women/women1.avif';
import womenImg2 from '../../assets/women/women2.webp';
import womenImg3 from '../../assets/women/women3.webp';

function Women() {
  return (
    <section className="women-section" id="women">
      <div className="women-container">
        <h2 className="section-title">Women's Collection</h2>
        <div className="women-items">
          <div className="women-item">
            <img src={womenImg1} alt="Women's Polo T-shirt" className="women-item-img" />
            <h3 className="women-item-title">Puma T-shirt</h3>
            <p className="women-item-price">$79.99</p>
            <div className="product-actions">
              <button className="btn-cart">Add to Cart</button>
              <button className="btn-buy">Buy Now</button>
            </div>
          </div>
          <div className="women-item">
            <img src={womenImg2} alt="Casual Shirt" className="women-item-img" />
            <h3 className="women-item-title">Oversized Sweatshirt</h3>
            <p className="women-item-price">$39.99</p>
            <div className="product-actions">
              <button className="btn-cart">Add to Cart</button>
              <button className="btn-buy">Buy Now</button>
            </div>
          </div>
          <div className="women-item">
            <img src={womenImg3} alt="Classic Jeans" className="women-item-img" />
            <h3 className="women-item-title">Black Solid Lightweight Bomber Jacket</h3>
            <p className="women-item-price">$49.99</p>
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

export default Women;