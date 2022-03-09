import axios from "axios";

const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
});

export const pokeApi = {
    getPokeAll(id) {
        return instance.get(`pokemon/${id}/`)
    },
    getPokeByType(type) {
        return instance.get(`type/${type}/`)
            .then(response => response.data)
            .then(data => data.pokemon)
            .then(list => list.map(i => i.pokemon.url))
    },
    getPoke(url) {
        return axios.get(`${url}`)
    },
}

