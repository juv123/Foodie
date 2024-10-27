import { CDN_URL, RATING_STAR } from "../config/constants";
import { useContext } from "react";
import UserContext from "../config/userContexts";
import React from "react";
import { motion } from "framer-motion";
const RestoCard = ({ resData }) => {
  return (
      <div className="border p-4 rounded-lg shadow-md h-full flex flex-col bg-gray-300 hover:bg-red-600 ">
          <motion.img className="object-cover w-full h-48" src={CDN_URL + resData?.info.cloudinaryImageId} alt={resData.info.name} whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}/>
          <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg truncate font-black">{resData?.info.name}</h2>
              <p className="text-lg text-white truncate font-bold italic">
                  {Array.isArray(resData?.info.cuisines) && resData?.info.cuisines.length > 0
                      ? resData.info.cuisines.join(', ')
                      : 'No cuisine available'}
              </p>
              <p className="text-lg text-white"><img className="w-6" src={RATING_STAR} alt="rating"/> {resData?.info.avgRating}</p>
          </div>
      </div>
  );
};


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