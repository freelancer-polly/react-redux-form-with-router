import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field){
        return (
            <div className="form-group">
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

    render() {
        return (
            <form>
                <Field 
                    name="title" 
                    component={this.renderField}
                    label="Title"
                    id="postTitle"
                />
                <Field 
                    name="tags" 
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

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);
