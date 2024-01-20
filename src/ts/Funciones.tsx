import React from 'react';
import { View, Text } from 'react-native';

const mostrarI = ():void => console.log("hola");

mostrarI();

const mostrarII = ():void => {
    console.log("Mensaje de bienvenida");
}

mostrarII();

const saludo = (nombre:string):void => {
    console.log(`Hola: ${nombre}`);
}

saludo("Diana");
saludo("Citlalli");

const user_detail = ( nombre: string, apellido: string, edad?:number ):void => {
    console.log(`User: ${nombre} ${apellido}`, (edad) ? edad : '');
}

user_detail( "Rodrigo", "Lazcano", 27 );
user_detail( "Eveline", "Lozano");

const cartaPostres = ( postre:string, ...frutas:string[] ):void => {
    console.log(`Postre: ${postre} Ingredientes: ${frutas}`);
}

cartaPostres( "Pie Manzana", "Manzana" );
cartaPostres( "Pie Frutas", "naranja", "mango", "uva pasa", "fresas" );

const suma = ( paramA: number, paramB: number ):number => {
    return paramA + paramB;
}

console.log( suma(10,20), suma(2,2) );

export const Funciones = () => {

    return(
        <View>
            <Text
                style={{ fontSize: 40 }}
            >
                Funciones
            </Text>
        </View>
    )
}
