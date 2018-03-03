import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Simple from 'components/simple';
import CreatePost from 'components/posts/create_posts';
import { Provider, createStore } from 'redux';
import {rootReducer as reducer }  from 'reducers/index';

let stateStore = createStore(reducer);

ReactDOM.render(
    <Provider store={stateStore}>
        <Router>
            <div>
            <Simple/>
            <Route path="/post" component={CreatePost} />
            </div>
        </Router>
    
    </Provider>,
    document.getElementById('root')
);