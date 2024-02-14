import React from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { ButtonText } from './ButtonText';
import { appTheme } from '../theme/appTheme';

export const MenuInterno = ( { navigation }: DrawerContentComponentProps ) => {

    const assets: string = './../../assets/';

    return(
        <DrawerContentScrollView>
            <View
                style={ appTheme.avatarContainer }
            >
                <Image
                    style={ appTheme.avatar }
                    source={ require( assets + 'ci.jpg' ) }
                />
                <Text
                    style={{
                        ...appTheme.title,
                        fontSize: 25,
                        marginTop: 5
                    }}
                >
                    Username: { '\n'+'Citlalli' }
                </Text>
            </View>
            <View
                style={ appTheme.menuContainer }
            >
                <ButtonText
                    action={ () => navigation.navigate("StackNavigator") } 
                    title="Home"
                />
                <ButtonText
                    action={ () => navigation.navigate("SettingsScreen") } 
                    title="Settings"
                />
            </View>
        </DrawerContentScrollView>
    );

}
