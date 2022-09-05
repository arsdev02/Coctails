import {LIST_CATEGORY, LIST_COKTAILS, LIST_SEARCH} from "../action/type";

const state = []

const cocktailsReduser = (cocktails = state, action) => {
    const {type, payload} = action
    switch (type) {
        case LIST_COKTAILS:
            return payload
        case LIST_SEARCH:
            return payload
        case LIST_CATEGORY:
            return payload
        default:
            return cocktails
    }
}

export default cocktailsReduser;