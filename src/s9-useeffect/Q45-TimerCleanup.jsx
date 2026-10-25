import { useState, useEffect } from "react";

function TimerCleanup() {
  const [seconds, setSeconds] = useState(0);
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      <h2>Question 45: Timer with Cleanup</h2>

      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Unmount Timer" : "Mount Timer"}
      </button>

      {showTimer && <Timer />}
    </div>
  );
}

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Timer mounted: Interval started");

    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(intervalId);
      console.log("Timer unmounted: Interval stopped");
    };
  }, []);

  return (
    <div>
      <h3>Timer: {seconds} seconds</h3>
    </div>
  );
}

export default TimerCleanup;

//### Mount
//Mounting occurs when a component is added to the screen for the first time. The `useEffect` hook runs after the component mounts. In this timer example, `setInterval()` starts the timer.

//### Update
//Updating occurs when a component's state or props change, causing it to re-render. For example, the timer's state changes every second, updating the displayed number.

//### Unmount
//Unmounting occurs when a component is removed from the screen. React runs the cleanup function returned by `useEffect`. In this example, `clearInterval()` stops the timer and prevents the interval from continuing unnecessarily.