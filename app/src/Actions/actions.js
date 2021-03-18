import axios from 'axios';

export const FETCH_CHARS_BEGIN = "FETCH_CHARS_BEGIN";
export const FETCH_CHARS_WIN = "FETCH_CHARS_WIN";
export const FETCH_CHARS_FAIL = "FETCH_CHARS_FAIL";

export const fetchInfo = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_CHARS_BEGIN });
        axios
            .get('https://api.jikan.moe/v3/manga/116778/characters')
            .then((res) => {
                console.log(res.data.characters);
                dispatch({ type: FETCH_CHARS_WIN, payload: res.data.characters });
            })
            .catch((err) => {
                dispatch({ type: FETCH_CHARS_FAIL, payload: err.message });
            });
    };
};

