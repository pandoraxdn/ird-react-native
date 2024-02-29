import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { ButtonText } from './ButtonText';
import { appTheme } from '../theme/appTheme';

export const MenuInterno = ( { navigation }: DrawerContentComponentProps ) => {

    const assets: string = './../../assets/';

    const { authState } = useContext( AuthContext );

    return(
        <DrawerContentScrollView>
            <View
                style={ appTheme.avatarContainer }
            >
                <Image
                    style={ appTheme.avatar }
                    source={ 
                        ( authState.favoriteImage == undefined )
                        ? require( assets + 'ci.jpg' )
                        : { uri: authState.favoriteImage }
                    }
                />
                <Text
                    style={{
                        ...appTheme.title,
                        fontSize: 25,
                        marginTop: 5
                    }}
                >
                    Username: { '\n' }
                    {
                        ( authState.username != undefined ) && authState.username
                    }
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
                <ButtonText
                    action={ () => navigation.navigate("AvatarScreen") } 
                    title="Avatar"
                />
                <ButtonText
                    action={ () => navigation.navigate("RickMortyNavigator") } 
                    title="Rick and Morty"
                />
            </View>
        </DrawerContentScrollView>
    );

}
