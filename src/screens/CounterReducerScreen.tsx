import React, {useReducer} from 'react';
import { View, Text, Button} from 'react-native';


interface CounterState{
    counter: number;
}

const initialState: CounterState = {
    counter: 10,
}

type Action = 
    | { type: 'increment' } 
    | { type: 'decrement' }
    | { type: 'reset' };

const counterReducer = ( state: CounterState, action: Action ): CounterState => {
    switch( action.type ){
        case 'increment':
            return { counter: state.counter + state.counter };
        case 'decrement':
            return { counter: state.counter / 2 };
        case 'reset':
            return { ...initialState };
        default:
            return { ...state };
    }
}

export const CounterReducerScreen = () => {

    const [ state, dispatch ] = useReducer(counterReducer,initialState);

    return(
        <View
            style={{ 
                flex: 1,
                justifyContent: "space-evenly"
            }}
        >
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    color: "red"
                }}
            >
                Contador Reducer: { state.counter }
            </Text>
            <Button
                title='Increment'
                onPress={ () => dispatch({ type: "increment" }) }
            /> 
            <Button
                title='reset'
                onPress={ () => dispatch({ type: "reset" }) }
            />
            <Button
                title='Decrement'
                onPress={ () => dispatch({ type: "decrement" }) }
            /> 
        </View>
    )
}
