const TOGGLE_THEME = 'TOGGLE-THEME', TOGGLE_LOADING = 'TOGGLE-LOADING';

let initialState = {
    darkTheme: false,
    loading: false,
    types: ['grass', 'poison', 'fire', 'flying', 'water', 'bug', 'normal', 'electric', 'ground', 'fairy', 'fighting', 'psychic', 'rock', 'steel', 'ice', 'ghost', 'dark', 'dragon'],
};

const main_reducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                darkTheme: !state.darkTheme
            };
        case TOGGLE_LOADING:
            return {
                ...state,
                loading: !state.loading
            };
        default:
            return state;
    }
}

export const toggleTheme = () => ({type: TOGGLE_THEME});
export const toggleLoading = () => ({type: TOGGLE_LOADING});

export default main_reducer;