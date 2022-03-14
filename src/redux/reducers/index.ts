import ThemeReducer from "./ThemeReducer"
import navTogglerReducer from "./navTogglerReducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({ ThemeReducer, navReducer: navTogglerReducer })

export default rootReducer