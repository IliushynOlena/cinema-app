import { Button } from "antd";
import { useContext } from "react";
import { CounterContext } from "../contexts/counter-reducer";
//import { CounterContext } from "../contexts/counter-context";

export default function Counter()
{
    const {increment, decrement, reset} =  useContext(CounterContext);
    return (
        <>
            <h2>Counter manager</h2>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
            <Button onClick={reset}>Reset</Button>        
        </>
    )
}