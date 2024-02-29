import { useEffect, useState } from "react";
import { rickMortyApi } from "../api/rickMortyApi";
import { Result as CharacterFull } from "../interfaces/rickMortyInterface";

interface useRickAndMortyCharacter{
    isLoading: boolean;
    characterFull: CharacterFull;
}

export const useRickAndMortyCharacter = ( id: number ) => {
    
    const [ isLoading, setIsLoading ] = useState<boolean>(true);

    const [ characterFull, setCharacterFull ] = useState<CharacterFull>({} as CharacterFull);

    const urlApi: string = 'https://rickandmortyapi.com/api/character';

    const loadCharacter = async () => {

        setIsLoading(false);

        const response = await rickMortyApi.get<CharacterFull>(`${urlApi}/${id}`);

        setCharacterFull( response.data ) 

        setIsLoading(true);

    }

    useEffect( () => {
      loadCharacter();  
    },[]);

    return { isLoading, characterFull };

}
