import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );
// console.log(heading); //object
// const jsxHeading = (
//   <h1 id="heading" className="head" tabIndex="1">
//     Hello World from React!
//   </h1>
// );
const Title = () => {
  return (
    <h1 id="heading" className="head" tabIndex="1">
      Hello World from React!
    </h1>
  )
}
const Heading = () => (
  <div>
    {/* {jsxHeading} {console.log("here")}// we can use javascript inside JSX using {} */}
    {/* {Title()} */}
    <Title/>
    {/* <Title></Title> */}
  </div>
);
// console.log(jsxHeading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(jsxHeading); //conver react obj to html elem and render it to dom
root.render(<Heading/>)