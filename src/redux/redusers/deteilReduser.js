import {CLEAR_COCKTAIL, LIST_DETAILS, RANDOM_COCTAIL} from "../action/type";

const state = {}

const detailReduser = (cocktail = state, action) => {
    const {type, payload} = action
    switch (type) {
        case LIST_DETAILS:
            return payload
        case CLEAR_COCKTAIL:
            return payload
        case RANDOM_COCTAIL:
            return payload
        default:
            return cocktail
    }
}

export default detailReduser;