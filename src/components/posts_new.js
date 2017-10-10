import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderTitleField(field){
        return (
            <div className="form-group">
                <label htmlFor="postTitle">Title</label>
                <input
                    type="text"
                    className="form-control" 
                    id="postTitle" 
                    placeholder="Enter Post Title"
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
                    component={this.renderTitleField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);