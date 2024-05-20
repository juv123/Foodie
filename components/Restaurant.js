import Shimmer from "./Shimmer";
import { useParams }  from "react-router-dom";
import { MENU_IMG } from "../config/constants";
import useRestaurantMenu from "../config/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const Restaurant=()=>{
const { resId }=useParams();
//const [toggle,setToggle]=useState(0);
const [showIndex,setShowIndex]=useState(null);
//console.log(resId)
//using custom hooks to make modular/single responsibility:-separate fetch & display.
   const restaurantInfo=useRestaurantMenu(resId);
    if(restaurantInfo==null) return <Shimmer />;
   // console.log(restaurantInfo)
    const { cuisines,name,areaName,avgRating,locality,city,costForTwoMessage:price,cloudinaryImageId }=restaurantInfo?.cards[2]?.card?.card?.info??{};
    const {slaString:deliveryTime}=restaurantInfo?.cards[2]?.card?.card?.info?.sla??{};
    const { itemCards }=restaurantInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card??{};
      //const {itemCards}=restaurantInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards??{};
   //console.log(restaurantInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  // data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
  
   const categories  = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=> c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    
   );
 
    
    return(
        <div data-testid="restaurantCategory" className="text-center">
       <h2 className="font-semibold text-xl px-60 pb-2">{name}</h2>
        <h3 className="italic px-60 pb-2">{cuisines && cuisines.join(",") +"-"+ price && price}</h3>
        <h3 className="px-60 pb-2">{areaName} </h3>
        <p className="border-2 w-[5%] mx-auto px-2">{avgRating}</p>
             
            {categories?.map((category,index) => 
            //controlled component
            (
                <RestaurantCategory key={category.card.card.title} toggle={index === showIndex ? true : false} setShowIndex={()=>setShowIndex(showIndex===index?null:index)}  category={category.card.card} />
            ))}
        </div>
    );
};
export default Restaurant;