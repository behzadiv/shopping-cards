import Layout from "../Layout/layout";
import "./HomePage.css"

const HomePage = () => {
    const addProductHandler =(product)=>{
        console.log(product)
    }
    return ( 
        <main className="productList container">
            {data.products.map((product)=>
            <section className="product">
                <div className="productImg">
                    <img src={product.image} alt={product.name}/>
                </div>
                <div className="productDesc">
                    <h4>{product.name}</h4>
                    <p> $ {product.price}</p>
                    <button onClick={()=>addProductHandler(product)} className="btn primary">Add</button>
                </div>
            </section>    
            )}
        </main>
        
     );
}
 
export default HomePage;
