import { useDispatch } from "react-redux";
import { CDN_URL } from "../config/constants";
import { addItem, removeItem } from "../config/cartSlice";
const dataList=({data}) =>{
  const dispatch=useDispatch();
  const handleAddItem=(item)=>{
    //dispatch an action
    dispatch(addItem(item));
  }
  const handleRemoveItem=(index)=>{
    //dispatch an action
    dispatch(removeItem(index));
  }
    return(
        <div>
       {data.map((data,index)=>(
         <ul key={index}>
        <div data-testid="foodItems" className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between hover:bg-blue-300">
        <div className="w-9/12">
            <div className="py-2">
            <li className="font-bold text-center">{data.card.info.name}</li>
            <span className="font-bold text-center">
                - ₹
                {data.card.info.price
                  ? (data.card.info.price / 100)
                  : (data.card.info.defaultPrice / 100)}
              </span>
            </div>
            <li className="italic text-left">{data.card.info.description}</li>
            </div>
             <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-6 my-14 rounded-lg bg-white font-bold text-green-700" onClick={()=>handleAddItem(data)}>
                 +
              </button>
              <button
                className="p-2 mx-6 my-14 rounded-lg bg-white font-bold text-green-700" onClick={()=>handleRemoveItem(index)}>
                -
              </button>
            </div>
          
            <div className="mx-auto my-auto right-0 w-32 ">
            <img src={CDN_URL+data.card.info.imageId}  alt={data.card.info.name} />
            </div>
           
        
        </div>
        </div>
        </ul>
       
       ))}
    </div>
    )
}
export default dataList;