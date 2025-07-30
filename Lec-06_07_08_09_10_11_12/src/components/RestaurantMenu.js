import { RESTAURANT_INFO } from "../utils/constants";
import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {

    const[resData,setResData]=useState([])

    useEffect(() => {
            setResData(RESTAURANT_INFO)
    },[])

    const {resId} = useParams();
    //params is an object which consists of resId is a property
    //the destructured variable name should be same as that of provided in the dynamic routing


   if(resData.length === 0)
   return <Shimmer />

   if(resId >= resData.length || resId <= 0 ) return <h1> The ResID mentioned is out of the defined limit as a result it's Error </h1>;

   const{resName,address,menu} = resData[resId - 1] ;
   // to make it compatible with the indices of array
   

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl"> {resName} </h1>
            <h2 className="font-bold text-lg"> {address} </h2>

            {/* categories */} 
            <h3 className="my-3">MENU ITEMS :</h3>
            <ul>
            {
                menu.map((item) => {
                  return <li key={item.itemId} className="my-4 text-center"> {item.itemName} - Rs.{item.price} </li>

                } )
            }
            </ul>



        
           
        </div>
    )

}

export default RestaurantMenu;

