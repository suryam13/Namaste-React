import { useState } from 'react';
import {LOGO_LINK} from '../utils/constants'
import {Link} from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import UserContext from '../utils/UserContext';
// named import



// useEffect({}) => no dependency array then useEffect is called after very render
// useEffect({},[]) => dependency array is empty then useEffect is called just once during intial render
// useEffect({},[status]) It runs once after the initial render (even though buttonClicked hasn’t changed yet — because technically it changed from undefined to false on mount).Then,   every time buttonClicked changes, the effect runs again. 


const cartItems = useSelector ((store) => store.cart.items )
//here the store which we are getting is the appStore as in an application there could be only one store and then it consists of slices here reducer property is ignored in the main store and we directly write store.cart.items
//here in the function we are defining whch part needs to be communicated with


const Header = () => {

    const [status,setStaus] = useState('Login')
    const onlineStatus = useOnlineStatus();

    const dataContext = useContext(UserContext); //received an object over here
    console.log(dataContext)
    return(

        <div className="flex justify-between bg-[#fff3cd] h-[100px] shadow-lg "> 

            <div className="logo-container">
                <img src= {LOGO_LINK} className='w-[150px] h-[100px]'/>
            </div>

            <div className='flex '>
                <ul className='flex items-center'> 
                    <li className='px-4' > Network Status : {onlineStatus ? "🟢" : "🔴" } </li>
                    <li className='px-4'> <Link to='/Grocery'> Grocery </Link> </li>
                    <li className='px-4'> <Link to='/'> Home </Link> </li>
                    <li className='px-4'> <Link to='/about'> About Us </Link> </li>
                    <li className='px-4'> <Link to="/contact"> Contact </Link> </li>
                    <li className='px-4'> <Link to="/cart"> Cart </Link> </li>
                    <button className='w-[110px] px-4 py-2 m-4 bg-green-200 hover:bg-green-300 text-black rounded-xl transition-all duration-300 shadow-md hover:shadow-lg ' onClick={
                        ()=>{
                            status === 'Login' ? setStaus('Logout') : setStaus('Login')
                        }
                    }> {status}</button>

                    <li className='px-2 font-black'> <Link to="/cart"> {dataContext.loggedInUser} </Link> </li>

                </ul>
            </div>

        </div>

    );
}


export default Header;