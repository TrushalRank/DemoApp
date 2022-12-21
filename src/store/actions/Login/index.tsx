import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_WATCHER,
} from '../../constant';

import {
    USEREMAIL_CHANGED,
    USERPASSWORD_CHANGED,
    USERTOKEN_CHANGED,
} from '../types';

export function userLoginTokenChanged(payload: any) {
    return { type: USERTOKEN_CHANGED, payload };
}

export function userLoginEmailChanged(payload: any) {
    return { type: USEREMAIL_CHANGED, payload };
}

export function userLoginPasswordChanged(payload: any) {
    return { type: USERPASSWORD_CHANGED, payload };
}

export function userLoginWatcher(payload: any, resolve: any, reject: any) {
    return { type: LOGIN_WATCHER, payload, resolve, reject };
}

export function userLoginSuccess(payload: any) {
    return { type: LOGIN_SUCCESS, payload: payload };
}

export function userLoginError(error: any) {
    return { type: LOGIN_FAILURE, payload: error };
}
