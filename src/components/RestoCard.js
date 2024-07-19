import { CDN_URL } from "../config/constants";
import { useContext } from "react";
import UserContext from "../config/userContexts";
const RestoCard =(props)=>{ 
 
     //and const {image,name,cuisine,rating}=props;
    //or  const RestoCard =({image,name,cuisine,rating})=>{
      const user1=useContext(UserContext);
    const { resData }=props;
    //console.log(resData);
    const { name: restaurantName, cuisines: cuisine, areaName:areaName,locality:locality,avgRating: starRating, cloudinaryImageId: restaurantImage, costForTwo} = resData?.info;
    const {deliveryTime}=resData?.info?.sla;
     //console.log(resData?.info);
          return (
          <div 
          data-testid="searchCard"
          className="p-5 border-2 m-5 w-72 overflow-hidden h-screen rounded-lg hover:bg-green-300"
          >
           <img className="w-40 rounded-lg" src={CDN_URL + restaurantImage} />
         <h3 className="font-bold">{restaurantName}</h3>
         <h4 className="text-left">{areaName} {locality}</h4>
        <h4 className="italic">{cuisine.join(",")}</h4>
        <h4>Rs.{costForTwo}</h4> 
        <h4 className="font-bold">{starRating} stars</h4>
        <h4>{deliveryTime} minutes</h4>
      {/* <h4>Edited by {user1}</h4> */}
        
      </div>
        
     );
     
 }
 export default RestoCard; 
 export const Recommended = (RestoCard)=>{
  return (props)=>{


return(
 <>
<label className="absolute m-11 bg-black text-white rounded">Recommended</label>
<RestoCard {...props}/>
 </>

 );
}

 }
 export const Promoted = (RestoCard)=>{
  return (props)=>{


return(
 <>
<label className="absolute m-10 bg-black text-white rounded">Promoted</label>
<RestoCard {...props}/>
 </>

 );
}

 }