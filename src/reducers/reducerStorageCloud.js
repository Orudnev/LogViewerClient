import * as actions from '../actions';

const defaultState = [];

function reducer(state = defaultState, action) {
    switch (action.type){
        case actions.ACTTYPE_STORECLOUD_REQUEST_GETALLITEMS:
            console.log('ACTTYPE_STORECLOUD_REQUEST_GETALLITEMS');
            return null;
            break;
        case actions.ACTTYPE_STORECLOUD_GETALLITEMS:
            return action.payload;
            break;
        default:
            return state;    
    }
}
 
export default reducer;