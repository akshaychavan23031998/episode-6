import React from "react";
import ReactDOM from "react-dom";
import Header  from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  // console.log(<Body/>); ==>> this is nothing but the virtual DOM, which is in the form of JS Object.
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); // this is how we render react component.
