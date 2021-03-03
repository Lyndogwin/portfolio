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
              Software Engineering and Data Science Graduate 
            </p>
          </div>
        </section>
        
        <div className="tile is-ancestor">
          <div className="tile is-4 is-vertical is-parent">
            <div className="tile is-child box">
              <p className="title">About</p>
              <p>
                I am a recent graduate from the University of North Carolina at Charlotte.
                I decided to build this site in an attempt to create foundations for a personal blog in which I can express
                various interests, while also creating something tangable and functional for potential employers to review.
                This site is built with ReactJS, using the Bulma css framework and EmailJS as a client-side email service. 
                I am using GitHub's new actions feature for continuous integration to deploy to GitHub pages (as you can maybe tell
                from the site address).
              </p>
            </div>
            {/* <div className="tile is-child box">
              <p className="title">Goals</p>
            </div> */}
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box">
              <p className="title">Projects</p>
              <a href="https://github.com/Lyndogwin/salazar"><img src="https://gh-card.dev/repos/Lyndogwin/salazar.svg"/></a>
              <a href="https://github.com/Lyndogwin/poli"><img src="https://gh-card.dev/repos/Lyndogwin/poli.svg"/></a>
              <a href="https://github.com/Lyndogwin/portfolio"><img src="https://gh-card.dev/repos/Lyndogwin/portfolio.svg"/></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home;