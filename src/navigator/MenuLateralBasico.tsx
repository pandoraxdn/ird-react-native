import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/navigate/SettingsScreen';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

    const { width } = useWindowDimensions();

    return(
        <Drawer.Navigator
            initialRouteName='StackNavigator'
            screenOptions={{
                drawerType: ( width >= 768 ) ? 'permanent' : 'front',
            }}
        >
            <Drawer.Screen
                name="StackNavigator"
                options={{ title: "Home" }}
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
