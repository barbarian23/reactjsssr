const initialState = [{
    statusLogin: false,
}];

const mapKey = new Map([
    ["1",()=>{}],
    ["2",()=>{}]
]);

export default function loginReducers(state = initialState, action) {
    console.log("[loginReducers " + action.type + "]", action.value);
    return Object.assign({}, state, { [action.type]: action.value });
}