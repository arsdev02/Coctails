import {LIST_LETTER} from "../action/type";


const state = []

const letterReduser = (letterCocktail= state, action) =>{
    const {type, payload} = action
    switch (type){
        case LIST_LETTER:
            return payload
        default:
            return state
    }
}

export default letterReduser;