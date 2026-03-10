function Cart(){
    return(
        <div className="cart-container">
            <h2>Your Cart</h2>
            <div className="cart-items">
                {cart.map((item, index) => (
                    <div key={index} className="cart-item">
                        <img src={item.images[0]} alt={item.title} />
                        <div className="item-details">
                            <h3>{item.title}</h3>
                            <p>{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
export default Cart;

