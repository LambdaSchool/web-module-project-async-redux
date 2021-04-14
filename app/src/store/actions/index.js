import axios from "axios";

/*
fetch
start
success
failure
reset loading

 */

export const FETCH_POKEMON_START = "FETCH_POKEMON_START";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";
export const FETCH_POKEMON_COMPLETE = "FETCH_POKEMON_COMPLETE";

export const fetchData = () => {
  return (dispatch) => {
    // Render loading
    dispatch({ type: FETCH_POKEMON_START });

    axios
      .get("https://pokeapi.co/api/v2/pokemonoooo?limit=151")
      .then((res) => {
        console.log(res.data.results);
        return dispatch({
          type: FETCH_POKEMON_SUCCESS,
          payload: res.data.results,
        });
      })
      //compose total, next/prev,
      .catch((err) => console.log(err.response.status, err.response.data))
      .finally(dispatch({ type: FETCH_POKEMON_COMPLETE }));
  };
};
