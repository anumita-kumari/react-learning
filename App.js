import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {}, "Hello World From React");

const heading = <h1 className="heading">Namaste React from JSX</h1>;

//Functional Component- a jS function that returns some JSX or react element
//It is in capital

const Title = () => <h2>Namste React from JSX1</h2>;
const HeadingComponent = () => (
  <div id="container">
    <Title />
    {/* //Component compostion */}
    <h1 className="heading">Namaste React from Functional Component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
