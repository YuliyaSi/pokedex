import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleWare from 'redux-thunk'
import main_reducer from "./main_reducer";
import pokeItem_reducer from "./pokeItem_reducer";
import pokemon_reducer from "./pokemon_reducer";


let reducers = combineReducers({
    main: main_reducer,
    showInfo: pokeItem_reducer,
    listPokemons: pokemon_reducer
})

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleWare)));

export default store;