import ResCardComponent,{withPromotedLabel} from "./ResCardComponent";
//over here i imported withPromotedLabel function
import {CARD_API} from '../utils/constants';
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

let demo = [...CARD_API];
//creating a card API demo/copy by spread operator


const Body = ()=>{
    
    // console.log('body is been rendered')
    const [listOfRestaurant,setListOfRestaurant] = useState([])
    
    //creating useState hook that is local state variable
    //for a sake u can also empty the useState like []
    //after the api call it would be filled and rendered again

    const [listOfFilteredRestaurant,setListOfFilteredRestaurant] = useState([])
    //this consists of the Restaurants which are filtered after the search action
    //for search-bar based list of restaurants,so that the original list of restaurants doesnt gets hampered
    //because if i directly do setListOfRestaurant(filteredData) then the listOfRestaurant would also change and as result we would lose the access to the original restaurants.


    const [searchtext,setSearchtext] = useState("")
    
    const RestaurantCardPromoted = withPromotedLabel(ResCardComponent)
    // console.log(RestaurantCardPromoted)
    //over here i am making a component out of that function that would be used according to the requirement

    useEffect( () => {
        // console.log('useEffect called')
        apiCall()},[]);
    //gets called after the entire component is been rendered


    //now through this we can call the api in the {apiCall()} in use effect 
    const apiCall = async () => {

        setListOfRestaurant(demo) //to display the cards now
        setListOfFilteredRestaurant(demo) //initialising this also becuase we want to display this on home page and consider the listOfRestaurant as the main source for comparison 

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.4066276&lng=72.8394477&page_type=DESKTOP_WEB_LISTING")
        const formatData = await data.json(); //this also returns a promise so await

        // console.log(formatData); // to look the data in the console whwether things are working fine or not
        //now over here i can use the setCurrData and provide it some new data which i got as json and re render the component with the help of use state hook.
        //so after this component is completed its execution,then this useEffect would be called and then the as we change the state of currdata,the data on the UI would be changed
    }


    //    if(currData.length === 0)  //when initally the api isnt been called then show loading as u have emptied the useState variable 
    //     return <h1 style={{backgroundColor:"red"}}> Loading... </h1>
    //     //we have to write two braces inside style 1 for representing jsx and another for syntax of style tag

    const currStatus = useOnlineStatus();
    if(currStatus === false)
    {
        return <h1>It seems that u are offline :( Please Check ur network connectivity.... </h1>
    }
    //note if i call the hook after the shimmer one then would give error as react says that whatever hook u are integrating must be written at the top because u cannot use that after something is printed or rendered

    //to improve the UX we have to use shimmer UI and then when useEffect runs it would render the cards,this is also known as 'Conditional Rendering'
    if(listOfRestaurant.length === 0)
    {   
        return <Shimmer/>
    }
    
    
   
  

    return (
        <div className='body'>

            {/* for search bar */}
            <div className="search flex ml-[15px]">

                <div className="search-box " >
                <input 

                type="text"
                className="search-bar border border-solid border-black w-56 h-8" 
                value={searchtext} //binds the input value to the state variable which is empty initially,this makes the input controlled by React state.
                onChange={ (event) => { // updates state on typing,necessary else the changes wont be visible,When the user types, take that value and update searchtext state
                setSearchtext(event.target.value)
                }}
                

                //what if i remove onChange
                // <input value={searchtext} /> // controlled by react but no way to change it
    
                /> 

                {/* for filtering the according to the searched item */}
                <button onClick={()=>{
                
               

                  let filteredSearch = listOfRestaurant.filter( (obj) => {
                        // return obj.resName === searchtext //gives me the exact keyword
                        // return obj.resName.includes(searchtext); //gives all the cards who have this as a substring
                        return obj.resName.toLowerCase().includes(searchtext.toLowerCase()); //this gives me the values irrespective of the case of the searchtext as am convering both into lowercase
                   })



                   setListOfFilteredRestaurant(filteredSearch);
                   //updating this because i dont wont to hamper the original listOfRestaurant
                     
                }} className="  px-4 py-2 m-4 bg-green-200 hover:bg-green-300 text-black rounded-xl transition-all duration-300 shadow-md hover:shadow-lg "> search </button>
                </div>

                
               {/* for filtering top restaurants */}
         
                <button className="px-4 py-2 m-4 bg-green-200 hover:bg-green-300 text-black rounded-xl transition-all duration-300 shadow-md hover:shadow-lg" 

                    // Method 1 - FAILED X .....The return inside an event handler like onClick does not count for rendering in React.
                    // return values inside the render or JSX block will be rendered.
                    // Return values inside event handlers like onClick will be ignored unless they affect state.
                    // (data)=>{

                    //      let filteredData = demo.filter(
                    //         (data)=>{
                    //             return data.rating>4.3
                    //         }
                    //     )


                    //     filteredData.map( (obj,index) => {
                    //      return <ResCardComponent  key  = {index} data = {obj}/>
                    //  } )
                     
                    // }


                    //Method 2 : Using useState,adding functionality of top rated restaurants where the rating > 4.2 would be displayed onClick
                    onClick={
                        ()=>{
                            let filteredData = demo.filter(
                                (obj)=>{
                                    return obj.rating > 4.2;
                                }
                            )
                            setListOfFilteredRestaurant(filteredData);
                        }
                    }
                   
                > 
 
              
                
                Top Rated Restaurants </button>    

            </div>


            {/* for resCard */} 
            <div className='res-container flex flex-wrap gap-[24px]'>

                {/* here i will be giving multiple cards so wrapping it in res-container */}

                {/* looping over card api and note inside a jsx wherever u want the functionality of JS u have to use {} */}

   
                {
                    // CARD_API.map( (obj,index) => {
                    //     return <ResCardComponent  key  = {index} data = {obj}/>
                    // } )

                    //useState Hook power ful variable
                    //unlike the button onClick,here the return is sent to the div so that would be rendered automatically 
                    // That’s how React works — it watches what you return from your component, and renders it to the DOM.
                    // Yes, return values inside the render or JSX block will be rendered.
                    // Return values inside event handlers like onClick will be ignored unless they affect state.
                     listOfFilteredRestaurant.map( (obj) => {

                         return(
                         <Link  key  = {obj.id}  to={'/restaurants/' + obj.id}>
                         { 
                         obj.isPromoted ? 
                         <RestaurantCardPromoted data = {obj} />
                         :
                         <ResCardComponent data = {obj}/>
                         }
                         </Link>

                         );
                         
                         
                     } )

                }
                

                 
            </div>

        </div>
    );
}

export default Body;