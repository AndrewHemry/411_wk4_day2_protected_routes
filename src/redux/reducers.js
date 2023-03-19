import { combineReducers } from "redux";

// the state = null is called a 'default state' where we are setting the state to null automatically if it was not already declared
export const user = (state = null) => {
    return state;
}

export const cars = (state = [], action) => {
    switch(action.type) {
        case "ADD_CAR" :
            return [ ...state, action.value ]
        case "REMOVE_CAR" :
            // The newState is making a new copy
            const newState = [ ...state ]
            newState.splice(action.value, 1)
            return newState
        default:
            return state
    }
}


export default combineReducers( { user, cars } )