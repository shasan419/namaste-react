import React from "react";
import ReactDOM from "react-dom/client"
// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");
const Parent = React.createElement("div", {id:"parent"}, [
    React.createElement("div",{id:"child"},[
        React.createElement("h1", {}, "Hello World from React! h1"),
        React.createElement("h2", {}, "Hello World from React!"),
    ]),
    React.createElement("div",{id:"child"},[
        React.createElement("h1", {}, "Hello World from React!"),
        React.createElement("h2", {}, "Hello World from React!"),
    ])
])
console.log(Parent) //object
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(Parent) //conver react obj to html elem and render it to dom
