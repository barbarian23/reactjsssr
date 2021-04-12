// import {watchIncrementAsync} from './login/login';
// import {watchFetchUser} from "./signapk/signapk";
// import {watchFetchUser} from "./step/step";

import { select, take } from 'redux-saga/effects';
import { watchLogin } from "./login/login";

const watchAndLog = function* () {
  while (true) {
    const action = yield take('*');
    const state = yield select();

    console.log('action', action);
    console.log('state after', state);
  }
}

const rootSaga = function* () {
  yield [
    watchAndLog(),
    watchLogin()
  ]
}

export default rootSaga;