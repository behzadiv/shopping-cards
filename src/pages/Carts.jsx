import { useCart, useCartActions } from "../provider/CartProvider";
import "./Carts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Carts = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();

  //console.log(carts.cart);
  //let totalPrice = 0;
  //carts.cart.map((item) => (totalPrice += item.price * item.quantity));
  if (!cart.length) return <p>There is no product in your carts</p>;
  return (
    <main className="cart container">
      <section className="cartList">
        <div className="cartTitle">
          <h5>Product</h5>
          <h5>Price</h5>
          <h5>Quantity</h5>
          <h5>Total</h5>
        </div>
        {cart.map((product) => (
          <section key={product.id}>
            <div className="cartRow">
              <div className="cartName">
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
              </div>
              <div>
                <p>$ {product.price}</p>
              </div>
              <div className="cartBtn">
                <button
                  className="cartBtn"
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payload: product })
                  }
                >
                  +
                </button>
                <p className="cartQty">{product.quantity}</p>
                <button
                  className="cartBtn"
                  onClick={() =>
                    dispatch({ type: "DECREMENT_CART_QTY", payload: product })
                  }
                >
                  {product.quantity > 1 ? (
                    "-"
                  ) : (
                    <FontAwesomeIcon icon={faTrashAlt} className="trash" />
                  )}
                </button>
              </div>
              <div>
                <p> $ {product.price * product.quantity}</p>
              </div>
            </div>
          </section>
        ))}
      </section>

      <SummuryCart cart={cart} total={total} />
    </main>
  );
};

export default Carts;

const SummuryCart = ({ cart, total }) => {
  const originalTotalPrice = cart.reduce((acc,curr)=> acc + curr.price * curr.quantity ,0)
  console.log(cart,originalTotalPrice);
  return (
    <section className="totalSection">
        <h3>Cart summury : </h3>
        <div>
          <p>Original total price</p>
          <p>{originalTotalPrice} $</p>
        </div>
        <div>
          <p>Discount cart</p>
          <p>{originalTotalPrice - total} $</p>
        </div>
        <div>
          <p>Net total price</p>
          <p>{total} $</p>
        </div>
    </section>
  );
};
