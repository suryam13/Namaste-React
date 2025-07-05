import React from "react";
import ReactDOM from "react-dom/client";

//React Element

const ele = React.createElement('h3',{className : 'h1'},'this is a h3 tag 🙌')
//this react element is not a html instead its an object,class is a reserved keyword in JS so writing it as a className

//alternative method to create element using JSX,even at the end of the day this is also a object same like createElement
//in this what happens is when we write jsx it is been transpiled into createELement that is js object then at the time of rendering it is converted into valid html tag
const jsEle =
 <h3 className='h1'> 
this
 is a JSX,which is been transpiled by Babel
  </h3>

///A function which returns JSX code is said to be a functional component

// const HeadingComponent = () => <> <h1> This is a functional component</h1> <AlternateComponent /> </>
//when we have to write multiple sinilings then we wrap it under <> </> fragment

const HeadingComponent = () => <h1> This is a functional component</h1>

const AlternateComponent = () => <h4> This is an injected Component</h4> 

const root = ReactDOM.createRoot(document.querySelector('.root'))

root.render(<HeadingComponent />)
//over here the functional component is been transpiled by babel into a JS Object and then that JS Object is been rendered by ReactDOM into the webpage in the form of html tags

// root.render(MyComponent()) //works same


