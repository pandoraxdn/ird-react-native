import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';

interface Alumno{
    nombre: string;
    apellido: string;
    matricula: string;
    edad: number;
}

export const ContadorScreen = () => {

    const valorIncial:number = 10;

    const [ valor, setValor ] = useState(valorIncial);

    const alumno:Alumno = {
        nombre: "Citlalli",
        apellido: 'Lopez',
        matricula: 'al2217161',
        edad: 20
    }

    return(
        <View>
            <Text>
                { alumno.nombre }
                { '\n' }
                { alumno.apellido }
                { '\n' }
                { alumno.matricula }
                { '\n' }
                { alumno.edad }
            </Text>
            <Text>
                { JSON.stringify(alumno) }
            </Text>
            <Text>
                { `Estudiante: ${alumno.nombre} ${alumno.apellido}, Matricula: ${alumno.matricula} Edad: ${alumno.edad}` }
            </Text>
            <Text> Contador: {valor} </Text>
            <Text> Contador: {valor} </Text>
            <Button
                title='+'
                onPress={ () => setValor(valor + 1) }
            /> 
            <Button
                title='reset'
                onPress={ () => setValor(valorIncial) }
            /> 
            <Button
                title='-'
                onPress={ () => setValor(valor - 1) }
            /> 
        </View>
    );
}
