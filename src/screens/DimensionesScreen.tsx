import React from 'react';
import { View, Text, useWindowDimensions } from 'react-native';

export const DimensionesScreen = () => {

    const { width, height } = useWindowDimensions();

    return(
        <View
            style={{
                width: "100%",
                height: "100%"
            }}
        >
            <View
                style={{
                    height: height * 0.3, // 30% alto
                    width: width * 0.6, // 60% ancho
                    backgroundColor: "pink"
                }}
            />
            <Text
                style={{
                    color: "green",
                    fontSize: 30,
                    textAlign: "center",
                    borderColor: "#000000",
                    borderWidth: 1,
                    fontWeight: "bold"
                }}
            >
                Ancho: { width } Alto: { height }
            </Text>
        </View>
    );
}
