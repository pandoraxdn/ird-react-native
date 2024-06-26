import React, { useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useWindowDimensions } from 'react-native';
import { StackNavigator } from "./StackNavigator";
import { SettingsScreen } from "../screens/navigate/SettingsScreen";
import { MenuInterno } from "../components/MenuInterno";
import { AvatarScreen } from "../screens/navigate/AvatarScreen";
import { RickMortyNavigator } from "./RickMortyNavigator";
import { QrNavigator } from "./QrNavigator";
import { AuthContext } from "../context/AuthContext";
import { AlumnosNavigator } from "./AlumnosNavigator";
import { LoginScreen } from "../screens/alumnos/LoginScreen";
import { QrGeneratorScreen } from "../screens/camera/QrGeneratorScreen";

export type RootDrawerParams = {
    StackNavigator: undefined;
    SettingsScreen: undefined;
    AvatarScreen:   undefined;
    RickMortyNavigator: undefined;
    QrNavigator: undefined;
    AlumnosNavigator: undefined;
    QrGeneratorScreen: undefined;
}

const Drawer = createDrawerNavigator<RootDrawerParams>();

const Navigator = () => {

    const { width } = useWindowDimensions();

    return(
        <Drawer.Navigator
            initialRouteName="StackNavigator"
            screenOptions={{
                headerShown: true,
                //overlayColor: 'white',
                drawerType: (width >= 768) ? 'permanent' : 'front',
                drawerPosition: "right",
                drawerStyle: {
                    backgroundColor: 'rgba(140, 91, 161,0.9)',
                    width: width * 0.7,
                },
                headerStyle:{
                    height: 50,
                }
            }}
            drawerContent={ ( props ) => <MenuInterno {...props} /> }
        >
            <Drawer.Screen
                name="StackNavigator"
                options={{ title: 'Home' }}
                component={ StackNavigator }
            />
            <Drawer.Screen
                name="SettingsScreen"
                options={{ title: "Settings" }}
                component={ SettingsScreen }
            />
            <Drawer.Screen
                name="AvatarScreen"
                options={{ title: "Avatar" }}
                component={ AvatarScreen }
            />
            <Drawer.Screen
                name="RickMortyNavigator"
                options={{ title: "Rick and Morty" }}
                component={ RickMortyNavigator }
            />
            <Drawer.Screen
                name="QrNavigator"
                options={{ title: "Escaner QR" }}
                component={ QrNavigator }
            />
            <Drawer.Screen
                name="AlumnosNavigator"
                options={{ title: "Alumnos" }}
                component={ AlumnosNavigator }
            />
            <Drawer.Screen
                name="QrGeneratorScreen"
                options={{ title: "QR" }}
                component={ QrGeneratorScreen }
            />
        </Drawer.Navigator>
    );

}

export const DrawerNavigator = () => {

    const { authState } = useContext( AuthContext );

    return ( authState.isLoggenIn ) ? <Navigator/> : <LoginScreen/>;

}
