import { useState } from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.start);

  const onBtnClickAdd = function (e) {
    /*   console.log(e);
    console.log("clicked"); */
    setCounter((c) => c + 1);
  };
  const onBtnClickReset = function () {
    setCounter(0);
  };
  const onBtnClickRemove = function () {
    setCounter((c) => c - 1);
  };
  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={onBtnClickAdd}>+</button>
      <button onClick={onBtnClickReset}>0</button>
      <button onClick={onBtnClickRemove}>-</button>
    </div>
  );
};

export default Counter;
