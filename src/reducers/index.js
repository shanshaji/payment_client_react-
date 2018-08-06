
import { combineReducers } from '../../../../../.cache/typescript/2.9/node_modules/redux';

import AuthReducer from './auth-reducer';

const rootReducer = combineReducers({
    auth: AuthReducer
});

export default rootReducer;
