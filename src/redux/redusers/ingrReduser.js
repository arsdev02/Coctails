import {LIST_INGR} from "../action/type";

const state = {}

const ingrReduser = (ingr = state, action) => {
    const {type, payload} = action
    switch (type) {
        case LIST_INGR:
            return payload
        default:
            return ingr
    }
}

export default ingrReduser;