import { NavLink } from "react-router-dom"
import { useCart } from "../../provider/CartProvider";
import "./Navigation.css"
const Navigation = () => {
    const {cart} = useCart()
    console.log(cart);
    return ( 
        <header className="mainNavigation">
            <nav>
            <ul>
                <li><NavLink to="/" className={(navData)=> navData.isActive? "activeLink" : ""} exact>Home</NavLink></li>
                <li><NavLink to="/cards" className={(navData)=> navData.isActive? "activeLink" : ""}>Cards<span className="basket">{cart.length}</span></NavLink></li>
            </ul>
        </nav>
        </header>
     );
}
 
export default Navigation;