import {pokeApi} from "../api/api";

const SET_POKEMONS = 'SET-POKEMONS', SET_URLS = 'SET-URLS', SET_TYPE = 'SET-TYPE', SET_AMOUNT = 'SET-AMOUNT';

let initialState = {
    pokemons: [],
    amount: 20,
    type: 'All types',
    urls: [],
};

const pokemon_reducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_POKEMONS:
            return {
                ...state,
                pokemons: [...action.pokemons]
            };
        case SET_URLS:
            return {
                ...state,
                urls: [...action.urls]
            };
        case SET_TYPE:
            return {
                ...state,
                type: action.typeNeed
            };
        case SET_AMOUNT:
            return {
                ...state,
                amount: state.amount + 20
            };
        default:
            return state;
    }
}

export const setPokemons = (pokemons) => ({type: SET_POKEMONS, pokemons})
export const setUrls = (urls) => ({type: SET_URLS, urls})
export const setType = (typeNeed) => ({type: SET_TYPE, typeNeed})
export const setAmount = () => ({type: SET_AMOUNT})

// thunk creators
export const getPokemonsList = (type, amount, urls) => async (dispatch) => {
    let promises;

    if(type === 'All types') {
        promises = new Array(amount).fill().map((v, i) => pokeApi.getPokeAll(i + 1));
    } else {
        dispatch(getUrls(type))
        promises = urls.slice(0, amount).map(i => pokeApi.getPoke(i));
    }
    Promise.all(promises)
        .then(response => response.map(value => value.data))
        .then(data => dispatch(setPokemons(data)));
}

const getUrls = (type) => async (dispatch) => {
    let urls = await pokeApi.getPokeByType(type);
    dispatch(setUrls(urls));
}


export default pokemon_reducer