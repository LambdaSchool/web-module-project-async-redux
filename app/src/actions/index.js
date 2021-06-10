import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getPokemon = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    //2. fetch data from api
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/2`) ///make the ' 1 ' dynamic with ${pokemonId} and backticks replacing the ""
      .then((resp) => {
        //3. if fetch is successful, Fetch_success with that data
        console.log("axios call", resp);
        dispatch(fetchSuccess(resp.data.results));
      })
      .catch((err) => {
        //4. if fetch is not successful, Fetch_Fail with error message
        dispatch(fetchFail("Sorry, looks like you're not experienced enough to view this pokemon. Try the next one.", err));
      });
  };
};

export const fetchStart = () => {
  return { type: FETCH_START };
};
export const fetchSuccess = (currentPokemon) => {
  return { type: FETCH_SUCCESS, payload: currentPokemon };
};

export const fetchFail = (error) => {
  return { type: FETCH_FAIL, payload: error };
};
