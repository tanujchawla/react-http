import React, { Component } from "react";
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import axios from '../../../axios';
import { Route } from 'react-router-dom';
import './Posts.css';

class Posts extends Component {

    state = {
        posts: []
    };

    postSelectedHandler = (id) => {
        this.props.history.push({ pathname: '/posts/' + id });
        // this.props.history.push('/' + id);
    }

    componentDidMount() {
        axios.get('/posts')
            .then((response) => {
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author : 'Max'
                    };
                })
                this.setState({ posts : updatedPosts });
            })
            .catch((err) => {
                console.log('Err::::', err);
            });
    }

    render() {
        const posts = this.state.posts.map(post =>  {
            return (
                // <Link to={'/' + post.id} key={post.id}> // one way of doing this
                <Post
                    title={post.title} 
                    author={post.author}
                    key={post.id}
                    // {...this.props}   Sharing route props
                    // match={this.props.match}
                    clicked={() => this.postSelectedHandler(post.id)}
                />
                // </Link>
            );
        });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;