import { NavLink } from "react-router-dom"
import "./Navigation.css"
const Navigation = () => {
    return ( 
        <header className="mainNavigation">
            <nav>
            <ul>
                <li><NavLink to="/" className={(navData)=> navData.isActive? "activeLink" : ""} exact>Home</NavLink></li>
                <li><NavLink to="/cards" className={(navData)=> navData.isActive? "activeLink" : ""}>Cards</NavLink></li>
            </ul>
        </nav>
        </header>
     );
}
 
export default Navigation;