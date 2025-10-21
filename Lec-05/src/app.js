import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';

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