import { useState } from "react";

const Timer = (props) => {
  const [seconds, setSeconds] = useState(props.time);
  setTimeout(() => {
    setSeconds((oldSeconds) => oldSeconds + 1);
  }, 1000);
  return (
    <div>
      <span>Time passed: {seconds}s</span>
    </div>
  );
};

export default Timer;
