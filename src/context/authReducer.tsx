import { AuthState } from "./AuthContext";

type AuthAction = 
    | { type: "singIn" }
    | { type: "logout" }
    | { type: "changeFavoriteImage", payload: string }
    | { type: "changeUsername", payload: string };

export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {

    switch( action.type ){
        case 'singIn':
            return {
                ...state,
                isLoggenIn: true,
                username: 'no_name_user_yet',
            }
        case 'logout':
            return{
                ...state,
                isLoggenIn: false,
                username: undefined,
                favoriteImage: undefined,
            }
        case 'changeFavoriteImage':
            return{
                ...state,
                favoriteImage: action.payload,
            }
        case 'changeUsername':
            return{
                ...state,
                username: action.payload,
            }
        default:
            return { ...state };
    }

}
