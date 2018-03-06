import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Simple from 'components/simple';
import CreatePost from 'components/posts/create_posts';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer  from 'reducers/index';
import App from 'components/app';

let stateStore = createStore(rootReducer);

ReactDOM.render(
    <Provider store={stateStore}>
        <Router component={App}>
            <div>
            <Simple/>
            <Route path="/post" component={CreatePost} />
            </div>
        </Router>
    
    </Provider>,
    document.getElementById('root')
);