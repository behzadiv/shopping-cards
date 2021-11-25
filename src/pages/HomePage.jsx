import Layout from "../Layout/layout";
import * as data from "../data"
import "./HomePage.css"
import { useCart, useCartActions } from "../provider/CartProvider";
import { NavLink } from "react-router-dom"
import { checkInCart } from "../utils/CheckInCart";
import { toast } from 'react-toastify';

const HomePage = () => {
    const {cart}=useCart()
    const dispatch = useCartActions()
    const addHandler=(product)=>{
        toast.success(`${product.name} added to cart!`)
        dispatch({type:"ADD_TO_CART",payload:product})
    }
    return ( 
        <main className="productList container">
            {data.products.map((product)=>
            <section className="product" key={product.id}>
                <div className="productImg">
                    <img src={product.image} alt={product.name}/>
                </div>
                <div className="productDesc">
                    <h4>{product.name}</h4>
                    <p> $ {product.price}</p>
                    <button onClick={()=>addHandler(product)} className="btn primary">{checkInCart(cart ,product)? "Cart in":"Add to cart"}</button>
                </div>
            </section>    
            )}
        </main>
        
     );
}
 
export default HomePage;
