
const cartReducer = (state, action) => {
                switch (action.type) {
                case "ADD_TO_CART":
                    console.log(action,state);
                    const updatedCart = [...state.cart]
                    const updatedItemIndex = updatedCart.findIndex((item)=>item.id ===action.payload.id)
                    if(updatedItemIndex < 0){
                       updatedCart.push({...action.payload,quantity:1})
                       console.log(updatedCart);
                    }
                    else{
                        const selectedCart={...updatedCart[updatedItemIndex]}
                        selectedCart.quantity ++
                        updatedCart[updatedItemIndex]=selectedCart
                    }
                    return{...state , cart : updatedCart}
                    break;
                    
                    default:
                        break;
                    }
                    
                }


 
export default cartReducer;