import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FormAlumnosScreen } from "../screens/alumnos/FormAlumnosScreen";
import { HomeAlumnos } from "../screens/alumnos/HomeAlumnos";
import { AlumnosResponse } from "../interfaces/pandoraApi";

export type RootStackAlumnosParam = {
    HomeAlumnos:        undefined;
    FormAlumnosScreen:  { AlumnosResponse: AlumnosResponse };
}

const Stack = createStackNavigator<RootStackAlumnosParam>();


export const AlumnosNavigator = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen
                component={ HomeAlumnos }
                name='HomeAlumnos'
            />
            <Stack.Screen
                component={ FormAlumnosScreen }
                name='FormAlumnosScreen'
            />
        </Stack.Navigator>
    );
}
