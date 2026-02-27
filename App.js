import React from "react";
import ReactDOM from "react-dom/client";
import { restaurants } from "./data";
import Footer from "./src/components/Footer";
import Header from "./src/Components/Header";
import { Body } from "./src/components/Body";

const AppLayout = () => {
  return (
    <div className="main">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
