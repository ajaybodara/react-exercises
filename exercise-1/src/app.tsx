import * as React from "react";

const App = () => {
  const hours =
    new Date().getHours() % 12 > 10
      ? new Date().getHours() % 12
      : `0${new Date().getHours() % 12}` || 12;

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