import Carts from "./pages/Carts";
import Checkout from "./pages/Checkout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const routes = [
    {path:"/signup",element:<Signup/> },
    {path:"/login",element:<Login/> },
    {path:"/checkout",element:<Checkout/> },
    {path:"/carts",element:<Carts/>},
    {path:"/",element:<HomePage/> },
    
]
export default routes;