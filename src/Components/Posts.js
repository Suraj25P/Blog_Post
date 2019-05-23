import React, { Component } from "react";
import axios from 'axios';

 class Posts extends Component {
    state={
        posts: null
    }

  componentDidMount() {
      let id= this.props.match.params.post_id;
      axios.get('https://jsonplaceholder.typicode.com/posts/' + id).
      then(res=>{
        this.setState({
            posts : res.data
        })
      })
  
   

  }
  render() {
      const posts=this.state.posts ? (
          <div className='post'>
            <h4 className="center">{this.state.posts.title}</h4>
            <p>{this.state.posts.body}</p>
          </div>
      ) :(
          <div className="center">This posts doesnt exit</div>
      );
    return (
      <div className="container">
        {posts}

      </div>
    );
  }
}


export default Posts