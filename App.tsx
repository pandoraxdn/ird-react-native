import React, { ReactNode } from 'react';
//import { View, Text } from 'react-native';
//import { TiposDatos } from './src/ts/TiposDatos';
//import { Funciones } from './src/ts/Funciones';
//import { Interfaces } from './src/ts/Interfaces'; 
//import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
//import { ContadorScreen } from './src/screens/ContadorScreen';
//import { ComponenteBasico } from './src/screens/ComponenteBasico';
//import { ComponenteStyleScreen } from './src/screens/ComponenteStyleScreen';
//import { DimensionesScreen } from './src/screens/DimensionesScreen';
//import { BoxObjectModel } from './src/screens/BoxObjectModel';
//import { FlexScreen } from './src/screens/FlexScreen';
//import { FlexDirectionScreen } from './src/screens/FlexDirectionScreen';
//import { ContadorFabScreen } from './src/screens/ContadorFabScreen';
//import { ContadorCustomScreen } from './src/screens/ContadorCustomScreen';
//import { CounterReducerScreen } from './src/screens/CounterReducerScreen';
//import { ScreenUseCounterReducer } from './src/screens/ScreenUseCounterReducer';
//import { StackNavigator } from './src/navigator/StackNavigator';
//import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { AuthProvider } from './src/context/AuthContext';


const App = () => {

    return (
        <NavigationContainer>
            <AppState>
                <DrawerNavigator />
            </AppState>
        </NavigationContainer>
    );

}

const AppState = ( { children }: { children: ReactNode } ) => {
    return(
        <AuthProvider>
            { children }
        </AuthProvider>
    );
}

export default App;
