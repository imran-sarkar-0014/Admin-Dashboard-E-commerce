
interface navInterface {
    isOpen: boolean
}

interface themeAction {
    type: String,
    payload?: String
}

export const navConstant = {
    TOGGLE: 'TOGGLE'
}


const navTogglerReducer = (state: navInterface = { isOpen: false }, action: themeAction) => {

    switch (action.type) {
        case navConstant.TOGGLE:
            return {
                ...state,
                isOpen: !state.isOpen
            }

        default: return state
    }
}

export default navTogglerReducer