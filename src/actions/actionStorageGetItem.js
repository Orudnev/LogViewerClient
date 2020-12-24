import axios from 'axios';

export const ACTTYPE_STORECLOUD_REQUEST_GETALLITEMS = 'ACTTYPE_STORECLOUD_REQUEST_GETALLITEMS';
export const ACTTYPE_STORECLOUD_GETALLITEMS = 'ACTTYPE_STORECLOUD_GETALLITEMS';

const LSTORAGE_KEY = 'actStoreCloudGetAllItems';
export function actStoreCloudGetAllItems(bRefresh)
{
    console.log("actStoreCloudGetAllItems");
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