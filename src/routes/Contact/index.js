import React from 'react';
import emailjs from 'emailjs-com';

import {init} from 'emailjs-com';
init("user_lIakUgFS2sHCfOIFlFV43");

class Contact extends React.Component {
  constructor(props) {
    super(props);

    
    this.state = { 
      name: "",
      email: "",
      feedback: ""
    };
  }
  
  sendMessage(event){
    event.preventDefault(); 
    // if (!this.validateMail()) { 
    //   return; 
    // } 
    
    
    
    const templateParams = { 
      from_name: this.state.name, 
      email: this.state.email, 
      to_name: "Brandon", 
      feedback: this.state.feedback 
    };

    emailjs
      .send("service_j9zwru8","template_d9sifmt", templateParams)
      .then(
        function(response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function(err) {
          console.log("Your message was not able to be sent",err);
        }
      );
      this.setState({
        name: "",
        email: "",
        feedback: ""
      });
  }

  handleInputChange(event){
    event.preventDefault();
    
    const target = event.target;
    const id = target.id;
    const value = target.value;

    console.log(`${id} : ${value}`)

    this.setState({[id]: value});
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
                onChange={this.handleInputChange.bind(this)} 
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
                onChange={this.handleInputChange.bind(this)} 
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
                onChange={this.handleInputChange.bind(this)} 
                value={this.state.feedback}
                placeholder="Textarea"
              />

            </div>
          </div>
          
          <div className="field is-grouped">
            <div className="control">
              <button 
                className="button is-link"
                onClick={this.sendMessage.bind(this)}
              >Send</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Contact;