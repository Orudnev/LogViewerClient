import * as actions from '../actions';
import {LSTORAGE_KEY} from '../appResources';

const defaultState = {
    Items:[],
    Containers:[],
    LastAddedRow:{}
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
        case actions.ACTTYPE_STORECLOUD_ADDROW_WAITRESPONSE:
            console.log('ACTTYPE_STORECLOUD_ADDROW_WAITRESPONSE');
            var result = {...state,LastAddedRow:action.payload};
            return result;
        case actions.ACTTYPE_STORECLOUD_ADDROW:
            console.log('ACTTYPE_STORECLOUD_ADDROW');
            var result = {...state,LastAddedRow:action.payload};
            result.Items.push(result.LastAddedRow);
            console.log("AddRow, reducer: ");
            console.log(result);
            localStorage[LSTORAGE_KEY] = JSON.stringify(result.Items);

            return result;

        default:
            return state;    
    }
}

function getContainerList()
{
    var allRowsJsonStr = localStorage[LSTORAGE_KEY];
    if (!allRowsJsonStr || allRowsJsonStr == "undefined") return [];
    var allRows = JSON.parse(allRowsJsonStr);
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