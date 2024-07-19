
import RestoCard, { Promoted } from "./RestoCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../config/useOnlineStatus";
import { Recommended } from "./RestoCard";
//import { useContext } from "react";
import UserContext from "../config/userContexts";
const Body =()=>{
  //using hooks:-useState()
   //const [listofRestaurants,setRestaurantList] =useState(swiggyRestaurantList.card.gridElements.infoWithStyle.restaurants);
      const [listofRestaurants,setRestaurantList] =useState(null);
   const [filteredListofRestuarants,setFilteredList]=useState([]);
   const [searchText,searchResturant]=useState("");
   const onlineStatus=useOnlineStatus();
   const [user,setUserName]=useState("User");
    const RecommendedComponent=Recommended(RestoCard);//higher order component
    const PromotedComponent=Promoted(RestoCard);//higher order component
       //console.log(listofRestaurants.length)
    useEffect(()=>{
      fetchData();
    },[]);
    //console.log('component rendered');//after component rendered only the use effect call back function called.
    const fetchData = async ()=>{
     const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
     const json=await data.json();
       
     setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      //console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
           
    }
   
    
    if(listofRestaurants===null){
        return <Shimmer />
     
      }
     
    //console.log(listofRestaurants);
    return(
      <div className="body">
      <div className="p-5 w-[80%] flex">
      <label className="p-4">Search:</label>
    <input type="search" data-testid="searchInput" id="site-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:border-y-amber-500 p-5" placeholder="Enter Restaurant name" value={searchText} name="q" onChange={(e)=>searchResturant(e.target.value)}/>

    <button type="button" className="bg-gray-300 text-white-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-4 mb-2" onClick={()=>{
       const filteredList=listofRestaurants?.filter((res)=>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    //console.log(filteredList)
    setFilteredList(filteredList);
   }}>Search</button>
   {/*<div>
   <input type="text" className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 h-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:border-y-amber-500 p-5" value={user} onChange={(e)=>setUserName(e.target.value)}/>
   </div>
   */}
    </div>
    <div className="flex items-center justify-center">
    <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm  py-2.5 text-center w-60 mb-5" onClick={()=>{ 
      const filteredList=listofRestaurants?.filter((res)=> res.info.avgRating > 4.1
    );
   // console.log(filteredList);
    setFilteredList(filteredList);
  }}>Top Rated Restaurants</button> 
 {/* <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-5 ml-5 w-50" onClick={()=>{ 
      const filteredList=listofRestaurants?.filter((res)=>{var numb = res.info.costForTwo.match(/\d/g);
      numb = numb.join("");
      return numb < 250
  }
    );
    //console.log(filteredList);
     setFilteredList(filteredList);
  }}>price less than 250</button> */}
  </div>
         
   
  
      <div className="flex flex-wrap bg-zinc-100 my-auto mx-9 py-2">
    <UserContext.Provider value={user}>
     { onlineStatus?(filteredListofRestuarants?.map((restaurant) => <Link key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}> {restaurant.info.promoted===true ? <PromotedComponent key={restaurant?.info.id} resData={restaurant} />:<RestoCard  key={restaurant?.info.id} resData={restaurant} user={user} />}</Link>))
            :<h1>Looks Like you are Offline!</h1>
 
          
         
      }
      </UserContext.Provider>
               </div>
       

        
     
      </div>
  )

}
export default Body;