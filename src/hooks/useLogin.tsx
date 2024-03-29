import { useReducer, useState, useContext } from 'react';
import { pandoraApi } from './../api/pandoraApi';
import { RequestLogin } from '../interfaces/pandoraApi';
import { AuthContext } from '../context/AuthContext';

export interface LoginData{
    matricula: string;
    password: string;
}

const initialLoginData: LoginData = {
    matricula: '',
    password: ''
}

type Action = 
    { type: 'handleInputChange', payload: { fieldName: keyof LoginData, value: string } };

const dataReducer = ( state: LoginData, action: Action ) => {
    switch( action.type ){
        case 'handleInputChange':
            return {
                ...state,
                [ action.payload.fieldName ] : action.payload.value,
            }
        default:
            return { ...state };
    }
}

export const useLogin = () => {

    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ state, dispatch ] = useReducer( dataReducer, initialLoginData );
    const [ request, setRequest ] = useState<RequestLogin>();
    const { authState, singIn, changeUsername, changeFavoriteImage, changeMatricula } = useContext( AuthContext );

    const handleInputChange = ( fieldName: keyof LoginData, value: string ) => {
        dispatch({ type: "handleInputChange", payload:{ fieldName, value } });
    }

    const handleLogin = async () => {

        setIsLoading( false );

        const apiUrl: string = 'http://192.168.100.100:3000/api/v1/alumnos/login';

        const dataBody = {
            matricula: state.matricula,
            password: state.password
        }

        try{

            const response = await pandoraApi.post<RequestLogin>(apiUrl, dataBody); 

            ( response.data !== false ) && ( () => {

                const user = response.data;

                singIn();
                changeUsername( `${user.nombre} ${user.ap_paterno} ${user.ap_materno}` );
                changeFavoriteImage( user.image );
                changeMatricula( user.matricula );
                setRequest( response.data );

            })();

        }catch( error ){
            console.log("No se recibieron correctamente los datos.")
            setRequest( false );
        }

        setIsLoading( true );

    }

    return { state, handleInputChange, handleLogin, isLoading, request };

}
