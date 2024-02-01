import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorFabScreen = () => {

    /*
     * Tarea:
     *      Crear un contador con useState,
     *      el cual me permita sumar el doble de valor inicial de state.
     *      y a su vez me permita restar el valor del state en la mitad de su valor.
    */

    const initialValue: number = 10;

    const [ valor, setValor ] = useState( initialValue );

    const increment = (): void => {
        setValor( valor + 1 );
    }

    const decrement = (): void => {
        setValor( ( valor == 0 ) ? 0 : valor -1 );
    }

    const reset = (): void => {
        setValor( initialValue );
    }

    return(
        <View
            style={ style.container }
        >
            <Text
                style={ style.title }
            >
                Contador: { valor }
            </Text>
            <Button
                title='Reset'
                onPress={ reset }
            />
            <Fab
                title='+ 1'
                position='button_right'
                action={ increment }
            />
            <Fab
                title='- 1'
                position='button_left'
                action={ decrement }
            />
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center"
    },
    title:{
        textAlign: "center",
        fontSize: 40
    }
});

