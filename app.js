// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");
const Parent = React.createElement("div", {id:"parent"}, [
    React.createElement("div",{id:"child"},[
        React.createElement("h1", {}, "Hello World from React!"),
        React.createElement("h2", {}, "Hello World from React!"),
    ]),
    React.createElement("div",{id:"child"},[
        React.createElement("h1", {}, "Hello World from React!"),
        React.createElement("h2", {}, "Hello World from React!"),
    ])
])
console.log(Parent)
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(Parent)
