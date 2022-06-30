import { combineReducers } from 'redux'

const intialState = {
    signup_response: "",
}

const signupReducer = (state = intialState, action) => {
    console.log(state, "state",action.payload)
    switch (action.type) {
        case "SIGNUP":
            const { data} = action.payload;
            return {
                ...state,
                signup_response:data
            }
        default: return state;
    }

}

const rootReducer = combineReducers({
    signupReducer
})
export default rootReducer;

