import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useLogin } from '../../hooks/useLogin';
import { appTheme } from '../../theme/appTheme';

export const LoginScreen = () => {

    const {
        isLoading,
        request,
        handleLogin,
        handleInputChange,
        state
    } = useLogin();

    return(
        <View
            style={{
                ...appTheme.containerGlobal,
                ...appTheme.containerMarginGlobal
            }}
        >
            <View
                style={{ alignItems: "center" }}
            >
                {
                    (!isLoading) &&
                    <ActivityIndicator
                        style={{ height: 100 }}
                        size={ 100 }
                        color="black"
                    />
                }
                {
                    ( request == false ) &&
                    (
                        <Text
                            style={{
                                ...appTheme.title,
                                color: "red"
                            }}
                        >
                            { 'Contraseña incorrecta \n' }
                            { 'Envío datos faltantes \n' }
                        </Text>
                    )
                }
                <TextInput
                    style={ appTheme.input }
                    value={ state.matricula }
                    onChangeText={ (text) => handleInputChange('matricula', text) }
                    placeholder="Ingresa matricula"
                    editable={ isLoading }
                />
                <TextInput
                    style={ appTheme.input }
                    value={ state.password }
                    onChangeText={ (text) => handleInputChange('password', text) }
                    placeholder="Ingresa contraseña"
                    editable={ isLoading }
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    onPress={ handleLogin }
                    disabled={ !isLoading }
                >
                    <View>
                        <Text>
                            Login
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
