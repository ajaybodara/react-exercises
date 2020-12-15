import * as React from "react";
import "./app.css";

const App = () => {
  let hours =
    new Date().getHours() % 12 > 10
      ? new Date().getHours() % 12 
      : `0${new Date().getHours() % 12}`;

  hours = hours === "00" ? 12: hours
  const minute =
    new Date().getMinutes() > 10
      ? new Date().getMinutes()
      : `0${new Date().getMinutes()}`;

  const seconds =
    new Date().getSeconds() > 10
      ? new Date().getSeconds()
      : `0${new Date().getSeconds()}`;

  const Modifier = new Date().getHours() > 12 ? "PM" : "AM";

  return (
    <h1>
      {hours}:{minute}:{seconds} {Modifier}
    </h1>
  );
};

export default App;