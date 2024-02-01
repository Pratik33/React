import  React  from 'react';
import  ReactDOM  from 'react-dom/client';

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World !  from React !"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child-one" }, [
    React.createElement("h1", {id:"heading"}, "Welcome to Namaste React"),
    React.createElement("p", "", "This is one of the best course !"),
  ]),
  React.createElement("div", { id: "child-two" }, [
    React.createElement("h2", "", "We are using parcel now !!"),
    React.createElement("p", "", "Removed React CDN links and using React and react-DOM package "),
  ])
]);

root.render(parent);
