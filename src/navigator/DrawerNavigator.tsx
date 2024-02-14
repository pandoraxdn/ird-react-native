import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useWindowDimensions } from 'react-native';
import { StackNavigator } from "./StackNavigator";
import { SettingsScreen } from "../screens/navigate/SettingsScreen";
import { MenuInterno } from "../components/MenuInterno";

export type RootDrawerParams = {
    StackNavigator: undefined;
    SettingsScreen: undefined;
}

const Drawer = createDrawerNavigator<RootDrawerParams>();


export const DrawerNavigator = () => {

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
                    backgroundColor: 'rgba(103, 254, 221, 0.9)',
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
        </Drawer.Navigator>
    );

}