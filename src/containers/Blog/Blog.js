import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';

// import NewPost from './NewPost/NewPost';
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {

    state = {
        auth : true
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname : '/new-post', //always absolute path
                                // pathname : this.props.match.url + '/new-post', //so to make it relative do this
                                hash : '#submit',
                                search : '?quick-submit=true' 
                            }}>New Post</Link></li> */}
                            <li><NavLink 
                                    to="/posts"
                                    exact
                                    // activeClassName="my-active" //to set your own active class
                                    activeStyle={{
                                        textDecoration : 'underline'
                                    }}
                                >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname : '/new-post', //always absolute path
                                // pathname : this.props.match.url + '/new-post', //so to make it relative do this
                                hash : '#submit',
                                search : '?quick-submit=true' 
                            }} exact>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                {/* <Route path="/" exact render={() => <Posts /> } /> */}
                <Switch>
                    { this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Route render={()=> <h1>Not Found</h1>} />
                    {/*<Redirect from="/" to="/posts" />*/} {/* one way to handle 404 */}
                </Switch>
            </div>
        );
    }
}

export default Blog;