import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import {clearCart} from "../utils/cartSlice";

const Cart = () => {
  const cartList = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClick = ()=> {
    dispatch(clearCart());
  }
  return (
    <div className="text-center w-1/2 mx-auto shadow-lg rounded-1xl m-2">
      <h1 className="font-bold mt-3">Cart List</h1>
      <button className="p-2.5 mt-3 bg-black rounded-sm text-white cursor-pointer" onClick={handleClick}>Clear Cart</button>
      <div className="w-full p-2 mt-1">
        
        {cartList.length? cartList.map((item, index) => (
          <ItemList key={index} itemCards={item} />
        )): <h1 className="text-center font-bold">Cart is Empty, Please Add some Items...!</h1>}
      </div>
    </div>
  );
};

export default Cart;
