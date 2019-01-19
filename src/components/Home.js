import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount(){
        console.log('did');
        fetch('http://localhost:5000/koledy', {headers: {Accept: 'application/json'}
                                                 })
                                                 .then(res => {
                                                    this.setState({
                                                        post: res.data
                                                    })
                                                })
                                                console.log(this.state)
    }
    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                        <div className="cord-content">
                            <Link to={"/" + post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div>No posts</div>
        )
        return(
            <div className="container">
                <h4 className="center">Home</h4>
                    {postList}
            </div>
        )
    }
}

export default Home