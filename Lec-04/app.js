import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {

    return(

        <div className="header"> 

            <div className="logo-container">
                <img src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg" className='logo'/>
            </div>

            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>

    );
}

const ResCardComponent = (props) => {

    // or either we can destructure the props
    // const {res,cusine} = props;

    //or either we can do it in the parameter list also
    // ({res,cuisine})

    //or either if i get resObj as Object then destructure it as {resObj}
    //why destructure and not directly use it as resObj because react wraps the parameters in object so it would become resObj.resObj.name
    
    return (
        <div className='res-card'>

            <img className='res-img' alt='df' src='https://t4.ftcdn.net/jpg/08/01/13/83/360_F_801138386_Ck2VJqUxk9UCjHC1FFIRGc14mSabNh5F.jpg'/>

            <h4 className='shop-text'> {props.resName} </h4>
            <h4 className='shop-text'> {props.menuName} </h4>
            <h4 className='shop-text'> Rating : 5 star </h4>
            

        </div>
    );
}


// const dummyObjAPI = {
//   restName: "Dwaraka",
//   menuName: "Paneer",
//   rating: "4.5"
// };

const Body = ()=>{

    return (
        <div className='body'>

            {/* for search bar */}
            <div className='search'>Search :) </div>

            {/* for resCard */} 
            <div className='res-container'>

                {/* here i will be giving multiple cards so wrapping it in res-container */}

 
                {/* <ResCardComponent resObj = {dummyOBjAPI} />
                or i can pass directly it as a obj */}
                <ResCardComponent resName="Dwaraka" menuName="Paneer" />
                <ResCardComponent resName="KFC" menuName="Zinger Burger" />
                <ResCardComponent resName="Domino's" menuName="Veg Extravaganza Pizza" />
                <ResCardComponent resName="McDonald's" menuName="McAloo Tikki" />
                <ResCardComponent resName="Burger King" menuName="Whopper" />
                <ResCardComponent resName="Pizza Hut" menuName="Cheese Garlic Bread" />
                <ResCardComponent resName="Subway" menuName="Veggie Delight Sub" />
                <ResCardComponent resName="Haldiram's" menuName="Chole Bhature" />

                
                 
            </div>

        </div>
    );
}


//main item
const AppLayout = () => {

    return (
        <div className="app">

            {/* Header Component*/}
            <Header/>

            {/* Body Component*/}
            <Body/>

            {/* Footer Component*/}

        </div>
    );

}
//this is a main container Component where all the header,body and footer would reside


const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(<AppLayout/>)