import axios from 'axios';

export const ACTTYPE_STORECLOUD_REQUEST_GETALLITEMS = 'ACTTYPE_STORECLOUD_REQUEST_GETALLITEMS';
export const ACTTYPE_STORECLOUD_GETALLITEMS = 'ACTTYPE_STORECLOUD_GETALLITEMS';


export function actStoreCloudGetAllItems(bRefresh)
{
    //console.log('actStoreCloudGetAllItems');
    var url = "https://script.google.com/macros/s/AKfycbyjRdA18bzdVoNSkQyeu-mbE3CfM83Qng48ynNGziMEzINAe2I/exec?method=getAllRows";
    return dispatch=>{
        dispatch({
            type: ACTTYPE_STORECLOUD_REQUEST_GETALLITEMS
        });
        return axios.get(url)
        .then(response=>response.data.result)
        .then(payload=>dispatch({
            type:ACTTYPE_STORECLOUD_GETALLITEMS,
            payload}));
    }   
}