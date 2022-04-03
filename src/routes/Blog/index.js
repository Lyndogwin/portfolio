import React from 'react';

class Blog extends React.Component {
  state = {
    posts: []
  } 

  grabPosts = () => {
    console.log("Grabing posts");
    console.log(`${process.env.PUBLIC_URL}/posts/*.md`)
  }

  componentDidMount = () => {
    this.grabPosts();
  }
  
  render () {
    return(
      <div>
        
      </div>
    )
  }
}
export default Blog;