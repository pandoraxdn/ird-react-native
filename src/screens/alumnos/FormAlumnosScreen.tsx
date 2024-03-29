import React, { useEffect } from 'react';
import { View, Text, TextInput, Image, SafeAreaView, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { RootStackAlumnosParam } from '../../navigator/AlumnosNavigator';
import { useFormAlumno } from './../../hooks/useFormAlumno';
import { BtnTouch } from '../../components/BtnTouch';
import { appTheme } from '../../theme/appTheme';

interface Props extends StackScreenProps<RootStackAlumnosParam,'FormAlumnosScreen'>{};

export const FormAlumnosScreen = ( { navigation, route }: Props ) => {

    const {  
        state,
        handleSubmit,
        handleInputChange,
        handleDelete
    } = useFormAlumno();

    useEffect( () => {
        const alumno = route.params.AlumnosResponse;
        handleInputChange('id_alumno', `${alumno.id_alumno}`);
        handleInputChange('nombre', alumno.nombre);
        handleInputChange('ap_paterno',alumno.ap_paterno);
        handleInputChange('ap_materno',alumno.ap_materno);
        handleInputChange('image',alumno.image);
        handleInputChange('matricula',alumno.matricula);
        handleInputChange('carrera',alumno.carrera);
    },[]);

    const pickImage = async () => {
        
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 0.2,
        });

        ( ! result.canceled ) && ( () => {
            convertImageToBase64( result.assets[0].uri );
        })();

    }

    const convertImageToBase64 = async ( imageUri: string ) => {
        try{
            const base64 = await FileSystem.readAsStringAsync( imageUri, {
                encoding: FileSystem.EncodingType.Base64,
            });
            handleInputChange('image', base64);
        }catch( error ){
            console.log("No es posible convetir la imagen");
        }
    }

    return(
        <SafeAreaView
            style={{ flex: 1 }}
        >
            <ScrollView>
                <View
                    style={{
                        ...appTheme.containerGlobal,
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center"
                    }}
                >
                    {
                        ( state.id_alumno !== '' ) &&
                        <BtnTouch
                            title='Eliminar Alumno'
                            action={ () => {
                                handleDelete();
                                navigation.popToTop();
                            }}
                            backgroundColor='violet'
                        />
                    }
                    { /* Formulario */ }
                    <Text
                        style={ appTheme.title }
                    >
                        Formulario de alumnos
                    </Text>
                    <TextInput
                        style={ appTheme.input }
                        value={ state.nombre }
                        onChangeText={ (text) => handleInputChange('nombre',text) }
                        placeholder="Nombre del alumno"
                    />
                    <TextInput
                        style={ appTheme.input }
                        value={ state.ap_paterno }
                        onChangeText={ (text) => handleInputChange('ap_paterno',text) }
                        placeholder="Apellido paterno del alumno"
                    />
                    <TextInput
                        style={ appTheme.input }
                        value={ state.ap_materno }
                        onChangeText={ (text) => handleInputChange('ap_materno',text) }
                        placeholder="Apellido materno del alumno"
                    />
                    <TextInput
                        style={ appTheme.input }
                        value={ state.matricula }
                        onChangeText={ (text) => handleInputChange('matricula',text) }
                        placeholder="Matricula del alumno"
                    />
                    <BtnTouch
                        title='Seleccionar imagen'
                        action={ pickImage }
                        backgroundColor="black"
                    />
                    {
                        ( state.image !== '' ) &&
                        (
                            <Image
                                source={{ uri: `data:image/jpeg;base64,${state.image}` }}
                                style={{ width: 150, height:150, borderRadius: 20 }}
                            />
                        )
                    }
                    <TextInput
                        style={ appTheme.input }
                        value={ state.password }
                        secureTextEntry={true}
                        onChangeText={ (text) => handleInputChange('password',text) }
                        placeholder="Contraseña del alumno"
                    />
                    <TextInput
                        style={ appTheme.input }
                        value={ state.carrera }
                        onChangeText={ (text) => handleInputChange('carrera',text) }
                        placeholder="Carrera del alumno"
                    />
                    <BtnTouch
                        action={ () => {
                            handleSubmit();
                            navigation.popToTop();
                        }}
                        title={ ( state.id_alumno !== '' ) ? 'Actualizar registro' : 'Crear Registro' }
                        backgroundColor="black"
                    />
                    <BtnTouch
                        action={ () => {
                            navigation.popToTop();
                        }}
                        title="Regresar"
                        backgroundColor="violet"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
