import Cards from "./pages/Cards";
import HomePage from "./pages/HomePage";

const routes = [
    {path:"/cards",element:<Cards/>},
    {path:"/",element:<HomePage/>,exact:true},
    
]
export default routes;