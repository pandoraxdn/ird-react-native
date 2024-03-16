import { useReducer } from "react";
import { useAlumnoApi } from "./useAlumnoApi";

export interface FormData{
    id_alumno:  string;
    nombre:     string;
    ap_paterno: string;
    ap_materno: string;
    matricula:  string;
    carrera:    string;
    password:   string;
}

const initialState: FormData = {
    id_alumno:  '',
    nombre:     '',
    ap_paterno: '',
    ap_materno: '',
    matricula:  '',
    carrera:    '',
    password:   '',
}

type Action = 
    { type: 'handleInputChange', payload: { fieldName: keyof FormData, value: string } };

const formReducer = ( state: FormData, action: Action ) => {
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

export const useFormUsuario = () => {

    const { createUsuario, updateUsuario, deleteUsuario } = useAlumnoApi();

    const [ state, dispatch ] = useReducer( formReducer, initialState );

    const handleInputChange = ( fieldName: keyof FormData, value: string ): void => {
        dispatch( { type: 'handleInputChange', payload: { fieldName, value } } )
    }

    const handleSubmit = () => {
        ( state.id_alumno !== '' )
        ? updateUsuario( state )
        : createUsuario( state );
    }

    const handleDelete = () => {
        ( state.id_alumno !== '' ) && deleteUsuario( state );
    }

    return { state, handleInputChange, handleDelete, handleSubmit };

}
