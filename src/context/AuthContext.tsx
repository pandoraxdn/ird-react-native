import React, { createContext, ReactNode, useReducer } from "react";
import { authReducer } from "./authReducer";

// Definir como va a trabajar el context
// Propiedades del context (estado global)
export interface AuthState{
    isLoggenIn: boolean;
    username?: string | undefined;
    favoriteImage?: string | undefined;
}

// Definición del state inicial
export const AuthInicialState: AuthState = {
    isLoggenIn: false,
    username: undefined,
    favoriteImage: undefined,
}

// Tipado del context que manejará otros componentes
export interface AuthContextProps{
    authState: AuthState;
    singIn: () => void;
    changeUsername: ( userName: string ) => void;
    logout: () => void;
    changeFavoriteImage: ( sourceImage: string ) => void;
}

// Crear el context
export const AuthContext = createContext( {} as AuthContextProps );

export const AuthProvider = ( { children }: { children: ReactNode } ) => {

    // Reducer, implementar para uso del context
    const [ authState, dispatch ] = useReducer(authReducer, AuthInicialState);

    const singIn = (): void => dispatch( { type: "singIn" } );

    const logout = (): void => dispatch( { type: "logout" } );

    const changeUsername = ( userName: string ): void => {
        dispatch( { type: "changeUsername", payload: userName } );
    }

    const changeFavoriteImage = ( sourceImage: string ): void => {
        dispatch( { type: "changeFavoriteImage", payload: sourceImage } );
    }

    return(
        <AuthContext.Provider
            value={{
                authState,
                singIn,
                logout,
                changeFavoriteImage,
                changeUsername
            }}
        >
            { children }
        </AuthContext.Provider>
    );

}
