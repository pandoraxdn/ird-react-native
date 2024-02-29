import React from "react";
import { TouchableOpacity, View, Text, Dimensions, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CharacterSimple } from "../interfaces/rickMortyInterface";

interface Props{
    character: CharacterSimple;
}

const widthWindows = Dimensions.get('window').width;

export const CharacterCard = ( { character }: Props ) => {

    const navigation = useNavigation();

    const estado = ( status: string ) => {
        switch( status ){
            case 'Alive':
                return "#3DDEDE";
            case 'Dead':
                return "rgba(25, 30, 30, 0.9)";
            default:
                return "hsl(180, 14%, 28%)";
        }
    }

    return(
        <TouchableOpacity
            key={ `#${character.id}${character.name}` }
            activeOpacity={ 0.9 }
            onPress={ () => {
                navigation.navigate('CharacterDetailScreen',{ CharacterSimple: character });
            }}
        >
            <View
                style={{
                    ...styles.cardContainer,
                    width: widthWindows * 0.4,
                    backgroundColor: estado(character.status),
                }}
            >
                <Text
                    style={ styles.name }
                >
                    { '#' + character.id + '\n' }
                    { character.name }
                </Text>
                <Image
                    style={ styles.characterImage }
                    source={{
                        uri: character.image
                    }}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardContainer:{
        marginHorizontal: 10,
        height: 100,
        width: 100,
        marginBottom: 25,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: 'green',
        borderWidth: 2,
        borderColor: "#808000"
    },
    name:{
        marginHorizontal: 20,
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    characterImage:{
        opacity: 0.7,
        width: 80,
        height: 80,
        position: 'absolute',
        right: -8,
        bottom: -5,
        borderRadius: 100,
    }
});
