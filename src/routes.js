import Cards from "./pages/Carts";
import Checkout from "./pages/Checkout";
import HomePage from "./pages/HomePage";

const routes = [
    {path:"/checkout",element:<Checkout/> },
    {path:"/cards",element:<Cards/>},
    {path:"/",element:<HomePage/> },
    
]
export default routes;