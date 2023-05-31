import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section id="home">
      <h1>Home</h1>
      <ul className="flex gap-3">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </section>
  );
};

export default Home;
