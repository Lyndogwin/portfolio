import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism';

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
                  <ReactMarkdown 
                    children={this.state.content}
                    remarkPlugins={[remarkGfm]}
                    components={{
                      code({node, inline, className, children, ...props}){
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                          <SyntaxHighlighter
                            children={String(children).replace(/\n$/, '')}
                            style={dark}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                          />
                        ) : (
                          <code className = {className} {...props}>
                            {children}
                          </code>
                        )
                      }
                    }}
                  />
              </div>
            </div>
          </article>
        </div>

      </div>
    )
  }
}
export default BlogCard;