import {connect} from 'react-redux';
import * as acts from '../actions';
import {actStoreCloudGetAllItems} from '../actions';
import storageMainPg from '../components/StorageMain';

function mapStateToProps(state)
{
    console.log('mapStateToProps');
    return{
        Items: state.cloudStoreItems
    }
}

function mapDispatchToProps(dispatch)
{
    return {
        requestRows: 
            (bRefresh) =>{
                dispatch(actStoreCloudGetAllItems(bRefresh));
            } 
    };
}

const cont = connect(mapStateToProps,mapDispatchToProps)(storageMainPg);
export default cont;