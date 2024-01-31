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
    React.createElement("h2", "", "Namaste Javascript"),
    React.createElement("p", "", "This is one of the best course for JS!"),
  ])
]);

root.render(parent);
