import FETCH_WEATER from '../actions/index';

export default function (state = [], action) {
    console.log('Action recieved : ', action);

    switch (action.type){
        case FETCH_WEATER :
            return state.concat([action.payload.date]);
    }
    return state;
}