import React from "react";
import "./App.css";

const Header = () => {
  return <h2>Hello world!</h2>;
};

// const Field = () => {
//   const styled = {
//     width: "600px",
//   };
//   return <input placeholder="Type here" type="text" style={styled} />;
// };

class Field extends React.Component {
  render() {
    const styled = {
      width: "500px",
    };
    return <input placeholder="Type here" type="text" style={styled} />;
  }
}

function Btn() {
  const text = "Log in";
  const logged = false;

  return <button>{logged ? "Enter" : text}</button>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
    </div>
  );
}

export { Header };
export default App;
