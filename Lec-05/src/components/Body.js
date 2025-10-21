import ResCardComponent from "./ResCardComponent";
import {CARD_API} from '../utils/constants';
import { useState } from "react";

   


let demo = [...CARD_API];
//creating a card API demo/copy by spread operator


const Body = ()=>{
    
    const [currData,setCurrData] = useState(demo)
    //creating useState hook that is local state variable

    return (
        <div className='body'>

            {/* for search bar */}
            <div className='filter'> 
                <button className="filter-btn" 

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
                            setCurrData(filteredData);
                        }
                    }
                   
                > 

              
                
                Top Rated Restaurants </button>    

             </div>


            {/* for resCard */} 
            <div className='res-container'>

                {/* here i will be giving m ultiple cards so wrapping it in res-container */}

                {/* looping over card api */}

                {
                    // CARD_API.map( (obj,index) => {
                    //     return <ResCardComponent  key  = {index} data = {obj}/>
                    // } )

                    //useState Hook powerful variable
                    //unlike the button onClick,here the return is sent to the div so that would be rendered automatically 
                    // That’s how React works — it watches what you return from your component, and renders it to the DOM.
                    // Yes, return values inside the render or JSX block will be rendered.
                    // Return values inside event handlers like onClick will be ignored unless they affect state.
                     currData.map( (obj,index) => {
                         return <ResCardComponent  key  = {index} data = {obj}/>
                     } )

                }
                

                
                 
            </div>

        </div>
    );
}

export default Body;