import React, { Component } from 'react';
import axios from '../../../axios';
import { Redirect } from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        // submitted: false
    }

    // or we can execute guard logic in component did mount
    // and redirect back to previous page

    postDataHandler = () => {

        const post = {
            ...this.state
        }

        axios.post('/posts', post)
            .then(response =>  {
                // this.setState({ submitted : true });
                this.props.history.push('/posts'); // back to new post page
                // this.props.history.replace('/posts'); // back button will keep us at posts page only as we were there only before
                console.log('res:::', response);
            })
            .catch(err =>  {
                console.log('Errr:::', err);
            })
    }

    render () {
        // let redirect = null;
        // if(this.state.submitted) {
        //     redirect = <Redirect to="/posts" />; // same as history.replace 
        // }

        return (
            <div className="NewPost">
                {/* {redirect} */}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;