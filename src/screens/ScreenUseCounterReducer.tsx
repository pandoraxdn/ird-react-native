import React from 'react';
import { View, Text, Button} from 'react-native';
import { CounterState, useCounterReducerHook } from '../hooks/useCounterReducerHook';


export const ScreenUseCounterReducer = () => {

    const initialState: CounterState = {
        counter: 10,
    }

    const { state, increment, decrement, reset } = useCounterReducerHook( initialState );


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
                    color: "violet"
                }}
            >
                Contador useCounterReducerHook: { state.counter }
            </Text>
            <Button
                title='Increment'
                onPress={ increment }
            /> 
            <Button
                title='reset'
                onPress={ reset }
            />
            <Button
                title='Decrement'
                onPress={ decrement }
            /> 
        </View>
    )
}
