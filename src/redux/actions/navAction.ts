
import { navConstant } from '../reducers/navTogglerReducer'

const toggleNav = () => {
    return {
        type: navConstant.TOGGLE
    }
}

export default { toggleNav }
