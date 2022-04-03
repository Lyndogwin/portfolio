import React from 'react';
import ReactMarkdown from 'react-markdown';
import Blog_card from './Blog_card';


class Blog extends React.Component {
  state = {
    posts: []
  } 
  
  grabPosts = () => {
    console.log("Grabing posts");
  }
  
  componentDidMount = () => {
    this.grabPosts();
    // Grab all filenames with extention ".md" from the posts dir under src
    const importAll = (r) => r.keys().map(r);
    const markdownFiles = importAll(require.context('../../posts',false, /\.md$/)) //the context module returns a function 
    this.setState({posts: markdownFiles})
    console.log(markdownFiles)
  }
  
  render () {
    return(
      <div>
        <div className="columns">
          <div className="column is-one-third">
            <Blog_card title="injected title" content="injected content"/>
          </div> 
        </div>
        
      </div>
    )
  }
}
export default Blog;