const products = [
  {
    id: 1,
    name: "Bluetooth Speaker",
    price: 25000,
    icon: "🔊",
  },
  {
    id: 2,
    name: "Phone Charger",
    price: 8000,
    icon: "🔌",
  },
  {
    id: 3,
    name: "USB Cable",
    price: 5000,
    icon: "🔗",
  },
  {
    id: 4,
    name: "Earphones",
    price: 12000,
    icon: "🎧",
  },
  {
    id: 5,
    name: "Power Bank",
    price: 30000,
    icon: "🔋",
  },
  {
    id: 6,
    name: "LED Bulb",
    price: 7000,
    icon: "💡",
  },
];

function money(value) {
  return new Intl.NumberFormat("en-RW").format(value) + " RWF";
}

export default function Home() {
  return (
    <main>

      {/* HEADER */}
      <header className="header">
        <div className="container nav">

          <div className="logo">
            SANDE <span>ELECTRONIC</span>
          </div>

          <nav>
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <button className="cart">
            🛒 Cart <b>0</b>
          </button>

        </div>
      </header>


      {/* HOME */}
      <section id="home" className="hero">
        <div className="container hero-grid">

          <div>

            <p className="tag">
              ELECTRONICS • RWANDA
            </p>

            <h1>
              Smart electronics.
              <br />
              <span>Simple shopping.</span>
            </h1>

            <p className="hero-text">
              Welcome to SANDE ELECTRONIC.
              Find useful electronic products at
              affordable prices from anywhere in Rwanda.
            </p>

            <a className="btn" href="#products">
              Shop products →
            </a>

          </div>


          <div className="hero-card">

            <div className="hero-icon">
              ⚡
            </div>

            <h2>
              SANDE
            </h2>

            <p>
              Quality electronics
            </p>

          </div>

        </div>
      </section>


      {/* PRODUCTS */}
      <section id="products" className="products container">

        <div className="section-head">

          <div>

            <p className="tag">
              OUR PRODUCTS
            </p>

            <h2>
              Popular electronics
            </h2>

          </div>

          <p>
            More products can be added later.
          </p>

        </div>


        <div className="grid">

          {products.map((product) => (

            <article
              className="product"
              key={product.id}
            >

              <div className="product-image">
                {product.icon}
              </div>

              <div className="product-info">

                <h3>
                  {product.name}
                </h3>

                <strong>
                  {money(product.price)}
                </strong>

                <button className="add">
                  Add to cart
                </button>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ABOUT */}
      <section id="about" className="about">

        <div className="container about-grid">

          <div>

            <p className="tag">
              ABOUT SANDE
            </p>

            <h2>
              Electronics made easy.
            </h2>

          </div>

          <p>
            SANDE ELECTRONIC is an online shop
            for selling electronics in Rwanda.
            Products, orders, payment and an
            admin dashboard will be added step
            by step.
          </p>

        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="contact container">

        <p className="tag">
          CONTACT
        </p>

        <h2>
          Need an electronic product?
        </h2>

        <p>
          Contact SANDE ELECTRONIC for prices,
          availability and orders.
        </p>

        <a
          className="btn dark"
          href="tel:+250790912969"
        >
          Call 0790 912 969
        </a>

      </section>


      {/* FOOTER */}
      <footer>

        <div className="container footer-inner">

          <b>
            SANDE ELECTRONIC
          </b>

          <span>
            © 2026 SANDE ELECTRONIC.
            All rights reserved.
          </span>

        </div>

      </footer>

    </main>
  );
}
