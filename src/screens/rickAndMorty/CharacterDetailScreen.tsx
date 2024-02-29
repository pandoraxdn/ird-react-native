import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator, ScrollView } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootRickMortyParams } from "../../navigator/RickMortyNavigator";
import { useRickAndMortyCharacter } from "../../hooks/useRickaAndMortyCharacter";

interface Props extends StackScreenProps<RootRickMortyParams,'CharacterDetailScreen'>{};

export const CharacterDetailScreen = ( { navigation, route }: Props ) => {


    const { CharacterSimple } = route.params;

    const { id, name, gender, status, image } = CharacterSimple;

    const { isLoading, characterFull } = useRickAndMortyCharacter( id );

    const genero = ( gender: string ) => {
        switch( gender ){
            case 'Male':
                return "#5DADE2";
            case 'Female':
                return "#F286EF";
            default:
                return "#7D3C98";
        }
    }

    const estado = ( status: string ) => {
        switch( status ){
            case 'Alive':
                return "rgba(61, 222, 222,0.9)";
            case 'Dead':
                return "rgba(25, 30, 30, 0.9)";
            default:
                return "rgba(70, 53, 53, 0.9)";
        }
    }

    const estado_ii = ( status: string ) => {
        switch( status ){
            case 'Alive':
                return "rgba(61, 222, 222,0.5)";
            case 'Dead':
                return "rgba(25, 30, 30, 0.5)";
            default:
                return "rgba(70, 53, 53, 0.5)";
        }
    }

    return(
        <View
            style={{ flex: 1 }}
        >
            {/* Header */}
            <View
                style={ styles.headerContainer }
            >
                <View 
                    style={{
                        ...styles.leftContainer,
                        backgroundColor: estado(status)
                    }}
                />
                <View 
                    style={{
                        ...styles.rightContainer,
                        backgroundColor: estado_ii(status)
                    }}
                />
                <TouchableOpacity
                    style={ styles.backBtn }
                    onPress={ () => navigation.navigate("HomeScreen") }
                >
                    <Text
                        style={ styles.row }
                    >
                        ←
                    </Text>
                </TouchableOpacity>
                {/* Character name */}
                <Text
                    style={ styles.characterName }
                >
                    { name } { '\n#' + id }
                </Text>
                <View
                    style={{
                        ...styles.characterImageContainer,
                        borderColor: "white",
                    }}
                >
                    <Image
                        source={{ uri: image }}
                        style={{
                            ...styles.characterImage,
                            borderColor: genero(gender),
                        }}
                    />
                </View>
            </View>
            <ScrollView
                style={{ marginTop: 20 }}
            >
                {
                    (!isLoading)
                    ?
                    (
                        <ActivityIndicator
                            color={ genero(gender) }
                            size={70}
                        />
                    )
                    :
                    (
                        <View>
                            {/* Nota: "!!" sirve para validar si la petición ha sido
                                completada y validar si el customhook termino de 
                                almacenar los datos del state.
                                Y si se cumple la condición de "!!", entonces por medio de "&&"
                                mostrar los datos, si no se cumple la primer condición, la segunda no  
                                se mostrará.
                            */}
                            <Text
                                style={{
                                    ...styles.characterName,
                                    marginTop:0,
                                    color: genero(gender)
                                }}
                            >
                                Name: 
                                { '\n' }
                                { (!!characterFull.name) && characterFull.name }
                            </Text>
                            <Text
                                style={{
                                    ...styles.characterName,
                                    marginTop:0,
                                    color: "black",
                                    fontSize: 20,
                                }}
                            >
                                Origin: {'\n'}
                                { (!!characterFull.origin) && characterFull.origin.name }
                            </Text>
                            <Text
                                style={{
                                    ...styles.characterName,
                                    marginTop:0,
                                    color: "black",
                                    fontSize: 20,
                                }}
                            >
                                Location: {'\n'}
                                { (!!characterFull.location) && characterFull.location.name }
                            </Text>
                            <Text
                                style={{
                                    ...styles.characterName,
                                    marginTop:0,
                                    color: "black",
                                    fontSize: 20,
                                }}
                            >
                                Episode(s): {'\n'}
                                { (!!characterFull.episode) && characterFull.episode.map( (episode) => { 
                                    const url_episode = episode.split('/');
                                    const no_episode = url_episode[ url_episode.length - 1 ];
                                    return no_episode + '\n';
                                })}
                            </Text>
                        </View>
                    )
                }
            </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
    headerContainer:{
        alignItems: "center",
        height: 370,
        zIndex: 999,
        borderBottomLeftRadius: 1000,
        borderBottomRightRadius: 1000,
    },
    leftContainer:{
        position: "absolute",
        left: 0,
        height: 370,
        width: "50%",
        backgroundColor: 'gray',
        borderBottomLeftRadius: 1000,
    },
    rightContainer:{
        position: "absolute",
        right: 0,
        height: 370,
        width: "50%",
        backgroundColor: 'black',
        borderBottomRightRadius: 1000,
    },
    row:{
        fontWeight: "bold",
        color: "white",
        fontSize: 50
    },
    backBtn:{
        position: "absolute",
        left: 20,
    },
    characterName:{
        color: "white",
        fontSize: 30,
        alignSelf: "flex-start",
        left: 20,
        marginTop: 50,
        marginLeft: 20,
    },
    characterImageContainer:{
        bottom: -4,
        height: 207,
        position: "absolute",
        width: 207,
        borderRadius: 200,
        borderWidth: 10,
        backgroundColor: "white",
        alignItems: "center",
    },
    characterImage:{
        bottom: -7,
        height: 200,
        position: "absolute",
        width: 200,
        borderRadius: 200,
        borderWidth: 5,
    }
});
