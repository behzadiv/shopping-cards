const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(action, state);
      //console.log(state.total);
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
        } else {
        const selectedCart = { ...updatedCart[updatedItemIndex] };
        selectedCart.quantity++;
        updatedCart[updatedItemIndex] = selectedCart;
      }
      return { ...state, cart: updatedCart , total:state.total + action.payload.price };
      break;
    
    case "DECREMENT_CART_QTY": {
      const updatedCart = [...state.cart];
      let totalPrice = state.total
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if(action.payload.quantity>1){
        const selectedCart = { ...updatedCart[updatedItemIndex] };
        selectedCart.quantity--;
        updatedCart[updatedItemIndex] = selectedCart;
        return { ...state, cart: updatedCart,total:state.total -action.payload.price }
      }else{
        const filteredCarts = updatedCart.filter((cart)=>cart.id !==action.payload.id)
        console.log(filteredCarts);
        return { ...state, cart: filteredCarts,total:state.total -action.payload.price  }
    }
      ;
    }
    default:
      break;
  }
};

export default cartReducer;
