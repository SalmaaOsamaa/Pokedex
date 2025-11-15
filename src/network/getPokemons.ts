import { instance } from "./instance";

export const getPokemons = async (limit: number = 10, offset: number = 0) => {
    const response = await instance.get(`/?limit=${limit}&offset=${offset}`);
    return response.data;
  }