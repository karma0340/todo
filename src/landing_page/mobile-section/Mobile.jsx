import './mobile.css';
import mobileImg1 from '../../assets/mobile/mobile1.webp';
import mobileImg2 from '../../assets/mobile/mobile2.webp';
import mobileImg3 from '../../assets/mobile/mobile3.webp';

function Mobile() {
  return (
    <section className="mobile-section" id="mobile">
      <div className="mobile-container">
        <h2 className="section-title">Latest Mobiles</h2>
        <div className="mobile-items">
          <div className="mobile-item">
            <img src={mobileImg1} alt="Smartphone X" className="mobile-item-img" />
            <h3 className="mobile-item-title">Smartphone X</h3>
            <p className="mobile-item-price">$699.99</p>
            <div className="product-actions">
              <button className="btn-cart">Add to Cart</button>
              <button className="btn-buy">Buy Now</button>
            </div>
          </div>
          <div className="mobile-item">
            <img src={mobileImg2} alt="Pro Model Y" className="mobile-item-img" />
            <h3 className="mobile-item-title">Pro Model Y</h3>
            <p className="mobile-item-price">$899.99</p>
            <div className="product-actions">
              <button className="btn-cart">Add to Cart</button>
              <button className="btn-buy">Buy Now</button>
            </div>
          </div>
          <div className="mobile-item">
            <img src={mobileImg3} alt="Foldable Z" className="mobile-item-img" />
            <h3 className="mobile-item-title">Foldable Z</h3>
            <p className="mobile-item-price">$1299.99</p>
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

export default Mobile;