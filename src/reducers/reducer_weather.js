import { FETCH_WEATER } from '../actions/index';

export default function (state = [], action) {
    console.log('Action recieved : ', action);

    switch (action.type){
        case FETCH_WEATER :
            return [ action.payload.data, ...state];    // ES6 / return state.concat([action.payload.date]); // ES5
    }
    return state;
}