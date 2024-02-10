import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Screen1 } from '../screens/navigate/Screen1';
import { Screen2 } from '../screens/navigate/Screen2';
import { Screen3 } from '../screens/navigate/Screen3';
import { PersonaScreen } from './../screens/navigate/PersonaScreen';

export type RootStackParams = {
    Screen1: undefined;
    Screen2: undefined;
    Screen3: undefined;
    PersonaScreen: { id: number, nombre: string };
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return(
        <Stack.Navigator
            initialRouteName='Screen1'
            screenOptions={{
                headerShown: false,
                cardStyle:{
                    backgroundColor: "white"
                }
            }}
        >
            <Stack.Screen
                name="Screen1"
                component={ Screen1 }
                options={{ title: "Pantalla I" }}
            />
            <Stack.Screen
                name="Screen2"
                component={ Screen2 }
                options={{ title: "Pantalla II" }}
            />
            <Stack.Screen
                name="Screen3"
                component={ Screen3 }
                options={{ title: "Pantalla III" }}
            />
            <Stack.Screen
                name="PersonaScreen"
                component={ PersonaScreen }
                options={{ title: "Datos del usuario" }}
            />
        </Stack.Navigator>
    );
}

