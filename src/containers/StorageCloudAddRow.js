import {connect} from 'react-redux';
import {actStoreCloudGetAllItems} from '../actions';
import {actStoreCloudFilterItems} from '../actions';
import AddRowPg from '../components/StorageCloudAddRow';

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

const cont = connect(mapStateToProps,mapDispatchToProps)(AddRowPg);
export default cont;