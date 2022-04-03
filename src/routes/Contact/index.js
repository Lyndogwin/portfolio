import React from 'react';
import emailjs from 'emailjs-com';

import {init} from 'emailjs-com';
const EMAILJS_ACCOUNTID = process.env.REACT_APP_EMAILJS_ACCOUNTID;
init(`${EMAILJS_ACCOUNTID}`);

// https://blog.mailtrap.io/react-send-email/
// https://medium.com/kirsten-werner/using-a-react-form-to-send-information-directly-to-your-email-2c9666f0d63a

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

    const EMAILJS_SERVICEID = process.env.REACT_APP_EMAILJS_SERVICEID; 
    const EMAILJS_TEMPLATEID = process.env.REACT_APP_EMAILJS_TEMPLATEID;

    const templateParams = { 
      from_name: this.state.name, 
      email: this.state.email, 
      to_name: "Brandon", 
      feedback: this.state.feedback 
    };

    emailjs
      .send(EMAILJS_SERVICEID,EMAILJS_TEMPLATEID, templateParams)
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
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
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
                placeholder="Hello! How are you? ..."
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