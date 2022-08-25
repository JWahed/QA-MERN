/* eslint-disable react/no-array-index-key */
import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [previousActions, setPreviousActions] = useState([]);

  const upFive = () => { setCounter((count) => count + 5); };
  const upOne = () => setCounter((count) => count + 1);
  const reset = () => setCounter(0);
  const downOne = () => setCounter((count) => count - 1);
  const downFive = () => setCounter((count) => count - 5);

  const saveActions = () => {
    if (previousActions.length > 5) {
      previousActions.shift(1);
    }
    setPreviousActions((prev) => [...prev, counter]);
  };

  return (
    <>
      <h1>
        Count:
        {counter}
      </h1>

      <button type="button" onClick={() => { upFive(); saveActions(); }}> +5 </button>
      <button type="button" onClick={() => { upOne(); saveActions(); }}> +1 </button>
      <button type="button" onClick={() => { reset(); saveActions(); }}> reset </button>
      <button type="button" onClick={() => { downOne(); saveActions(); }}> -1 </button>
      <button type="button" onClick={() => { downFive(); saveActions(); }}> -5 </button>

      <p>History</p>
      <ul>
        {previousActions.map((count, index) => (
          <li key={index}>{count}</li>
        ))}
      </ul>
    </>
  );
}

export default Counter;
