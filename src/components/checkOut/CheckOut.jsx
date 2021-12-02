import { useAuth } from "../../provider/AuthProvider";
import { useCart, useCartActions } from "../../provider/CartProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./CheckOut.css";
const CheckOut = () => {
  const { name, email, phoneNumber } = useAuth();
  const { cart, total } = useCart();

  //console.log(carts);
  return (
    <div className="container">
      <div className="checkOut">
        <section className="userData">
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Phone: {phoneNumber}</p>
        </section>
        <section className="checkoutCarts">
          <h4>Your Bills:</h4>
          {cart.map((c) => {
            return (
              <div className="myBill">
                {c.name} * {c.quantity} = $ {c.quantity * c.offPrice}
              </div>
            );
          })}
          <hr/>
          <h3 style={{textAlign:"right"}}>$ {total}</h3>
          <button className="btn primary" style={{width:"100%"}}>Pay by credit card</button>
        </section>
      </div>
    </div>
  );
};

export default CheckOut;
