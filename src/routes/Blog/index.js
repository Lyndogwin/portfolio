import React from 'react';
import ReactMarkdown from 'react-markdown';
import BlogCard from './BlogCard';


class Blog extends React.Component {
  state = {
    posts: []
  } 
  
  grabPosts = () => {
    console.log("Grabing posts");
  }
  
  async componentDidMount() {
    this.grabPosts();
    // Grab all filenames with extention ".md" from the posts dir under src
    const importAll = (r) => r.keys().map(r);
    const markdownFiles = importAll(require.context('../../posts',false, /\.md$/)) //the context module returns a function 
    this.setState({posts: markdownFiles})
    console.log(markdownFiles)
    //////
    const posts = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
    .catch((err) => console.error(err))

    console.log(posts);

    this.setState({
      posts: posts
    });
  }
  
  render () {
    return(
      <div>
        <div className="columns">
          <div className="column is-one-third">
            {
              this.state.posts.map((post, idx) => (
                <BlogCard title={idx} content={post}/>
              ))
            }
          </div> 
        </div>
        
      </div>
    )
  }
}
export default Blog;