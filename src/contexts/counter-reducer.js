import { createContext, useReducer } from "react";
import Counter from "../components/Counter";

export const CounterContext = createContext({
    // username property 
    count: 0,  
    name: '',         
    inctement: () => null, 
    decrement: () => null,
    reset: () => null
});

const INITIAL_STATE = {
    count: 0,
    name : "no name"
}

const COUNTER_ACTION_TYPES = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET'
};

/*
    reducer = (state, action) => {
        return { new state ... }
    }
*/

export const countReducer = (state, action) => {
    // type - type of the action
    // payload - data to do the aciton
    const { type, payload } = action;

    switch (type) {
        case COUNTER_ACTION_TYPES.INCREMENT:
            return {
                ...state,
                count: state.count+1
            };
            case COUNTER_ACTION_TYPES.DECREMENT:
                return {...state,count: state.count-1 };
            case COUNTER_ACTION_TYPES.RESET:
                return {...state,count: 1 };
        default:return state;
            //throw new Error('Invalid action type');
    }
}

export const CounterProvider = ({ children }) => {
    const [{ count, name }, dispatch] = useReducer(countReducer, INITIAL_STATE);

    // action realizations
    const increment = () => {
        dispatch({ type: COUNTER_ACTION_TYPES.INCREMENT });
    }
    const decrement = () => {
        dispatch({ type: COUNTER_ACTION_TYPES.DECREMENT });
    }
    const reset = () => {
        dispatch({ type: COUNTER_ACTION_TYPES.RESET });
    }
    //const [username, setUsername] = useState('');

    const value = { count,name, increment, decrement, reset };

    return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
}