import React from 'react';
import BlogCard from './BlogCard';


class Blog extends React.Component {
  state = {
    posts: []
  } 
  
  grabFileNames = () => {
    console.log("Grabing posts");
    // Grab all filenames with extention ".md" from the posts dir under src
    const importAll = (r) => r.keys().map(r);
    const markdownFiles = importAll(require.context('../../posts',false, /\.md$/)) //the context module returns a function 
    .sort().reverse();

    return markdownFiles;
  }
  
  async componentDidMount() {
    const markdownFiles = this.grabFileNames();

    // Loop across the filenames using map, then fetch each file, then grab text, then store in array named 'posts'... ok?
    const posts = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
    .catch((err) => console.error(err))

    this.setState({
      posts: posts
    });
  }
  
  render () {
    return(
      <div>
        <div className="columns is-centered">
          <div className="column is-one-third">
            {
              this.state.posts.map((post, idx) => (
                <div className='block'>
                  <BlogCard id={idx} content={post}/>
                </div>
              ))
            }
          </div> 
        </div>
      </div>
    )
  }
}
export default Blog;