import axios from "axios";
import {
    CLEAR_COCKTAIL,
    LIST_CATEGORY,
    LIST_COKTAILS,
    LIST_DETAILS,
    LIST_INGR, LIST_LETTER,
    LIST_SEARCH,
    RANDOM_COCTAIL
} from "./type";
import {
    FILTER_COCKTAILS_BY_ALCOHOL,
    GET_ALL_COCKTAILS, GET_COCKTAIL_BY_LETTER,
    GET_DETAIL_BY_ID,
    GET_INGREDIENT_INFO, GET_RANDOM_COCKTAIL,
    SEARCH_COCKTAILS_BY_NAME
} from "../../config";


export const getAllCocktails = (name='Cocktail') => {
    return async (dispatch) => {
        const res = await axios.get(GET_ALL_COCKTAILS+name)
        dispatch({
            type: LIST_COKTAILS,
            payload: res.data.drinks
        })
    }
}

export const getCocktailsByName = (name) => async (dispatch) => {
        const res = await axios.get(SEARCH_COCKTAILS_BY_NAME+name)
        dispatch({
            type: LIST_SEARCH,
            payload: res.data.drinks
        })
}

export const getCocktailByCategory = (category) => async (dispatch)=> {
    const res = await axios.get(FILTER_COCKTAILS_BY_ALCOHOL+category)
    dispatch({
        type: LIST_CATEGORY,
        payload: res.data.drinks
    })
}

export const getCocktailById = (id) => async (dispatch) => {
    const  res =await axios.get(GET_DETAIL_BY_ID+id)
    dispatch({
        type: LIST_DETAILS,
        payload: res.data.drinks[0]
    })
}

export const getRandomCocktail = (setBool) => async (dispatch) => {
    setBool(true)
    axios.get(GET_RANDOM_COCKTAIL).then(res=>{

        dispatch({
            type: RANDOM_COCTAIL,
            payload: res.data.drinks[0]
        })
        setBool(false)
    })

}

export const cleareCocktail = ()=> {
    return dispatch => {
        dispatch({
            type: CLEAR_COCKTAIL,
            payload: {}
        })
    }
}


export const getIngr = (name) => async (dispatch) => {
    const res = await axios.get(GET_INGREDIENT_INFO+name)
    dispatch({
        type: LIST_INGR,
        payload: res.data.ingredients[0]
    })
}

// export const getRandomCocktail = (setRandomCocktails, randomCocktails) => {
//     axios.get(GET_RANDOM_COCKTAIL).then(res=>{
//         const random = (res.data.drinks[0])
//         setRandomCocktails([...randomCocktails, random])
//     })
// }

export const getCoctailByLetter = (letter) => async (dispatch) => {
    axios.get(GET_COCKTAIL_BY_LETTER+letter).then(res=>{
        dispatch({
            type: LIST_LETTER,
            payload: res.data.drinks
        })
    })
}

