const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// createElement method takes three arguments 
// 1.Name, 2. object of attributes, 3. children(have to pass in array if more than one children is there) 
const parent = React.createElement("parent", {}, [
  React.createElement(
    "child",
    {},
    React.createElement("h1", {}, "I am not the ultimate ")
  ),
  React.createElement(
    "child",
    {},
    React.createElement("h1", {}, "I am the ultimate ")
  ),
]);
// render method injects the argument to the parent this is root, it injects the argument to the root. 

root.render(parent);
console.log(parent);
