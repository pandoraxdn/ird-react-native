import { useEffect, useState } from "react";
import { pandoraApi } from "../api/pandoraApi";
import { AlumnosResponse } from "../interfaces/pandoraApi";
import { FormData } from "./useFormAlumno";

export const useAlumnoApi = () => {

    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ listAlumnos, setListAlumnos ] = useState<AlumnosResponse>({} as AlumnosResponse);
    
    const apiUrl: string = 'http://192.168.100.100:3000/api/v1/alumnos';

    const loadAlumnos = async () => {
        
        setIsLoading( false );

        const response = await pandoraApi.get<AlumnosResponse>( apiUrl );

        setListAlumnos( response.data );

        setIsLoading( true );

    }

    const createUsuario = async( data: FormData ) => {

        const dataBody = {
            nombre:     data.nombre,
            ap_paterno: data.ap_paterno,
            ap_materno: data.ap_materno,
            matricula:  data.matricula,
            carrera:    data.carrera,
            password:   data.password
        }

        await pandoraApi.post( apiUrl, dataBody );
        
    }

    const updateUsuario = async( data: FormData ) => {

        const dataBody = {
            nombre:     data.nombre,
            ap_paterno: data.ap_paterno,
            ap_materno: data.ap_materno,
            matricula:  data.matricula,
            carrera:    data.carrera,
            password:   data.password
        }

        await pandoraApi.put( apiUrl + `/${data.id_alumno}`, dataBody );
        
    }

    const deleteUsuario = async( data: FormData ) => {

        await pandoraApi.delete( apiUrl + `/${data.id_alumno}` );
        
    }

    useEffect( () => {
        loadAlumnos();
    },[]);

    return{
        isLoading,
        loadAlumnos,
        listAlumnos,
        createUsuario,
        updateUsuario,
        deleteUsuario
    }

}
