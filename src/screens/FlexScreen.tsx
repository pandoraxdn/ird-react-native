import React from 'react';
import { View, StyleSheet } from 'react-native';

export const FlexScreen = () => {

    return(
        <View 
            style={ styles.container }
        >
            <View
                style={{ flex:2, backgroundColor: "violet" }}
            />
            <View
                style={{ flex:2, backgroundColor: "blue" }}
            />
            <View
                style={{ flex:3, backgroundColor: "pink" }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

