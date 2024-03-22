import React, { useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { RootStackAlumnosParam } from '../../navigator/AlumnosNavigator';
import { StackScreenProps } from '@react-navigation/stack';
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
        handleInputChange('password','');
    },[]);

    return(
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
            <TextInput
                style={ appTheme.input }
                value={ state.image }
                onChangeText={ (text) => handleInputChange('image',text) }
                placeholder="Imagen del alumno"
            />
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
    );
}
