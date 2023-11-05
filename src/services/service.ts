import { AllCharacters } from '../types/types';

const Service = () => {
  const getResources = async (url: string) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not featch ${url}, status ${res.status}`);
    }

    return await res.json();
  };

  const getAllCharacters = async (): Promise<AllCharacters> => {
    const res = (await getResources(
      `https://swapi.dev/api/people`
    )) as AllCharacters;
    return res;
  };

  const getSearchCharacter = async (
    nameSearch: string
  ): Promise<AllCharacters> => {
    const res = (await getResources(
      `https://swapi.dev/api/people/?search=${nameSearch}`
    )) as AllCharacters;
    return res;
  };

  return { getResources, getAllCharacters, getSearchCharacter };
};

export default Service;
