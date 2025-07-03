
 const heading = React.createElement('h4',{id:"heading"}," Its my first day of learning react !")
//tag {attributes} content
//this creation of element comes under react so using React.
//at the end of the day when i log this heading i would get an object
//where there are  many things like type of the tag and the props that is the attributes and children that is the content

console.log(heading)
//nothing but an object

//now we will make root where we have to append the changes
const root1 = ReactDOM.createRoot(document.querySelector('.line1'))
//now we are creating the root where all the things would be rendered “This is where I want to manage and render React content.”

root1.render(heading)
//initially there is object when we React.createElement now it is been rendered to equivalent tag what the web understands and is rendered into dom




//NOW THE QUESTION COMES HOW CAN WE CREATE NESTED ELEMENTS IN REACT ?


/* <div class="div1">
    <div class="div2">
        <h1 class="head1">this is nested element</h1>
    </div>
</div> */

// we know that the third parameter inside the createElement is child so we will again append a new createElement inside that resuting to be in nested form


const parent = 
React.createElement('div' ,{className:"div1"},
React.createElement('div',{className:"div2"},
React.createElement('h4',{className:'head1'},
    "this is a nested tag")
)
)

const root2 = ReactDOM.createRoot(document.querySelector('.line2'))
root2.render(parent)

/*
NOTE :
lets suppose there were some content on line2 class in the page that would be entirely replaced by the current content,if u want to avoid then create a new div next to the prev and add the content

class is defined in JS due to OOPS so use classname while adding the attrributes
*/


//NOW THE QUESTION COMES HOW CAN WE CREATE SIBILINGS INSIDE A CONTAINER IN REACT ?

/* <div class="div1">
    <div class="div2">
        <h1 class="head1">this is nested element</h1>
        <h1 class="head2">this is nested element</h1>
    </div>
</div> */

//so in such a case in the third parameter where we write the content pass an array of React.createElement


// const parent = 
// React.createElement('div' ,{className:"div1"},
// React.createElement('div',{className:"div2"},
// [React.createElement('h4',{className:'head1'},"this is a nested tag"),React.createElement('h4',{className:'head1'},"this is a nested tag")]
// )
// )


//this is core react syntax
//but lets suppose there were more nested things,then it would become more messier to write,then how come react simplifys it for us

//for that reason we use the JSX,in this manner we write react

//React is a Library
// Yes, you can absolutely use React in just a small portion of a project built with any other tech stack (like plain HTML, PHP, Django, etc.).
// React can be mounted on a specific element (like a <div>) without affecting the rest of your page.

// 🔹 This approach is perfect for gradually adopting React
// 🔹 You don’t need to rewrite your whole project
// 🔹 React will control only the part of the DOM you attach it to

// ✅ It's clean, modular, and very common in real-world applications.