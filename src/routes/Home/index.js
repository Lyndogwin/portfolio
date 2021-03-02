import React from 'react';

class Home extends React.Component {
  render () {
    return(
      <div>
        <section className="hero is-success">
          <div className="hero-body">
            <p className="title">
              Brandon Bost 
            </p>
            <p className="subtitle">
              Software Engineer 
            </p>
          </div>
        </section>
        
        <div className="tile is-ancestor">
          <div className="tile is-4 is-vertical is-parent">
            <div className="tile is-child box">
              <p className="title">About</p>
            </div>
            <div className="tile is-child box">
              <p className="title">Goals</p>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box">
              <p className="title">Projects</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home;