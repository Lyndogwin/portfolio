import React from 'react';
import ReactMarkdown from 'react-markdown';

class BlogCard extends React.Component {
  state = {
    title: "Post title",
    content:"This is a Blog post card"
  }

  componentDidMount = () => {
    this.setState({
      title: this.props.title,
      content: this.props.content
    })
  }

  render () {
    return(
      <div>
        <div className="box">
          <article className="media">
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.state.title}</strong>
                  <br></br>
                  <ReactMarkdown source={this.state.content}/>
                </p>
              </div>
            </div>
          </article>
        </div>

      </div>
    )
  }
}
export default BlogCard;