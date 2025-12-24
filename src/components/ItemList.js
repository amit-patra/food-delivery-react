import {CDN_URL} from "../utils/constants"
import { useDispatch } from "react-redux";
import {addCart} from "../utils/cartSlice";
const ItemList = ({ itemCards }) => {
    const dispatch = useDispatch();
    const handleClick = (item)=>{
       dispatch(addCart(item))
    }

  return (

    <div className="m-2 p-2 flex border-b-2 border-gray-200">
        <div className="w-9/12">
          <h1>{itemCards?.card?.info?.name} - ₹{itemCards?.card?.info?.price/100}</h1>
          <h1 className="text-sm">{itemCards?.card?.info?.description}</h1>
        </div>

        <div className="w-3/12 flex justify-end">
        <img className="h-20 w-50 rounded-b-sm" src={CDN_URL + itemCards?.card?.info?.imageId} />
        <button className="absolute p-2.5 bg-black rounded-sm text-white cursor-pointer" onClick={()=>handleClick(itemCards)}>Add +</button>
        </div>

    </div>
  );
};

export default ItemList;
