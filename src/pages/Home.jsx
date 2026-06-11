import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-left">
          <span className="hero-badge">
            🍔 Best Restaurant In Town
          </span>

          <h1>
            Delicious Food
            <br />
            Delivered To
            <span> Your Door</span>
          </h1>

          <p>
            Discover hundreds of freshly prepared meals, desserts,
            drinks and exclusive restaurant specials.
          </p>

          <div className="hero-buttons">
            <Link to="/foods" className="primary-btn">
              Order Now
            </Link>

            <Link to="/register" className="secondary-btn">
              Create Account
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
            alt="Food"
          />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories-section">
        <h2>Browse Categories</h2>

        <div className="categories-grid">
          <div className="category-card">🍕 Pizza</div>
          <div className="category-card">🍔 Burgers</div>
          <div className="category-card">🍜 Noodles</div>
          <div className="category-card">🍹 Drinks</div>
          <div className="category-card">🍰 Desserts</div>
          <div className="category-card">🍗 Chicken</div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why-us">
        <h2>Why Choose Us</h2>

        <div className="why-grid">
          <div className="why-card">
            🚚
            <h3>Fast Delivery</h3>
            <p>Quick delivery directly to your doorstep.</p>
          </div>

          <div className="why-card">
            🍽️
            <h3>Fresh Food</h3>
            <p>Prepared with high-quality ingredients.</p>
          </div>

          <div className="why-card">
            ⭐
            <h3>Top Rated</h3>
            <p>Trusted by thousands of happy customers.</p>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="offer-banner">
        <h2>Get 20% Off Your First Order</h2>
        <p>Register today and enjoy exclusive discounts.</p>

        <Link to="/register" className="primary-btn">
          Claim Offer
        </Link>
      </section>

      {/* TESTIMONIALS */}
      <section className="reviews-section">
        <h2>What Customers Say</h2>

        <div className="reviews-grid">
          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <p>
              Amazing food and super fast delivery. Highly recommended.
            </p>
          </div>

          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <p>
              The ordering experience is smooth and the food tastes great.
            </p>
          </div>

          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <p>
              Excellent service and fresh meals every time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;