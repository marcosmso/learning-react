import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  // function updateTime(){
  //   setTime(new Date().toLocaleTimeString())
  // }

  function updateTime() {
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{time.substring(0, time.length - 2)}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
