import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "child1" }, "I am child 1"),
    React.createElement("h2", { id: "child2" }, "I am child 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "child3" }, "I am child 1"),
    React.createElement("h2", { id: "child4" }, "I am child 2"),
  ]),
]);
// const heading = React.createElement("h1", {}, "Hello World From React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
