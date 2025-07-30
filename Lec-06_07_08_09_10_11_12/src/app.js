import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider,Outlet} from 'react-router-dom';
import { ContactUs } from './components/ContactUs';
import ErrorPage from './components/ErrorPage';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';

// import UserContext from './utils/UserContext';
// import About from './components/About';
const About = lazy( () => import('./components/About') )

// import Grocery from './components/Grocery';
const Grocery = lazy(()=>  import ('./components/Grocery') )



//main item
const AppLayout = () => {

    return (
        
        // <UserContext.Provider value={{loggedInUser : "Suryam"}}>
        
        <Provider store={appStore}>
        <div className="app">

            {/* Header Component*/}
            <Header/>

            {/* This would be displayed as per the children path */}
            <Outlet />

        </div>
        </Provider >
        
    //    </UserContext.Provider>

    );

}
//this is a main container Component where all the header,body and footer would reside


//this router accepts array of objects where each path and on that path what element or component is to be rendered
const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout />,
        errorElement:<ErrorPage />,
        children : [
            {
                index:true,
                element : <Body />
            },
            {
                path : 'about',
                element :<Suspense fallback={<Shimmer />}> <About /> </Suspense>
            },
            {
                path : 'contact',
                element : <ContactUs />
            },
            {
                path : 'Grocery',
                element : <Suspense fallback={<Shimmer />}> <Grocery /> </Suspense> 
            },
            {    //creating dynmaic routes,here :resId is dynamic
                path : 'restaurants/:resId',
                element : <RestaurantMenu />
            }
        ]
        
    },
])




const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(<RouterProvider router={appRouter}/>)