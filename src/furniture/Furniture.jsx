// import { useState } from "react";
// import "./furniture.css";

// const CATEGORIES = ["All", "sofa", "chair", "bed", "table"];

// function addToCart(product) {
//     console.log("Added to cart:", product);
// }
// function buyNow(product) {
//     console.log("Buy now:", product);
// }

// function Furniture({ products = [] }) {
//     const [activeCategory, setActiveCategory] = useState("All");
//     const [mainImg, setMainImg] = useState({});

//     const filtered = activeCategory === "All"
//         ? products
//         : products.filter(p => p.category === activeCategory);

//     return (
//         <section className="furniture-section">
//             <h2>Furniture Premium Collection</h2>

//             {/* Category Filter Tabs */}
//             <div className="category-tabs">
//                 {CATEGORIES.map(cat => (
//                     <button
//                         key={cat}
//                         className={activeCategory === cat ? "tab active" : "tab"}
//                         onClick={() => {
//                             setActiveCategory(cat);
//                             setMainImg({});
//                         }}
//                     >
//                         {cat === "All" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1) + "s"}
//                     </button>
//                 ))}
//             </div>

//             <p className="count">{filtered.length} Premium Products</p>

//             <div className="products">
//                 {filtered.map((item) => {
//                     const current = mainImg[item.id] || item.images[0];

//                     return (
//                         <div className="card" key={item.id}>
//                             <div className="main-img">
//                                 <img src={current} alt={item.title} />
//                             </div>
//                             <div className="thumbs scrollable-thumbs">
//                                 {item.images.map((src, index) => (
//                                     <img
//                                         key={index}
//                                         src={src}
//                                         alt={`View ${index + 1}`}
//                                         onMouseEnter={() => setMainImg({ ...mainImg, [item.id]: src })}
//                                     />
//                                 ))}
//                             </div>
//                             <h3>{item.title}</h3>
//                             <p className="category-tag">{item.category}</p>
//                             <p className="price">{item.price}</p>
//                             {item.material && (
//                                 <p className="material">
//                                     <strong>Material:</strong> {item.material}
//                                 </p>
//                             )}
//                             {item.description && <p className="size">{item.description}</p>}
//                             <div className="product-actions">
//                                 <button className="btn-cart" onClick={() => addToCart(item)}>Add to Cart</button>
//                                 <button className="btn-buy" onClick={() => buyNow(item)}>Buy Now</button>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </section>
//     );
// }

// export default Furniture;