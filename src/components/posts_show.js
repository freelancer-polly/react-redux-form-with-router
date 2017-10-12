import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
    componentDidMount(){
        // if(!this.props.post) {
            const { id } = this.props.match.params;
            this.props.fetchPost(id);
        // }
    }

    onDeleteClick(){
        const { id } = this.props.match.params;
        
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { post } = this.props;

        if(!post) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Link to="/">Back to Index</Link>
                <h1>{post.title}</h1>
                <p><strong>Categories:</strong> {post.categories}</p>
                <p>{post.content}</p>
                <button 
                className="btn btn-danger"
                onClick={this.onDeleteClick.bind(this)}
                >
                    Delete this post
                </button>
            </div>
        )
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post : posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fecthPost, deletePost })(PostsShow);