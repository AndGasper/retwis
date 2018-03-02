import React, { Component } from 'react';
import { Field, FieldArray, refuxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '/components/actions/index'; 
import renderInput from '/components/utilities/render_input';

class CreatePost extends Component {
    render() {
        const { handleSubmit, reset, pristine, submitting } = this.props
        return (
            <div>
                <form onsubmit={ handleSubmit((values) => {this.handleCreatePost(values)})}>
                    <Field 
                        name="Post body"
                        type="text"
                        component={ renderInput } 
                        label="Post body"
                        className="inputField"
                    />
                    <button type="submit" diabled = {pristine || submitting }>Submit</button>

                </form>
            </div>
        );
    }
}

CreatePost = reduxForm({
    form: 'createPost',
})(CreatePost);

export default connect(null, {createPost})(CreatePost);
