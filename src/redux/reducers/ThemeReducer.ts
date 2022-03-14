
interface themeInterface {
    mode: String,
    color: String
}

interface themeAction {
    type: String,
    payload: String
}

const ThemeReducer = (state: themeInterface = { mode: 'theme-mode-light', color: 'theme-color-blue' }, action: themeAction) => {
    switch (action.type) {
        case 'SET_MODE':
            return {
                ...state,
                mode: action.payload
            }
        case 'SET_COLOR':
            return {
                ...state,
                color: action.payload
            }
        default:
            return state
    }
}

export default ThemeReducer