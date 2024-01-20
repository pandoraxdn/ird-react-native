import React from 'react';
import { View, Text } from 'react-native';

interface Persona{
    nombre:string;
    edad:number;
}

interface User{
    username: string;
    avatar: string;
    email: string;
    location?: string;
}

let user1:Persona = {
    nombre: "Rodrigo",
    edad: 27,
}

console.log(user1);

const user_info = ( user:Persona ): Persona => {
    user.nombre = "Damian"
    return user;
}

console.log( user_info(user1) );


const usuario:User = {
    username: "pandoraxdn",
    avatar: "user.png",
    email: "patito@gmail.com",
}


console.log( usuario );

const usuario2:User = {
    username: "azami",
    avatar: "user.png",
    email: "azami@gmail.com",
    location: "Santo #23"
}

console.log( usuario2 );

interface Empleado{
    readonly noTrabajador: number|string;
    readonly area: string;
    readonly nombre: string;
    readonly apellido: string;
}

const empleado: Empleado = {
    noTrabajador: "Sys-1",
    area: "Sistemas",
    nombre: "Rodrigo",
    apellido: "Lazcano",
}

console.log( empleado );


export const Interfaces = () => {

    return(
        <View>
            <Text>
                Interfaces
            </Text>
        </View>
    )
}
