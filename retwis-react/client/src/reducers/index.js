import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import postReducer from 'reducers/post_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    post: postReducer
});

debugger;
export default rootReducer;