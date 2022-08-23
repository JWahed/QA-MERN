import { useState } from "react";

const Counter = () => {

    const [counter, setCounter] = useState(0);
    const [previousActions, setPreviousActions] = useState([]);

    const upFive = () => {setCounter(count => count + 5)};
    const upOne = () => setCounter(count => count + 1);
    const reset = () => setCounter(0);
    const downOne = () => setCounter(count => count - 1);
    const downFive = () => setCounter(count => count - 5);

    const saveActions = () => {
        if (previousActions.length < 5) {
            setPreviousActions((prev) => [...prev, counter])
        } else {
            previousActions.shift(1)
            setPreviousActions((prev) => [...prev, counter])
        }
    };

    return(
        <>
            <h1>Count: {counter}</h1>
            
            <button onClick={() => {upFive(); saveActions();}}> +5 </button>
            <button onClick={() => {upOne(); saveActions();}}> +1 </button>
            <button onClick={() => {reset(); saveActions();}}> reset </button>
            <button onClick={() => {downOne(); saveActions();}}> -1 </button>
            <button onClick={() => {downFive(); saveActions();}}> -5 </button>

            
            <p>History</p>
            <ul>
                {previousActions.map((counter, index) => (
                <li key={index}>{counter}</li>
                ))}
            </ul>
        </>
    );
};

export default Counter;