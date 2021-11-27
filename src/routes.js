import Cards from "./pages/Carts";
import Checkout from "./pages/Checkout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const routes = [
    {path:"/signup",element:<Signup/> },
    {path:"/login",element:<Login/> },
    {path:"/checkout",element:<Checkout/> },
    {path:"/cards",element:<Cards/>},
    {path:"/",element:<HomePage/> },
    
]
export default routes;