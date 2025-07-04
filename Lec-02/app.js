import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement('h4', { id: "heading" }, " Its my first day of learning react :) !");

console.log(heading);

const root1 = ReactDOM.createRoot(document.querySelector('.line1'));
root1.render(heading);

const parent = React.createElement(
  'div',
  { className: "div1" },
  React.createElement(
    'div',
    { className: "div2" },
    React.createElement('h4', { className: 'head1' }, "this is a nested tag")
  )
);

const root2 = ReactDOM.createRoot(document.querySelector('.line2'));
root2.render(parent);


