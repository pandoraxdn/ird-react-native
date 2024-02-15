import React, { useContext } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
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

    const { authState, singIn, logout, changeUsername } = useContext( AuthContext );

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
                ...appTheme.containerMarginGlobal,
            }}
        >
            <Text
                style={ appTheme.title }
            >
                Screen1
            </Text>
            <Button
                title='Alumno'
                onPress={ () => {
                    changeUsername( alumno.nombre )
                    navigation.navigate("PersonaScreen",alumno)
                }}
            />
            <Button
                title='Alumno2'
                onPress={ () => {
                    changeUsername( alumno2.nombre )
                    navigation.navigate("PersonaScreen",alumno2)
                }}
            />
            {
                (authState.isLoggenIn)
                ?
                (
                    <TouchableOpacity
                        onPress={ logout }
                    >
                        <View
                            style={{
                                alignSelf: "center",
                                backgroundColor: "pink",
                                borderRadius: 40,
                                justifyContent: "center",
                                marginTop: 10,
                                height: 50,
                                width: 80,
                            }}
                        >
                            <Text
                                style={{
                                    ...appTheme.title,
                                    fontSize: 20
                                }}
                            >
                                Logout
                            </Text>
                        </View>
                    </TouchableOpacity>
                )
                :
                (
                    <TouchableOpacity
                        onPress={ singIn }
                    >
                        <View
                            style={{
                                alignSelf: "center",
                                backgroundColor: "pink",
                                borderRadius: 40,
                                justifyContent: "center",
                                marginTop: 10,
                                height: 50,
                                width: 80,
                            }}
                        >
                            <Text
                                style={{
                                    ...appTheme.title,
                                    fontSize: 20
                                }}
                            >
                                SingIn
                            </Text>
                        </View>
                    </TouchableOpacity>
                )
            }
            <Fab
                title='->'
                position='button_right'
                action={ () => navigation.navigate("Screen2") }
            />
        </View>
    );
}
