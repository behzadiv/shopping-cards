import { NavLink } from "react-router-dom";
import { useAuth } from "../../provider/AuthProvider";
import { useCart } from "../../provider/CartProvider";
import "./Navigation.css";
const Navigation = () => {
  const { cart } = useCart();
  const userData= useAuth()
  console.log(userData);
  return (
    <header >
      <nav className="mainNavigation">
        <ul>
          <h5>Behzad Shopping</h5>
          <li>
            <NavLink
              to="/"
              className={(navData) => (navData.isActive ? "activeLink" : "")}
            >
              Home
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink
              to="/carts"
              className={(navData) => (navData.isActive ? "activeLink" : "")}
            >
              Cards<span className="basket">{cart.length}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={!userData? "/login" :"/profile"}>{!userData? "login / signup" : "profile"}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
