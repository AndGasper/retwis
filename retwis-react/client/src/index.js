import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Simple from 'components/simple';
import CreatePost from 'components/posts/create_posts';
ReactDOM.render(
    <div>
    <Simple/>
    <Route path="/post" component={CreatePost} />
    </div>,
    document.getElementById('root')
);