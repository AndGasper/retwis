import { CREATE_POST } from 'actions/types';

export function createPost(post) {
    return function(dispatch) {
        dispatch({
            type: CREATE_POST,
            payload: "blah"
        });
    }   
}   