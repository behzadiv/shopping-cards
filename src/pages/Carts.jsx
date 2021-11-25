import { useCart, useCartActions } from "../provider/CartProvider";
import "./Carts.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Carts = () => {
  const carts = useCart();
  const dispatch = useCartActions();
  
  //console.log(carts.cart);
  //let totalPrice = 0;
  //carts.cart.map((item) => (totalPrice += item.price * item.quantity));
  if (!carts.cart.length) return <p>There is no product in your carts</p>;
  return (
    <main className="cart container">
      <section className="cartList">
        <div className="cartTitle">
          <h5>Product</h5>
          <h5>Price</h5>
          <h5>Quantity</h5>
          <h5>Total</h5>
        </div>
        {carts.cart.map((product) => (
          <section  key={product.id}>
            <div className="cartRow">
              <div className="cartName">
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
              </div>
              <div>
                <p>$ {product.price}</p>
              </div>
              <div className="cartBtn">
                <button className="cartBtn" onClick={()=>dispatch({type:"ADD_TO_CART",payload:product})}>+</button>
                <p className="cartQty">{product.quantity}</p>
                <button className="cartBtn" onClick={()=>dispatch({type:"DECREMENT_CART_QTY",payload:product})}>{product.quantity >1 ? "-" : <FontAwesomeIcon icon={faTrashAlt} className="trash" />}</button>
              </div>
              <div>
                <p> $ {product.price * product.quantity}</p>
              </div>
            </div>
          </section>
        ))}
      </section>

      <section className="totalSection">
        <div >
          <h2>Total Price : $ {carts.total}</h2>
          
        </div>
      </section>
    </main>
  );
};

export default Carts;
