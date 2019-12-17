import { SIGN_IN, SIGN_OUT, SIGNING_IN, SIGNED_IN } from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    signingIn: false,
    userInfo: null,

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {...state, isSignedIn: true, userInfo: action.payload};
        case SIGN_OUT:
            return {...state, isSignedIn: false, userInfo: null};
        case SIGNING_IN:
            return {...state, signingIn: true};
        case SIGNED_IN:
            return {...state, signingIn: false};
        default:
            return state;
    }
};