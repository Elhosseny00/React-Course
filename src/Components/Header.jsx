import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container">
      <nav className="d-flex">
        <div className="d-flex">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="d-flex">
          <Link
            to="/register"
            style={{ textAlign: "center" }}
            className="register-nav"
          >
            Register
          </Link>
          <Link
            to="/login"
            style={{ textAlign: "center" }}
            className="register-nav"
          >
            Log in
          </Link>
        </div>
      </nav>
    </div>
  );
}
