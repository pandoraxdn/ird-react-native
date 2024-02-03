import React,{ useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useCounterHook } from './../hooks/useCounterHook';

export const ContadorCustomScreen = () => {

    const initialState: number = 10;

    const { valor, increment, decrement, reset } = useCounterHook( initialState );

    return(
        <View
            style={{ 
                flex: 1,
                justifyContent: "space-evenly"
            }}
        >
            <Text
                style={{
                    fontSize: 30
                }}
            >
                Contador: { valor }
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

const style = StyleSheet.create({

});

