import {NEXT, PAGINATE, PREV} from "../action/type";

let initialValue = {
    currentPage: 1,
    postPerPage: 8,
}

const paginate = (state = initialValue, action) =>{
    const {type, payload} = action
    switch (type){
        case PAGINATE:
            return {...state, currentPage: payload}
        case PREV:
            return {...state, currentPage: payload-1}
        case NEXT:
            return {...state, currentPage: payload+1}
        default:
            return state
    }
}

export default paginate;