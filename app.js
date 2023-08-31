import React from "react";
import  ReactDOM  from "react-dom/client"; 

const jsxHeading = <h1>Hai</h1>

const title = () => ( <h2> Hello React Namaste</h2>)
const Title = () => {
  return <h1> Hello </h1>
}

const Header= () => {
  return (
  <div>
    <h1>  Namaste React</h1>
    {Title}
    <Title />
    <Title></Title>
    {title()}
  </div>
  );
};
  const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);



