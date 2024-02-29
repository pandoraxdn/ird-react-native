import React from 'react';
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';
import { useRickMortyPaginated } from '../../hooks/useRickMortyPaginated';
import { CharacterCard } from '../../components/CharacterCard';
import { appTheme } from '../../theme/appTheme';

export const HomeScreen = () => {

    const { simpleCharacter, loadCharacters } = useRickMortyPaginated();

    return(
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Image
                style={{
                    height: 300,
                    width: 300,
                    opacity: 0.8,
                    borderRadius: 150,
                    top: -100,
                    right: -60,
                    position: 'absolute'
                }}
                source={{
                    uri: 'https://i.pinimg.com/564x/88/b5/f6/88b5f6ab99941a7d071c11d27c4501c1.jpg'
                }}
            />
            <FlatList
                data={ simpleCharacter } // Data
                keyExtractor={(character) => character.name} // Extraer id de cada interarción
                // Header
                ListHeaderComponent={(
                    <Text
                        style={{
                            ...appTheme.title,
                            marginTop: 200,
                            marginBottom: 10,
                        }}
                    >
                        Lista de personajes
                    </Text>
                )} 
                // Body
                showsVerticalScrollIndicator={false}
                numColumns={ 2 } // Aviso si yo cambio esto debo reiniciar el app
                renderItem={ ({ item }) =>(
                    <CharacterCard
                        character={ item }
                    />
                )}
                // Infinite scroll
                onEndReached={ loadCharacters }
                onEndReachedThreshold={ 0.2 }

                // Footer
                ListFooterComponent={(
                    <ActivityIndicator
                        style={{ height: 100 }}
                        size={40}
                        color="violet"
                    /> 
                )}
            />
            {/*
            <Text>
                HomeScreen
            </Text>
            {
                simpleCharacter.map(( personaje ) =>{
                    return(
                        <Text
                            key={ personaje.id }
                        >
                            { JSON.stringify(personaje) }
                        </Text>
                    )
                })
            }
            */}
        </View>
    );
}

