"use client";

import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Bluetooth Speaker",
    category: "AUDIO",
    price: 25000,
    oldPrice: 32000,
    description:
      "Portable Bluetooth speaker with clear sound and strong battery life.",
    emoji: "🔊",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    category: "AUDIO",
    price: 30000,
    oldPrice: 45000,
    description:
      "Comfortable wireless headphones for music, calls and entertainment.",
    emoji: "🎧",
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "DEVICES",
    price: 35000,
    oldPrice: 45000,
    description:
      "Modern smart watch for everyday activity, notifications and calls.",
    emoji: "⌚",
  },
  {
    id: 4,
    name: "USB Charger",
    category: "ACCESSORIES",
    price: 8000,
    oldPrice: 10000,
    description:
      "Reliable USB charger for everyday phone and device charging.",
    emoji: "🔌",
  },
  {
    id: 5,
    name: "Power Bank",
    category: "ACCESSORIES",
    price: 20000,
    oldPrice: 28000,
    description:
      "Portable power bank for charging your devices while travelling.",
    emoji: "🔋",
  },
  {
    id: 6,
    name: "LED TV",
    category: "TV",
    price: 250000,
    oldPrice: 280000,
    description:
      "Large LED TV for home entertainment with a modern design.",
    emoji: "📺",
  },
];

function formatPrice(price) {
  return `${price.toLocaleString()} RWF`;
}

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  function addToCart(product) {
    setCart((current) => [...current, product]);
  }

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  return (
    <main className="site">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="brand">SANDE ELECTRONIC</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#deals">Deals</a>
          <a href="#request">Request Product</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <button aria-label="Search">⌕</button>
          <button aria-label="Cart">🛒 {cart.length}</button>
          <button className="account">Account</button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div>
          <span className="badge">SANDE ELECTRONIC</span>

          <h1>
            Quality Electronics.
            <br />
            Better Prices.
          </h1>

          <p>
            Discover smartphones, audio devices, accessories, TVs and more
            from SANDE ELECTRONIC.
          </p>

          <div className="hero-buttons">
            <a href="#products" className="primary-btn">
              Shop Products
            </a>

            <a href="#request" className="secondary-btn">
              Request Product
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products-section" id="products">
        <div className="section-heading">
          <div>
            <span>OUR STORE</span>
            <h2>Featured Products</h2>
          </div>

          <p>
            Choose a product to see all details and similar products.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => {
            const favorite = favorites.includes(product.id);

            return (
              <article className="product-card" key={product.id}>
                <div className="product-image">
                  <span className="deal-label">
                    {product.oldPrice > product.price ? "DEAL" : "NEW"}
                  </span>

                  <button
                    className={`favorite ${favorite ? "active" : ""}`}
                    onClick={() => toggleFavorite(product.id)}
                  >
                    {favorite ? "♥" : "♡"}
                  </button>

                  <div className="product-emoji">{product.emoji}</div>
                </div>

                <div className="product-info">
                  <span className="category">{product.category}</span>

                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                  <div className="price-row">
                    <strong>{formatPrice(product.price)}</strong>

                    {product.oldPrice && (
                      <del>{formatPrice(product.oldPrice)}</del>
                    )}
                  </div>

                  <div className="card-buttons">
                    <button
                      className="details-btn"
                      onClick={() => setSelectedProduct(product)}
                    >
                      Details
                    </button>

                    <button
                      className="cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* DEALS */}
      <section className="deal-section" id="deals">
        <span>LIMITED DEALS</span>
        <h2>Save More on Selected Electronics</h2>
        <p>
          Check our latest offers and discover products at better prices.
        </p>

        <a href="#products" className="primary-btn">
          View Deals
        </a>
      </section>

      {/* REQUEST */}
      <section className="request-section" id="request">
        <div>
          <span>CAN'T FIND IT?</span>
          <h2>Request a Product</h2>
          <p>
            Tell SANDE ELECTRONIC which electronic product you are looking
            for.
          </p>
        </div>

        <button className="primary-btn">Request Product</button>
      </section>

      {/* CONTACT */}
      <footer id="contact">
        <div>
          <h2>SANDE ELECTRONIC</h2>
          <p>Your trusted electronics store in Rwanda.</p>
        </div>

        <div>
          <strong>Contact</strong>
          <p>Phone • WhatsApp • Email</p>
        </div>
      </footer>

      {/* PRODUCT DETAILS MODAL */}
      {selectedProduct && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close-modal"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>

            <div className="modal-image">
              {selectedProduct.emoji}
            </div>

            <span className="category">
              {selectedProduct.category}
            </span>

            <h2>{selectedProduct.name}</h2>

            <p>{selectedProduct.description}</p>

            <div className="modal-price">
              {formatPrice(selectedProduct.price)}
            </div>

            <button
              className="primary-btn full"
              onClick={() => addToCart(selectedProduct)}
            >
              Add to Cart
            </button>

            <h3 className="related-title">You may also like</h3>

            <div className="related-products">
              {products
                .filter((item) => item.id !== selectedProduct.id)
                .slice(0, 3)
                .map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedProduct(item)}
                  >
                    <span>{item.emoji}</span>
                    {item.name}
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
