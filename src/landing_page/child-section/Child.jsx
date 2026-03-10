import './child.css';
import childImg1 from '../../assets/child/child1.webp';
import childImg2 from '../../assets/child/child2.webp';
import childImg3 from '../../assets/child/child3.webp';

function Child() {
  return (
    <section className="child-section" id="child">
      <div className="child-container">
        <h2 className="section-title">Kids' Collection</h2>
        <div className="child-items">
          <div className="child-item">
            <img src={childImg1} alt="Kids' Fashion 1" className="child-item-img" />
            <h3 className="child-item-title">Casual Outfit</h3>
            <p className="child-item-price">$49.99</p>
            <div className="product-actions">
              <button className="btn-cart">Add to Cart</button>
              <button className="btn-buy">Buy Now</button>
            </div>
          </div>
          <div className="child-item">
            <img src={childImg2} alt="Kids' Fashion 2" className="child-item-img" />
            <h3 className="child-item-title">Modern Style</h3>
            <p className="child-item-price">$29.99</p>
            <div className="product-actions">
              <button className="btn-cart">Add to Cart</button>
              <button className="btn-buy">Buy Now</button>
            </div>
          </div>
          <div className="child-item">
            <img src={childImg3} alt="Kids' Fashion 3" className="child-item-img" />
            <h3 className="child-item-title">Comfort Ease</h3>
            <p className="child-item-price">$39.99</p>
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

export default Child;