import React from 'react';
import { View, Text } from 'react-native';

interface Props{
    nombre: string;
}

const NombreAlumno = ( { nombre }:Props ) => {
    return(
        <View>
            <Text>
                {nombre}
            </Text>
        </View>
    );
}

export const ComponenteBasico = () => {

    const alumn1 = {
        nombre: "Maria",
    }

    return(
        <View
            style={{ flex:1, justifyContent: "center", alignItems: "center" }}
        >
            <NombreAlumno 
                {...alumn1} 
            />
            <NombreAlumno
                nombre={alumn1.nombre}
            />
            <NombreAlumno
                nombre='Maria'
            />
        </View>
    );

}
