import { instance } from "./instance";

export const getPokemon = async (name: string) => {
    const response = await instance.get(`/${name}`);
    return response.data;
  }