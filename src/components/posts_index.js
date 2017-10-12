import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPosts(){
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                    {post.title}
                    </Link>
                </li>
	        );
        });
    }

    render(){
        // console.log(this.props.posts);

        return (
            <div>
                <h1>Posts</h1>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
                <hr/>
                <Link to="/posts/new" className="btn btn-primary btn-xs">
                    Add a Post
                </Link>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);