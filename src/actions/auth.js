import { SIGN_IN, SIGN_OUT, SIGNING_IN, SIGNED_IN } from './types';

export const signIn = (userInfo) => {
    return {
        type: SIGN_IN,
        payload: userInfo
    };
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const signingIn = () => {
    return {
        type: SIGNING_IN,
        payload: true
    };
}

export const signedIn = () => {
    return {
        type: SIGNED_IN,
        payload: false
    }
}