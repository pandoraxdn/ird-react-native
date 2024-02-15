import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootDrawerParams } from '../../navigator/DrawerNavigator';
import { Fab } from '../../components/Fab';
import { appTheme } from '../../theme/appTheme';

interface Props extends DrawerScreenProps<RootDrawerParams,"SettingsScreen">{};

export const SettingsScreen = ( { navigation }: Props ) => {

    const { authState } = useContext( AuthContext );

    return(
        <View
            style={ appTheme.containerGlobal }
        >
            <Text
                style={ appTheme.title }
            >
                Settings
            </Text>
            <Text
                style={ appTheme.title }
            >
                { JSON.stringify( authState ) }
            </Text>
            <Fab
                title='Open'
                position='button_left'
                action={ () => navigation.openDrawer() }
            />
        </View>
    );

}
