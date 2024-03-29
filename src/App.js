import './App.css';
import React from 'react';
import * as Routes from './routes';

import {
  HashRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom"

class App extends React.Component {
  state = {
    active_burger: false,
    active_sentax: ""
  }

  expandNav = () => { 
    if (!this.state.active_burger){
      this.setState({
        active_sentax: "is-active",
        active_burger: true
      });
    }
    else{
      this.setState({
        active_sentax:"",
        active_burger:false
      })
    }
  }

  render () {
    return (
      <div className="App">
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <div className="navbar-item">
            </div>

            <a role="button"  
              className={`navbar-burger ${this.state.active_sentax}`} 
              aria-label="menu" 
              aria-expanded="false" 
              data-target="navbarOptions"
              onClick={this.expandNav}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarOptions" className={`navbar-menu ${this.state.active_sentax}`}>
            <div className="navbar-start">
              <a className="navbar-item" href="/portfolio/">
                Home
              </a>

              <a className="navbar-item" href="/portfolio/#/blog">
                Blog
              </a>

              <a className="navbar-item" href="/portfolio/#/contact">
                Contact 
              </a>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  More
                </a>

                <div className="navbar-dropdown">
                  <a className="navbar-item" href="https://github.com/Lyndogwin">
                    GitHub
                  </a>
                  <a className="navbar-item" href="https://www.linkedin.com/in/brandonbost0110">
                    Linkdin
                  </a>
                  <hr className="navbar-divider"/>
                  <a className="navbar-item">
                    Report an issue with this site
                  </a>
                </div>
              </div>
            </div>

            <div className="navbar-end">
            </div>
          </div>
        </nav>
        <Router basename="/portfolio">
          <Switch>
            <Route path="/" component={Routes.Home} exact/>
            <Route path="/blog/" component={Routes.Blog}/>
            <Route path="/contact/" component={Routes.Contact}/>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
