import { useSelector,useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../config/cartSlice";
const Cart = ()=>{
    //subscribing store using selector
    const dispatch=useDispatch();
    const cartItems=useSelector((store) => store.cart.items);
    const handleClearCart=()=>{
       dispatch(clearCart());
             }
    
        return( 
    <div className="text-center m-5 p-5 font-bold">
        <h1>Cart</h1>
        {cartItems.length!==0 &&  <button className="rounded-lg bg-black font-bold text-white text-sm" onClick={handleClearCart}>Clear Cart</button>}
       
        <div>
            {cartItems.length==0 && <h1>Cart is Empty!</h1>}
        <ItemList data={cartItems} />   
        </div>
        </div>
    )
}
export default Cart;
