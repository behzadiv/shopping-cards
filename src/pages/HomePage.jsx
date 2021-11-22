import Layout from "../Layout/layout";
import * as data from "../data"
import "./HomePage.css"
import { useCartActions } from "../provider/CartProvider";

const HomePage = () => {
    const dispatch = useCartActions()
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
                    <button onClick={()=>dispatch({type:"ADD_TO_CART",payload:product})} className="btn primary">Add</button>
                </div>
            </section>    
            )}
        </main>
        
     );
}
 
export default HomePage;
