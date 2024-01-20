import React from 'react';
import { View, Text } from 'react-native';

const nombre:string = "Rodrigo";
let edad:number|string = 27;

edad = "28";

console.log( nombre, edad );

let si:boolean = true;
let no:boolean = false;

console.log( (si) ? 'Verdadero' : 'Falso', no );

let arreglo:number[] = [1,2,3,4,5,6]; 
let arreglo2:Array<number> = [1,2,3,4,5,6];

let arreglo3:string[] = ["a","b","c","d"];

console.log( arreglo, arreglo2, arreglo3 );

const tuple:[number,string,boolean] = [1,"Martha",true];

console.log(tuple);


export const TiposDatos = () => {

    return (
        <View>
            <Text
                style={{ fontSize: 40 }}
            >
                Tipos de datos
            </Text>
        </View>
    );

}
