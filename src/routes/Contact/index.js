import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      name: "",
      email: "",
      feedback: ""
    };
  }

  handleInputChange(event){
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value
  }

  render () {
    return( 
      <div className="box"> 
        <form>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input 
                id="name" 
                className="input" 
                type="text" 
                onchange={this.handleInputChange.bind(this)} 
                value={this.state.name}
                placeholder="e.g Alex Smith"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input 
                id="email" 
                className="input" 
                type="email" 
                onchange={this.handleInputChange.bind(this)} 
                value={this.state.email}
                placeholder="e.g. alexsmith@gmail.com"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea 
                id="feedback" 
                className="textarea" 
                onchange={this.handleInputChange.bind(this)} 
                value={this.state.feedback}
                placeholder="Textarea"
              />

            </div>
          </div>
          
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Send</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Contact;