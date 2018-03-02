import {
    CREATE_POST
} from '/actions/types';

const default_state = {
    all: []
};
// All posts is probably something like:
/**
 * {
 * author: who
 * post: what
 * createdDate: when
 *  }
 */
export default function (state = default_state, action) {
    switch(action.type) {
        case CREATE_POST:
            return {
                ...state,
                all: action.payload.posts
            };
    }
    return state;
}