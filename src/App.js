import './App.css';
import NavBar from "./components/NavBar/NavBar";
import PokemonList from "./components/PokemonList/PokemonList";
import {connect} from "react-redux";
import {toggleLoading} from "./redux/main_reducer";
import {useEffect} from "react";
import Preloader from "./components/Preloder/Preloader";

const App = ({loading, toggleLoading}) => {

    useEffect(() => {
        toggleLoading()
    }, []);

    if (loading) {
        return <Preloader/>
    } else {
        return (
            <>
            <NavBar/>
            <div style={{height: '60px'}}/>
            <PokemonList/>
        </>
        )
    }


}

const mapStateToProps = (state) => ({
    loading: state.main.loading,
    types: state.main.types
});
export default connect(mapStateToProps, {toggleLoading})(App);
