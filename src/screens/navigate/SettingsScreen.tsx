import React from 'react';
import { View, Text } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootDrawerParams } from '../../navigator/DrawerNavigator';
import { Fab } from '../../components/Fab';
import { appTheme } from '../../theme/appTheme';

interface Props extends DrawerScreenProps<RootDrawerParams,"SettingsScreen">{};

export const SettingsScreen = ( { navigation }: Props ) => {

    return(
        <View
            style={ appTheme.containerGlobal }
        >
            <Text
                style={ appTheme.title }
            >
                Settings
            </Text>
            <Fab
                title='Open'
                position='button_left'
                action={ () => navigation.openDrawer() }
            />
        </View>
    );

}
