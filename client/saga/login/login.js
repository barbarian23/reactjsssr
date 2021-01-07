import { takeLatest, take, put, call } from 'redux-saga/effects';
import { LOGIN } from "../../action/login/login";
import { IS_LOGIN } from "../../constants/login/login";
//import {chromeOption} from "../../service/selenium";
//import {excelEntity} from "../../service/excel";

const doLogin = async function () {
    console.log("doLogin");
    


}

const login = function* (username,pasword) {
    try {
        let response = yield call(doLogin);
        if (responce) {
            yield put({ type: IS_LOGIN, value: true });
        } else {
            yield put({ type: IS_LOGIN, value: false });
        }
    } catch (e) {
        console.log("login error", e);
        yield put({ type: IS_LOGIN, value: false });
    }
}


export const listenLogin = function* () {
    //yield takeLatest(LOGIN);
    //yield call(login);

    while(yield take(LOGIN)){
        const getUser = yield fork(login);
        yield cancel(login);
    }
}

export const watchLogin = listenLogin;