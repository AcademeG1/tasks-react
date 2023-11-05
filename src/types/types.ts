export interface AllCharacters {
  count: number;
  next: string;
  previous: string | null;
  results: Character[];
}

export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: [];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface CharacterProps {
  nameChar: string;
  height: string;
  hair_color: string;
  mass: string;
  gender: string;
  eye_color: string;
  index: number;
}
export interface CharProps {
  nameChar: string;
  height: string;
  hair_color: string;
  mass: string;
  gender: string;
  eye_color: string;
  index: string;
}

export interface HeaderProps {
  inputString: string;
  setInputString: (newString: string) => void;
  setCharList: (charList: Character[]) => void;
  setLoader: (flag: boolean) => void;
}

export interface MainProps {
  charList: Character[];
}
