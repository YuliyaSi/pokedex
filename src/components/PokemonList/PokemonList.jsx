import React, {useEffect} from 'react';
import Pokemon from "./Pokemon/Pokemon";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {getPokemonsList, setAmount, setPokemons} from "../../redux/pokemon_reducer";
import Preloader from "../Preloder/Preloader";
import styles from "./PokemonList.module.css"

const PokemonList = ({ pokemons, amount, type, urls, getPokemonsList, setAmount }) => {

    useEffect(() => {
        getPokemonsList(type, amount, urls)
    }, [type, amount, urls]);

    const downloadMore = () => {
        setAmount()
    }

    return (pokemons.length === 0) ? <Preloader/> : (
        <div>
            <div className={styles.pokeHolder}>
                {pokemons?.map(poke => <div key={poke.id}><Pokemon pokemon={poke}/></div>)}
            </div>
            <div className="d-grid gap-2">
                <Button size="lg" variant={'outline-dark'} onClick={downloadMore}>Download more...</Button>
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

export default connect(mapStateToProps, {getPokemonsList, setAmount, setPokemons})(PokemonList);