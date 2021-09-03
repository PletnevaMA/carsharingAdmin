import {Action} from '../const';

const loginUser = (bool) => {
    return{
        type: Action.LOGIN_USER,
        payload: bool,
    }
}

export {
    loginUser
}