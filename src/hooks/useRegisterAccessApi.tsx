import { useState} from 'react';
import { pandoraApi } from './../api/pandoraApi';

export const useRegisterAccessApi = () => {

    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ request, setRequest ] = useState<boolean>();


    const requestRegister = async ( matricula: string ) => {

        setIsLoading( false );

        const apiUrl: string = 'http://192.168.100.100:3000/api/v1/alumnos/register-access';

        const dataBody = {
            matricula
        }

        try{

            const response = await pandoraApi.post(apiUrl, dataBody); 

            ( response.data !== false ) && ( () => {

                setRequest( true );

            })();

        }catch( error ){

            console.log("No se recibieron correctamente los datos.")

            setRequest( false );

        }

        setIsLoading( true );

    }

    return { isLoading, request, requestRegister };

}
