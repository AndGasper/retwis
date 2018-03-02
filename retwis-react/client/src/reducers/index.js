import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import postReducer from '/components/reducers/post_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    post: postReducer
});

export default rootReducer;