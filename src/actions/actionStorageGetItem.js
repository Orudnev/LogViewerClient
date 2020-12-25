import axios from 'axios';

export const ACTTYPE_STORECLOUD_REQUEST_GETALLITEMS = 'ACTTYPE_STORECLOUD_REQUEST_GETALLITEMS';
export const ACTTYPE_STORECLOUD_GETALLITEMS = 'ACTTYPE_STORECLOUD_GETALLITEMS';
export const ACTTYPE_STORECLOUD_FILTERITEMS = 'ACTTYPE_STORECLOUD_FILTERITEMS';
export const ACTTYPE_STORECLOUD_UPDATECONTAINERLIST = 'ACTTYPE_STORECLOUD_UPDATECONTAINERLIST';

const LSTORAGE_KEY = 'actStoreCloudGetAllItems';
export function actStoreCloudGetAllItems(bRefresh)
{
    if(!bRefresh)
    {
        if(localStorage[LSTORAGE_KEY])
        {
            var _payload = JSON.parse(localStorage[LSTORAGE_KEY]);
            getContainerList();
            return  {
                    type:ACTTYPE_STORECLOUD_GETALLITEMS,
                    payload:_payload
                };
        }
    }
    
    var url = "https://script.google.com/macros/s/AKfycbyjRdA18bzdVoNSkQyeu-mbE3CfM83Qng48ynNGziMEzINAe2I/exec?method=getAllRows";
    return dispatch=>{
        dispatch({
            type: ACTTYPE_STORECLOUD_REQUEST_GETALLITEMS
        });
        return axios.get(url)
        .then(response=>response.data.result)
        .then((payload)=>{
                localStorage[LSTORAGE_KEY] = JSON.stringify(payload);
                getContainerList();
                dispatch({
                type:ACTTYPE_STORECLOUD_GETALLITEMS,
                payload});
            });
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
    console.log(containers);
}


export function actStoreCloudFilterItems(fltCriteria)
{
    if(fltCriteria){
        var allRows = JSON.parse(localStorage[LSTORAGE_KEY]);
        console.log(allRows);
        var payload = allRows.filter((row)=>row.Item.toLowerCase().includes(fltCriteria.toLowerCase()));
        return  {
            type:ACTTYPE_STORECLOUD_GETALLITEMS,
            payload
        };
    } else{
        payload = JSON.parse(localStorage[LSTORAGE_KEY]);
        return  {
            type:ACTTYPE_STORECLOUD_GETALLITEMS,
            payload
        };
    }
}