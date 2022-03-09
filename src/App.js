import './App.css';
import NavBar from "./components/NavBar/NavBar";
import PokemonList from "./components/PokemonList/PokemonList";
import {connect} from "react-redux";
import {toggleLoading, toggleTheme} from "./redux/main_reducer";

function App() {
  return (
      <>
        <NavBar/>
          <div style={{height: '60px'}}/>
        <PokemonList/>
      </>
  );
}
const mapStateToProps = (state) => ({
    darkTheme: state.main.darkTheme,
    loading: state.main.loading,
    types: state.main.types
});
export default connect(mapStateToProps, {toggleTheme, toggleLoading})(App);
