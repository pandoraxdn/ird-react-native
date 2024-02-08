import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from './../../navigator/StackNavigator';
import { appTheme } from '../../theme/appTheme';

interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{};

export const PersonaScreen = ( { navigation, route } :Props ) => {

    const params = route.params;

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
                ID: { params.id } 
                Nombre: { params.nombre }
                { JSON.stringify(params) }
            </Text>
            <Button
                title="Regresar"
                onPress={ () => navigation.pop() }
            />
        </View>
    );
}
