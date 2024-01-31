import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModel = () => {

    return(
        <View
            style={ styles.container }
        >
            <Text
                style={ styles.boxObjectModel }
            >
                Maria de la Luz
            </Text>
            <Text
                style={ styles.boxObjectModel }
            >
                Maria de la Luz
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "blue"
    },
    boxObjectModel: {
        paddingHorizontal: 50,
        paddingVertical: 50,
        fontSize: 20,
        marginHorizontal: 20,
        marginVertical: 20,
        borderWidth: 10,
        borderColor: "black",
        fontWeight: "bold",
        textAlign: "center"
    }
});
