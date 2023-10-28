import { AllCharacters } from '../types/types';

class Service {
  getResources = async (url: string) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not featch ${url}, status ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = async (): Promise<AllCharacters> => {
    const res = (await this.getResources(
      `https://swapi.dev/api/people`
    )) as AllCharacters;
    return res;
  };

  getSearchCharacter = async (nameSearch: string): Promise<AllCharacters> => {
    const res = (await this.getResources(
      `https://swapi.dev/api/people/?search=${nameSearch}`
    )) as AllCharacters;
    return res;
  };
}

export default Service;
