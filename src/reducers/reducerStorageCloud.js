import * as actions from '../actions';

const defaultState = [];

function reducer(state = defaultState, action) {
    switch (action.type){
        case actions.ACTTYPE_STORECLOUD_GETALLITEMS:
            return action.payload;
            break;
        default:
            return state;    
    }
}
 
export default reducer;