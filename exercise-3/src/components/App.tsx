import React from "react";
import Right from './right';
import Left from './left';
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        <Left />
      </div>
      <div>
        <Right />
      </div>
    </div>
  );
};

export default App;
