import React from 'react';
import { View, StyleSheet } from 'react-native';

export const FlexDirectionScreen = () => {

    return(
        <View
            style={ theme.container }
        >
            <View
                style={{
                    ...theme.caja,
                    backgroundColor: "pink"
                }}
            />
            <View
                style={{
                    ...theme.caja,
                    backgroundColor: "red",
                    alignSelf: "flex-start"
                }}
            />
            <View
                style={{
                    ...theme.caja,
                    backgroundColor: "blue",
                    alignSelf: "flex-end"
                }}
            />
        </View>
    );
}

const theme = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    caja:{
        height: 100,
        width: 100,
        borderRadius: 100,
    }
});

