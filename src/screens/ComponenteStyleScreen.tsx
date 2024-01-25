import React from 'react';
import { View, Text } from 'react-native';

export const ComponenteStyleScreen = () => {

    return(
        <View>
            <View
                style={{
                    backgroundColor: "#000000", // Color de fondo
                    height: 100, // altura del componente
                    width: 100, // anchura del componente
                    paddingVertical: 10, // separacion arriba y abajo
                }}
            />
            <View
                style={{
                    backgroundColor: "violet",
                    height: 100,
                    width: 100,
                    paddingVertical: 10,
                }}
            />
            <View
                style={{
                    backgroundColor: "pink",
                    height: 100,
                    width: 100,
                    paddingVertical: 10,
                }}
            />
        </View>
    )
}
