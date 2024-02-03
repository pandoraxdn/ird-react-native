import {useReducer} from 'react';

export interface CounterState{
    counter: number;
}

type Action = 
    | { type: 'increment' } 
    | { type: 'decrement' }
    | { type: 'reset', payload: number };

const counterReducer = ( state: CounterState, action: Action ): CounterState => {
    switch( action.type ){
        case 'increment':
            return { counter: state.counter + state.counter };
        case 'decrement':
            return { counter: state.counter / 2 };
        case 'reset':
            return { counter: action.payload };
        default:
            return { ...state };
    }
}

interface UseCounterReducerHook{
    state: CounterState;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

export const useCounterReducerHook = ( data: CounterState ): UseCounterReducerHook => {

    const [ state, dispatch ]= useReducer( counterReducer, data );

    const increment = () => dispatch({ type: "increment" });
    const decrement = () => dispatch({ type: "decrement" });
    const reset = () => dispatch({ type: "reset", payload: data.counter });

    return { state, increment, decrement, reset };

}
