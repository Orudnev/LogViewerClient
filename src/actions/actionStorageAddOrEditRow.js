import axios from 'axios';
import {STORECLOUD_ENDPOINTURL as url} from '../appResources'

export const ACTTYPE_STORECLOUD_ADDROW_WAITRESPONSE = 'ACTTYPE_STORECLOUD_ADDROW_WAITRESPONSE';
export const ACTTYPE_STORECLOUD_ADDROW = 'ACTTYPE_STORECLOUD_ADDROW';

export function actStoreCloudAddRow(valuesArray)
{
    console.log(111);
    var paramObj = {method:"addRowFromFldList"};
    for(var i=0;i<valuesArray.length;i++){
        var fldName = "f"+i;
        paramObj[fldName] = valuesArray[i];
    }
    var pars = {params:paramObj}
    return dispatch=>{
        dispatch({
            type: ACTTYPE_STORECLOUD_ADDROW_WAITRESPONSE
        });
        return axios.get(url,pars)
        .then(response=>{
               return response.data.result
            })
        .then((payload)=>{
                dispatch({
                type:ACTTYPE_STORECLOUD_ADDROW,
                payload});
            });
    }   
}

//{"method":"addRow","parameters":{"FieldValues":["конт","элм"]}}

