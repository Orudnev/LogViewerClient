import {combineReducers} from 'redux';

import cloudStoreItems from './reducerStorageCloud';

const reducer = combineReducers(
    {
        cloudStoreItems
    });

export default reducer;    