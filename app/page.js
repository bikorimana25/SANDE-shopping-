"use client";

import { useMemo, useState } from "react";

const products = [
  {
    id: 1,
    name: "Bluetooth Speaker",
    category: "Audio",
    price: 25000,
    oldPrice: 32000,
    icon: "🔊",
    badge: "Popular",
    description: "Portable Bluetooth speaker with clear sound and strong battery life.",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    category: "Audio",
    price: 30000,
    oldPrice: 40000,
    icon: "🎧",
    badge: "Deal",
    description: "Comfortable wireless headphones for music, calls and entertainment.",
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Smart Devices",
    price: 35000,
    oldPrice: 45000,
    icon: "⌚",
    badge: "New",
    description: "Modern smart watch for everyday activity and notifications.",
  },
  {
    id: 4,
    name: "USB Charger",
    category: "Accessories",
    price: 8000,
    oldPrice: 10000,
    icon: "🔌",
    badge: "Best Price",
    description: "Reliable USB charger for everyday phone charging.",
  },
  {
    id: 5,
    name: "Power Bank",
    category: "Accessories",
    price: 20000,
    oldPrice: 28000,
    icon: "🔋",
    badge: "Popular",
    description: "Portable power bank for charging your devices on the go.",
  },
  {
    id: 6,
    name: "LED TV",
    category: "TV",
    price: 250000,
    oldPrice: 290000,
    icon: "📺",
    badge: "Deal",
    description: "Large LED TV for home entertainment with a modern design.",
  },
];

const categories = [
  { name: "Smartphones", icon: "📱" },
  { name: "Laptops", icon: "💻" },
  { name: "TV", icon: "📺" },
  { name: "Audio", icon: "🎧" },
  { name: "Accessories", icon: "🔌" },
  { name: "Smart Devices", icon: "⌚" },
];

function formatPrice(price) {
  return `${price.toLocaleString("en-US")} RWF`;
}

export default function Home() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);

  function addToCart(product) {
    setCart((current) => [...current, product]);
  }

  function removeFromCart(index) {
    setCart((current) => current.filter((_, i) => i !== index));
  }

  function toggleWishlist(productId) {
    setWishlist((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    );
  }

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const cartTotal = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="sande-site">
      {/* HEADER */}
      <header className="header">
        <div className="container nav">
          <a href="#home" className="logo">
            SANDE <span>ELECTRONIC</span>
          </a>

          <nav className="desktop-nav">
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#deals">Deals</a>
            <a href="#request">Request Product</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-actions">
            <button
              className="icon-button"
              onClick={() =>
                document.getElementById("products")?.scrollIntoView()
              }
              aria-label="Search products"
            >
              🔎
            </button>

            <button
              className="icon-button"
              onClick={() => setShowCart(true)}
              aria-label="Shopping cart"
            >
              🛒
              {cart.length > 0 && (
                <span className="cart-count">{cart.length}</span>
              )}
            </button>

            <a href="#account" className="account-button">
              Account
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="eyebrow">SANDE ELECTRONIC 2.0</p>

              <h1>
                Quality Electronics.
                <br />
                <span>Smart Shopping.</span>
              </h1>

              <p className="hero-text">
                Discover electronics, compare products, request items that
                are not in stock, and shop with confidence in Rwanda.
              </p>

              <div className="hero-buttons">
                <a href="#products" className="primary-button">
                  Shop Now →
                </a>

                <a href="#request" className="secondary-button">
                  Request Product
                </a>
              </div>

              <div className="trust-row">
                <span>✓ Quality Products</span>
                <span>✓ Rwanda Delivery</span>
                <span>✓ Trusted Service</span>
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-card-top">
                <span>FEATURED</span>
                <span>NEW</span>
              </div>

              <div className="hero-product-icon">📱</div>

              <h2>Smart Electronics</h2>

              <p>
                Phones, laptops, audio, TVs, accessories and more.
              </p>

              <a href="#products" className="hero-card-link">
                Explore products →
              </a>
            </div>
          </div>
        </section>

        {/* SEARCH */}
        <section className="search-section">
          <div className="container">
            <div className="search-box">
              <span>🔎</span>

              <input
                type="search"
                placeholder="Search products, brands or categories..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {search && (
                <button onClick={() => setSearch("")}>Clear</button>
              )}
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="categories-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-label">EXPLORE</p>
                <h2>Shop by Category</h2>
              </div>
            </div>

            <div className="category-grid">
              <button
                className={`category-card ${
                  selectedCategory === "All" ? "active" : ""
                }`}
                onClick={() => setSelectedCategory("All")}
              >
                <span>⚡</span>
                <strong>All Products</strong>
              </button>

              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`category-card ${
                    selectedCategory === category.name ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <span>{category.icon}</span>
                  <strong>{category.name}</strong>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* DEALS */}
        <section className="deal-banner" id="deals">
          <div className="container deal-content">
            <div>
              <p className="section-label">LIMITED DEALS</p>
              <h2>Smart Deals. Better Prices.</h2>
              <p>
                Find selected electronics at special promotional prices.
              </p>
            </div>

            <a href="#products" className="primary-button">
              View Deals →
            </a>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="products-section" id="products">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-label">OUR PRODUCTS</p>
                <h2>Featured Electronics</h2>
                <p>
                  Browse our available products and open any product for
                  more details.
                </p>
              </div>

              <span className="product-result">
                {filteredProducts.length} products
              </span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="empty-state">
                <div>🔎</div>
                <h3>No products found</h3>
                <p>Try another product name or category.</p>

                <button
                  className="primary-button"
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("All");
                  }}
                >
                  Show All Products
                </button>
              </div>
            ) : (
              <div className="product-grid">
                {filteredProducts.map((product) => (
                  <article className="product-card" key={product.id}>
                    <div className="product-image">
                      <span className="product-badge">{product.badge}</span>

                      <button
                        className="wishlist-button"
                        onClick={() => toggleWishlist(product.id)}
                        aria-label="Add to wishlist"
                      >
                        {wishlist.includes(product.id) ? "♥" : "♡"}
                      </button>

                      <span className="product-icon">{product.icon}</span>
                    </div>

                    <div className="product-info">
                      <p className="product-category">
                        {product.category}
                      </p>

                      <h3>{product.name}</h3>

                      <p className="product-description">
                        {product.description}
                      </p>

                      <div className="price-row">
                        <strong>{formatPrice(product.price)}</strong>
                        <del>{formatPrice(product.oldPrice)}</del>
                      </div>

                      <div className="product-actions">
                        <button
                          className="details-button"
                          onClick={() => setSelectedProduct(product)}
                        >
                          Details
                        </button>

                        <button
                          className="add-button"
                          onClick={() => addToCart(product)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* REQUEST PRODUCT */}
        <section className="request-section" id="request">
          <div className="container request-grid">
            <div>
              <p className="section-label">NOT IN STOCK?</p>

              <h2>
                Request the product
                <br />
                you are looking for.
              </h2>

              <p>
                If you cannot find what you need, send us a product request.
                We can check availability and provide an offer.
              </p>

              <div className="request-points">
                <span>✓ Product / model</span>
                <span>✓ Preferred brand</span>
                <span>✓ Quantity</span>
                <span>✓ Delivery location</span>
              </div>
            </div>

            <div className="request-card">
              <h3>Request a Product</h3>

              <input
                type="text"
                placeholder="Product name or model"
              />

              <input
                type="text"
                placeholder="Your phone number"
              />

              <textarea
                placeholder="Tell us what you need..."
                rows="4"
              />

              <button className="primary-button">
                Send Request →
              </button>
            </div>
          </div>
        </section>

        {/* ACCOUNT PREVIEW */}
        <section className="account-section" id="account">
          <div className="container account-card">
            <div>
              <p className="section-label">YOUR ACCOUNT</p>
              <h2>Everything in one place.</h2>
              <p>
                Customer accounts will manage orders, requests, wishlist,
                addresses and order tracking.
              </p>
            </div>

            <button className="secondary-button">
              Create Account
            </button>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <div>
              <p className="section-label">CONTACT</p>
              <h2>Need help?</h2>
              <p>
                Contact SANDE ELECTRONIC for product questions, requests,
                orders and customer support.
              </p>
            </div>

            <div className="contact-actions">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-button"
              >
                WhatsApp Support
              </a>

              <a href="mailto:info@sandeelectronic.com">
                info@sandeelectronic.com
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="logo">
              SANDE <span>ELECTRONIC</span>
            </div>

            <p>
              Quality Electronics. Smart Shopping. Trusted Service.
            </p>
          </div>

          <div>
            <h4>Shop</h4>
            <a href="#products">Products</a>
            <a href="#deals">Deals</a>
            <a href="#request">Request Product</a>
          </div>

          <div>
            <h4>Support</h4>
            <a href="#contact">Contact</a>
            <a href="#account">Account</a>
          </div>
        </div>

        <div className="container copyright">
          © {new Date().getFullYear()} SANDE ELECTRONIC. All rights reserved.
        </div>
      </footer>

      {/* PRODUCT DETAILS MODAL */}
      {selectedProduct && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="product-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>

            <div className="modal-product-icon">
              {selectedProduct.icon}
            </div>

            <p className="product-category">
              {selectedProduct.category}
            </p>

            <h2>{selectedProduct.name}</h2>

            <p>{selectedProduct.description}</p>

            <div className="modal-price">
              {formatPrice(selectedProduct.price)}
            </div>

            <div className="modal-buttons">
              <button
                className="primary-button"
                onClick={() => {
                  addToCart(selectedProduct);
                  setSelectedProduct(null);
                }}
              >
                Add to Cart
              </button>

              <button
                className="secondary-button"
                onClick={() => setSelectedProduct(null)}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CART DRAWER */}
      {showCart && (
        <div
          className="modal-overlay"
          onClick={() => setShowCart(false)}
        >
          <aside
            className="cart-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cart-header">
              <h2>Your Cart</h2>

              <button onClick={() => setShowCart(false)}>×</button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <div>🛒</div>
                <h3>Your cart is empty</h3>
                <p>Add products to start shopping.</p>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((product, index) => (
                    <div className="cart-item" key={`${product.id}-${index}`}>
                      <span className="cart-item-icon">
                        {product.icon}
                      </span>

                      <div>
                        <strong>{product.name}</strong>
                        <p>{formatPrice(product.price)}</p>
                      </div>

                      <button
                        onClick={() => removeFromCart(index)}
                        aria-label="Remove item"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>

                <div className="cart-summary">
                  <span>Total</span>
                  <strong>{formatPrice(cartTotal)}</strong>
                </div>

                <button className="primary-button checkout-button">
                  Checkout →
                </button>
              </>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}
