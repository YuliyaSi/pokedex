const SHOW_INFO = 'SHOW-INFO';

let initialState = {
    show: false,
};

const pokeItem_reducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_INFO:
            return {
                ...state,
                show: !state.show
            };
        default:
            return state;
    }
}

export const toggleShowInfo = () => ({type: SHOW_INFO})

export default pokeItem_reducer;