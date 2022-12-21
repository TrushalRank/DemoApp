import { CALL_API_FAILURE, CALL_API_SUCCESS, REQUEST_CALL_API } from "../../constant";

export function callApiWatcher(payload: any, resolve: any, reject: any) {
    return { type: REQUEST_CALL_API, payload, resolve, reject };
}

export function callApiSuccess(payload: any) {
    return { type: CALL_API_SUCCESS, payload: payload };
}

export function callApiFailure(error: any) {
    return { type: CALL_API_FAILURE, payload: error };
}