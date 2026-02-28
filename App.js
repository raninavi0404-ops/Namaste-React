/*
<div id="parent">
  <div id="child">
   <h1>I'm h1 tag</h1>
   <h2>I'm h2 tag </h2>
</div>

 <div id="child2">
   <h1>I'm h1 tag</h1>
   <h2>I'm h2 tag </h2>
</div>

ReactElement(Object) ==> HTML(Brower Understands)
*/


// ******* for parent and single child ******
const parentt = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
);

// ******* for parent and two child ******

const parent = React.createElement(
  "div", {id: "parent"},[
    React.createElement("div", {id: "child"},
      [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2",{},"I'm an h2 tag"),
      ]
    ),
    React.createElement("div",{id:"child2"},[
      React.createElement("h1",{},"I'm an h1 tag"),
      React.createElement("h2",{},"I'm an h2 tag"),
    ]),
  ]
);            



console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);







  // const heading = React.createElement(
  //   "Hi",
  //   {id: "heading", xyz: "abc"},
  //   "Hello World from React!");
  // const root = ReactDOM.createRoot(document.getElementById("root"));
  // root.render(heading);

// import React from "react";
// import ReactDOM from "react-data/client";

// const jsxHeading = <h1 id=" heading">Hii</h1>;
// console.log(jsxHeading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);