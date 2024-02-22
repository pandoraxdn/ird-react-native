import { useEffect, useRef, useState } from "react";
import { rickMortyApi } from "../api/rickMortyApi";
import { RickMortyPaginateResponse, Result, CharacterSimple } from "../interfaces/rickMortyInterface";

export const useRickMortyPaginated = () => {
    
    const [ isLoading, setIsLoading ] = useState<boolean>(true);

    const [ simpleCharacter, setSimpleCharacter ] = useState<CharacterSimple[]>([]);

    const nextPageUrl = useRef('https://rickandmortyapi.com/api/character');

    const loadCharacters = async () => {

        setIsLoading(true);

        const response = await rickMortyApi.get<RickMortyPaginateResponse>(nextPageUrl.current);

        nextPageUrl.current = response.data.info.next;

        mapCharacter( response.data.results );

        setIsLoading(false);

    }

    const mapCharacter = ( characterList: Result[] ) => {

        const newCharacterList: CharacterSimple[] = characterList.map( ( { id, name, status, gender, image } ) => {
            return { id, name, status, gender, image };
        });

        setSimpleCharacter( (prevArr) => [ ...prevArr, ...newCharacterList ]);

    }

    useEffect( () => {
      loadCharacters();  
    },[]);

    return { isLoading, simpleCharacter, loadCharacters };

}
