export interface RickMortyInitialResponse {
    characters: string;
    locations: string;
    episodes: string;
}

export interface RickMortyPaginateResponse {
    info:    Info;
    results: Result[];
}

export interface CharacterSimple{
    id:     number;
    name:   string;
    status: Status;
    gender: Gender;
    image:  string;
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null | string;
}

export interface Result {
    id:       number;
    name:     string;
    status:   Status;
    species:  Species;
    type:     string;
    gender:   Gender;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export interface Location {
    name: string;
    url:  string;
}

export enum Species {
    Alien = "Alien",
    Human = "Human",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}
