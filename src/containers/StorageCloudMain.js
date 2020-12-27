import {connect} from 'react-redux';
import * as acts from '../actions';
import {actStoreCloudGetAllItems} from '../actions';
import {actStoreCloudFilterItems} from '../actions';
import storageMainPg from '../components/StorageCloudMain';

function mapStateToProps(state)
{
    return{
        CloudStore: state.cloudStore
        }
}

function mapDispatchToProps(dispatch)
{
    return {
        requestRows: 
            (bRefresh) =>{
                dispatch(actStoreCloudGetAllItems(bRefresh));
            },
        filterRows:
            (fltCriteria) =>{
                dispatch(actStoreCloudFilterItems(fltCriteria));
            }     
    };
}

const cont = connect(mapStateToProps,mapDispatchToProps)(storageMainPg);
export default cont;