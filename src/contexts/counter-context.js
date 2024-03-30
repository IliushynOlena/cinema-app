// import { createContext, useState } from "react";

// export const CounterContext = createContext({
//     // username property 
//     count: 0,           
//     inctement: () => null, 
//     decrement: () => null,
//     reset: () => null
// });

// export const CounterProvider = ({ children }) => {

//     const [ count ,setCount] = useState(0);
   
//     const increment = ()=> setCount(count+1);
//     const decrement = ()=> setCount(count-1);
//     const reset = ()=> setCount(1);
  
//     const value = { count, increment, decrement,reset };
//     return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
// }