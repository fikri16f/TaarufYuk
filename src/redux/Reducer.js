import { combineReducers } from "redux";

const initialLoginGlobal={
    isLogin:false,
    dataUser:{},
}

function LoginReducer(state=initialLoginGlobal,action){
    if(action.type ==="SET_LOGIN"){
        return({
            ...state,
            [action.inputType]: action.inputValue
        })
    }

    return state;
}

const Reducer = combineReducers({
    LoginReducer,
})

export default Reducer