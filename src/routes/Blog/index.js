import React from 'react';
import BlogCard from './BlogCard';


class Blog extends React.Component {
  state = {
    posts: []
  } 
  
  grabFileNames = async () => {
    console.log("Grabing posts");
    // Grab all filenames with extention ".md" from the posts dir under src using 'require' via webpack
    try{
      const importAll = (r) => r.keys().map(r);
      const markdownFiles = await Promise.all(importAll(require.context('../../posts',false, /\.md$/)) //the context module returns a function 
      .sort().reverse()).then(console.log("Files Listed"));
      
      return markdownFiles;
    }catch(err){console.log(err)}

  }
  
  componentDidMount = async () => {
    const markdownFiles = await this.grabFileNames();

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
          <div className="column is-half">
            {
              this.state.posts.map((post, idx) => (
                <div className='block' key={idx}>
                  <BlogCard content={post}/>
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