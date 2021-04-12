import { combineReducers } from 'redux';
import loginReducers from './login/login';

const initialState = [{
    crawler: undefined,
    excel:undefined,
    grpc:undefined
}];

const mapKey = new Map([
    ["1",()=>{}],
    ["2",()=>{}]
]);

function homeReducers(state = initialState, action) {
    console.log("[homeReducers " + action.type + "]", action.value);
    return Object.assign({}, state, { [action.type]: action.value });
}

const rootReducer = combineReducers({
    loginReducers,
    homeReducers
});

export default rootReducer;