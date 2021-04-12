import { takeLatest, take , put, call } from 'redux-saga/effects';
import { loginKey } from "../../constants/login/login";
//import {chromeOption} from "../../service/selenium";
//import {excelEntity} from "../../service/excel";

const doLogin =  async function () {
    // let selector = "body div:nth-child(2) div:nth-child(2) div:nth-child(1) form div:nth-child(2) div:nth-child(1) input";
    // await SingletonSelenium.getInstance().clearInputByPath(selector);
    // await SingletonSelenium.getInstance().inputTextByPath(selector,"chien.lx");

    // selector = "body div:nth-child(2) div:nth-child(2) div:nth-child(1) form div:nth-child(2) div:nth-child(2) input";
    // await SingletonSelenium.getInstance().clearInputByPath(selector);
    // SingletonSelenium.getInstance().inputTextByPath(selector,"Lethanhhvt@2");

    // selector = "body div:nth-child(2) div:nth-child(2) div:nth-child(1) form div:nth-child(2) div:nth-child(4)";
    // await SingletonSelenium.getInstance().clearInputByPath(selector);
    // await SingletonSelenium.getInstance().clickByPath(selector);

    return await new Promise(res=>res(2));
}

const login = function* () {
    try {
        let response = yield call(doLogin);
        yield put(loginKey.LOGIN_SUCCESS);
    } catch(e){
        console.log("login error",e);
        yield put(loginKey.LOGIN_FAILED);
    }
}


export const listenLogin = function* () {
    yield put(loginKey.LOGIN);
}

export const watchLogin = listenLogin;