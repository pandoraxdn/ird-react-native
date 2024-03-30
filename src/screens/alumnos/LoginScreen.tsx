import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
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
                ...appTheme.containerMarginGlobal,
            }}
        >
            <View
                style={{ alignItems: "center" }}
            >
                <Image
                    style={{
                        height: 200,
                        width: 200,
                        borderRadius: 50,
                        borderColor: "pink",
                        borderWidth: 5
                    }}
                    source={{
                        uri: "https://th.bing.com/th/id/OIG2.FBZEqQ5HXtAWH.jhmCq5?w=1024&h=1024&rs=1&pid=ImgDetMain"
                    }}
                />
                {
                    (!isLoading) &&
                    <ActivityIndicator
                        style={{ height: 100 }}
                        size={ 100 }
                        color="pink"
                    />
                }
                {
                    ( request == false ) &&
                    (
                        <Text
                            style={{
                                ...appTheme.title,
                                color: "pink",
                                fontWeight: "bold"
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
                    <View
                        style={{
                            height: 50,
                            width: 90,
                            backgroundColor: 'pink',
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 20,
                            borderWidth: 2,
                            borderColor: "violet"
                        }}
                    >
                        <Text
                            style={{
                                color: "white",
                                fontSize: 30,
                                fontWeight: "bold"
                            }}
                        >
                            Login
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
