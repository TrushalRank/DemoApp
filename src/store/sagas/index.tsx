import { all } from "redux-saga/effects";
import { userCricetActionWatcher } from "./Cricket";

import { userLoginActionWatcher } from "./Login";

export default function* root() {
	yield all([ 
		userLoginActionWatcher(),
	    userCricetActionWatcher(),
	]);
}
