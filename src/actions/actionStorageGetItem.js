import axios from 'axios';

export const ACTTYPE_STORECLOUD_REQUEST_GETALLITEMS = 'ACTTYPE_STORECLOUD_REQUEST_GETALLITEMS';
export const ACTTYPE_STORECLOUD_GETALLITEMS = 'ACTTYPE_STORECLOUD_GETALLITEMS';
export const ACTTYPE_STORECLOUD_FILTERITEMS = 'ACTTYPE_STORECLOUD_FILTERITEMS';
export const ACTTYPE_STORECLOUD_UPDATECONTAINERLIST = 'ACTTYPE_STORECLOUD_UPDATECONTAINERLIST';

export const LSTORAGE_KEY = 'actStoreCloudGetAllItems';
export function actStoreCloudGetAllItems(bRefresh)
{
    if(!bRefresh)
    {
        if(localStorage[LSTORAGE_KEY])
        {
            var _payload = JSON.parse(localStorage[LSTORAGE_KEY]);
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
                dispatch({
                type:ACTTYPE_STORECLOUD_GETALLITEMS,
                payload});
            });
    }   
}

//{"method":"addRow","parameters":{"FieldValues":["конт","элм"]}}

export function actStoreCloudFilterItems(fltCriteria)
{
    if(fltCriteria.itemFilter || fltCriteria.containerFilter){
        var allRows = JSON.parse(localStorage[LSTORAGE_KEY]);
        var payload = allRows.filter((row)=>{
            var b1 = true; var b2 = true;
            if (fltCriteria.itemFilter) b1 = row.Item.toLowerCase().includes(fltCriteria.itemFilter.toLowerCase());
            if (fltCriteria.containerFilter) b2 = row.Container == fltCriteria.containerFilter;
            return b1 && b2;     
        });
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