import React from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigator/StackNavigator';
import { appTheme } from '../../theme/appTheme';
import { Fab } from '../../components/Fab';

interface Props extends StackScreenProps<RootStackParams,'Screen3'>{};

export const Screen3 = ( {navigation}:Props ) => {

    return(
        <View
            style={{
                ...appTheme.containerGlobal,
                ...appTheme.containerMarginGlobal
            }}
        >
            <Text
                style={ appTheme.title }
            >
                Screen3
            </Text>
            <Fab
                title="<-"
                position='button_left'
                action={ () => navigation.pop() }
            />
            <Fab
                title="Inicio"
                position='button_right'
                action={ () => navigation.popToTop() }
            />
        </View>
    );
}

