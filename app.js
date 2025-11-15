/*
  <div id = "parent">
    <div id = "child1">
      <h1>Hello React</h1>
      <h2>Bye React</h2>
    </div>
     <div id = "child2">
      <h1>Hello React</h1>
      <h2>Bye React</h2>
    </div>
  </div>
  */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello React"),
    React.createElement("h2", {}, "Bye React"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi React"),
    React.createElement("h2", {}, "Welcome React"),
  ]),
]);

// const heading = React.createElement("h1", {}, "Hello React"); // {} is props(atrributes)

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading) //render convert object to html

// console.log(heading) //object

root.render(parent);
