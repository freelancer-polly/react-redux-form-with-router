import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field){
        const { meta } = field;
        const className = `form-group ${meta.touched && meta.error ? 'has-danger': ''}`;
        return (
            <div className={className}>
                <small className="form-text text-muted text-danger">
                {meta.touched ? meta.error: ''}
                </small>
                <label htmlFor={field.id}>{field.label}</label>                
                <input
                    type="text"
                    className="form-control" 
                    id={field.id}
                    placeholder={field.label}
                    {...field.input}
                />
            </div>
        );
    }

    onSubmit(values){
        // console.log(values);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    name="title" 
                    component={this.renderField}
                    label="Title"
                    id="postTitle"
                />
                <Field 
                    name="categories" 
                    component={this.renderField}
                    label="Categories"
                    id="postCategories"
                />
                <Field 
                    name="content" 
                    component={this.renderField}
                    label="Post Content"
                    id="postContent"
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

function validate(values){
    const errors = {};

    if(!values.title) {
        errors.title = "Enter a title!";
    }

    if(!values.categories) {
        errors.tags = "Enter some categories!";
    }

    if(!values.categories) {
        errors.content = "Enter some content please!";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);
