import { takeLatest, put } from "redux-saga/effects";
import { userLoginError, userLoginSuccess } from "../../actions";

import { REQUEST_CALL_API } from "../../constant";

export interface ResponseGenerator{}

function* onUserLogin(userLoginResendCodeAction: any) {
	let { payload, resolve, reject } = userLoginResendCodeAction;
	console.log('ojkdfs');
	try {
		console.log('ojkdfs');
		const header = { "Content-Type": "application/json" };
		const response:ResponseGenerator = yield fetch('https://jsonplaceholder.typicode.com/posts').then((res: any) => res.json())
		// .then((Response: object) =>  console.log('error',Response))
		console.log("body", payload);
		yield put(userLoginSuccess(response));
		resolve(response);
	} catch (e) {
		console.log('error',e);
		yield put(userLoginError(e));
		reject(e);
	}
}

export function* userCricetActionWatcher() {
	console.log('asfdgcfed');
	yield takeLatest(REQUEST_CALL_API, onUserLogin);
}
