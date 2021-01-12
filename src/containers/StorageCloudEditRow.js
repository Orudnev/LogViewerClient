import {connect} from 'react-redux';
import {actStoreCloudAddRow} from '../actions';

import StorageCloudEditRow from '../components/StorageCloudEditRow';

function mapStateToProps(state)
{
    return{
        CloudStore: state.cloudStore
        }
}

function mapDispatchToProps(dispatch)
{
    return {
        addRow: 
            (newRowValues) =>{
                dispatch(actStoreCloudAddRow(newRowValues));
            },
    };
}

const cont = connect(mapStateToProps,mapDispatchToProps)(StorageCloudEditRow);
export default cont;