import './laptop.css';
import laptopImg1 from '../../assets/laptop/laptop1.webp';
import laptopImg2 from '../../assets/laptop/laptop2.webp';
import laptopImg3 from '../../assets/laptop/laptop3.webp';

function Laptop() {
    return (
        <section className="laptop-section" id="laptop">
            <div className="laptop-container">
                <h2 className="section-title">Premium Laptops</h2>
                <div className="laptop-items">
                    <div className="laptop-item">
                        {/* <div className="item-tag">Bestseller</div> */}
                        <img src={laptopImg1} alt="MacBook Pro" className="laptop-item-img" />
                        <h3 className="laptop-item-title">Apple MacBook Pro</h3>
                        <p className="item-description">M3 Chip | 16GB RAM | 512GB SSD</p>
                        <p className="laptop-item-price">₹1,69,900 <span className="old-price">₹1,79,900</span></p>
                        <div className="product-actions">
                            <button className="btn-cart">Add to Cart</button>
                            <button className="btn-buy">Buy Now</button>
                        </div>
                    </div>
                    <div className="laptop-item">
                        {/* <div className="item-tag">High Performance</div> */}
                        <img src={laptopImg2} alt="Dell XPS" className="laptop-item-img" />
                        <h3 className="laptop-item-title">Dell XPS 15</h3>
                        <p className="item-description">Core i9 | RTX 4060 | UHD+ Touch</p>
                        <p className="laptop-item-price">₹1,45,000 <span className="old-price">₹1,55,000</span></p>
                        <div className="product-actions">
                            <button className="btn-cart">Add to Cart</button>
                            <button className="btn-buy">Buy Now</button>
                        </div>
                    </div>
                    <div className="laptop-item">
                        <img src={laptopImg3} alt="Gaming Laptop" className="laptop-item-img" />
                        <h3 className="laptop-item-title">ASUS ROG Zephyrus</h3>
                        <p className="item-description">Ryzen 9 | RTX 4070 | 240Hz Display</p>
                        <p className="laptop-item-price">₹1,29,999 <span className="old-price">₹1,40,000</span></p>
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

export default Laptop;
