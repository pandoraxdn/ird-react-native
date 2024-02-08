import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from './../../navigator/StackNavigator';
import { appTheme } from '../../theme/appTheme';
import { Fab } from '../../components/Fab';

interface Estudiante{
    id: number;
    nombre: string;
}

interface Props extends StackScreenProps<RootStackParams,"Screen1">{};

export const Screen1 = ( { navigation }: Props ) => {

    const alumno: Estudiante = {
        id: 1,
        nombre: "María"
    }

    const alumno2: Estudiante = {
        id: 2,
        nombre: "Luz"
    }

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
                Screen1
            </Text>
            <Button
                title='Alumno'
                onPress={ () => navigation.navigate("PersonaScreen",alumno)  }
            />
            <Button
                title='Alumno2'
                onPress={ () => navigation.navigate("PersonaScreen",alumno2)  }
            />
            <Fab
                title='->'
                position='button_right'
                action={ () => navigation.navigate("Screen2") }
            />
        </View>
    );
}
