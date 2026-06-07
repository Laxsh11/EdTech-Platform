import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <h1>Learn Skills That Build Your Future</h1>

      <p>
        Master Web Development, AI, Digital Marketing,
        Cloud Computing and Entrepreneurship.
      </p>

      <div className="hero-buttons">
        <Link to="/courses">
            <button>Explore Courses</button>
        </Link>
        <Link to="/register">
            <button>Get Started</button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;