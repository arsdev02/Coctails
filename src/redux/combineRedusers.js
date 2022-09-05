import {combineReducers} from "redux";
import cocktails from "./redusers/cocktailsReduser";
import cocktail from "./redusers/deteilReduser"
import ingr from "./redusers/ingrReduser"
import paginateState from './redusers/pagination'
import letterState from './redusers/LetterReduser'
const rootReduser  = combineReducers({
    cocktails,
    cocktail,
    ingr,
    paginateState,
    letterState,
})

export default rootReduser;