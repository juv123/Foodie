import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({category, toggle, setShowIndex})=>  {
 //const [toggle,setToggle]=useState(false);
 const handleClick=()=>{
  setShowIndex();
 };
  return <div>
    {/* Accordion header*/}
    <div className="w-9/12 mx-auto my-auto bg-slate-50 h-full shadow-lg p-5 flex flex-wrap">
          <span className="font-bold text-lg">{category.title}({category.itemCards.length})</span>
         
                  <span> <svg
  className="IconDropdown text-base text-black cursor-pointer my-2"
  width="12"
  height="10"
  viewBox="0 0 15 8"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
  focusable="false" onClick={handleClick}
>
  <path
    d="M.343 2L1.757.586 6 4.828 10.243.586 11.657 2 6 7.657.343 2z"
    fill="currentColor"
  />
</svg>

</span>
    {/*Accordion body */}
    {toggle && <ItemList data={category.itemCards} />
}
</div>





    </div>
  }
export default RestaurantCategory;