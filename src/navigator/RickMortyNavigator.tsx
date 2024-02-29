import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/rickAndMorty/HomeScreen';
import { CharacterDetailScreen } from './../screens/rickAndMorty/CharacterDetailScreen';
import { CharacterSimple } from '../interfaces/rickMortyInterface';

export type RootRickMortyParams = {
    HomeScreen: undefined;
    CharacterDetailScreen: { CharacterSimple: CharacterSimple };
}

const Stack = createStackNavigator<RootRickMortyParams>();

export const RickMortyNavigator = () => {
    return(
        <Stack.Navigator
            initialRouteName='HomeScreen'
            screenOptions={{
                headerShown: false,
                cardStyle:{
                    backgroundColor: "white"
                }
            }}
        >
            <Stack.Screen
                name="HomeScreen"
                component={ HomeScreen }
                options={{ title: "Pantalla Inicial" }}
            />
            <Stack.Screen
                name="CharacterDetailScreen"
                component={ CharacterDetailScreen }
                options={{ title: "Detalle del personaje" }}
            />
        </Stack.Navigator>
    );
}

