import * as actions from '../actions';
import {LSTORAGE_KEY} from '../actions/actionStorageGetItem';

const defaultState = {
    Items:[],
    Containers:[]
}  

function reducer(state = defaultState, action) {
    switch (action.type){
        case actions.ACTTYPE_STORECLOUD_REQUEST_GETALLITEMS:
            return {
                Items:null,
                Containers:[]
            } 
        case actions.ACTTYPE_STORECLOUD_GETALLITEMS:
           var result = { 
                Items:action.payload,
                Containers:getContainerList()
            } 
            return result;
            break;
        default:
            return state;    
    }
}

function getContainerList()
{
    var allRows = JSON.parse(localStorage[LSTORAGE_KEY]);
    var containers = [];
    allRows.map((itemRow)=>{
        var sr = containers.filter(cnt=>cnt==itemRow.Container);
        if (sr.length == 0)
        {
            containers.push(itemRow.Container);     
        }
    });
    return containers;
}


 
export default reducer;