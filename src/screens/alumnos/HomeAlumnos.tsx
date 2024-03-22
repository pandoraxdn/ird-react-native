import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, RefreshControl} from 'react-native';
import { AlumnosResponse } from '../../interfaces/pandoraApi';
import { appTheme } from '../../theme/appTheme';
import { useAlumnoApi } from '../../hooks/useAlumnoApi';
import { BtnTouch } from '../../components/BtnTouch';
import { useNavigation, useIsFocused } from '@react-navigation/native';

export const HomeAlumnos = () => {

    const { listAlumnos, isLoading, loadAlumnos } = useAlumnoApi();
    const isFocused = useIsFocused();
    const navigation = useNavigation();

    const createAlumno: AlumnosResponse = {
        id_alumno:  '',
        nombre:     '',
        ap_paterno: '',
        ap_materno: '',
        image:      '',
        matricula:  '',
        carrera:    '',
        password:   '',
    }

    useEffect( () => {
        (isLoading) && loadAlumnos();
    },[ isFocused ]);

    return(
        <View
            style={ appTheme.containerGlobal }
        >
            <FlatList
                data={ Object.values( listAlumnos ) }
                keyExtractor={ (item) => '#'+item.id_alumno }
                ListHeaderComponent={(
                    <View>
                        <Text
                            style={{
                                ...appTheme.title,
                                marginTop: 20
                            }}
                        >
                            Lista de Alumnos
                        </Text>
                        {
                            ( !isLoading ) &&
                            <ActivityIndicator
                                style={{ height: 100 }}
                                size={ 40 }
                                color="pink"
                            />
                        }
                        <BtnTouch
                            title='Crear tarea'
                            action={ () => navigation.navigate("FormAlumnosScreen",{ AlumnosResponse: createAlumno }) }
                            backgroundColor='#5DADE2'
                        />
                    </View>
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={ (!isLoading) }
                        onRefresh={ loadAlumnos }
                        colors={ ["pink"] }
                        progressBackgroundColor="black"
                    />
                }
                showsVerticalScrollIndicator={ false }
                numColumns={ 2 }
                renderItem={ ( { item } ) => (
                    <BtnTouch
                        title={ item.nombre }
                        action={ () => navigation.navigate("FormAlumnosScreen",{ AlumnosResponse: item }) }
                        backgroundColor='violet'
                    />
                )}
            />
        </View>
    );

}
