import React, {useEffect} from 'react';
import Pokemon from "./Pokemon/Pokemon";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {getPokemonsList} from "../../redux/pokemon_reducer";

const PokemonList = ({ pokemons, amount, type, urls, getPokemonsList }) => {
    useEffect(() => {
        getPokemonsList(type, amount, urls)
    }, [type, amount, urls])
    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center",
                width: '100%',
                flexWrap: "wrap"
            }}>
                {pokemons?.map(poke => <div key={poke.id}><Pokemon pokemon={poke}/></div>)}
            </div>
            <div className="d-grid gap-2">
                <Button size="lg" variant={'outline-dark'}>Download more...</Button>
            </div>
        </div>

    );
}

const mapStateToProps = (state) => ({
    pokemons: state.listPokemons.pokemons,
    amount: state.listPokemons.amount,
    type: state.listPokemons.type,
    urls: state.listPokemons.urls,
    promises: state.listPokemons.promises,

});

export default connect(mapStateToProps, {getPokemonsList})(PokemonList);