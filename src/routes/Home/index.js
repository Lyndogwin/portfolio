import React from 'react';

class Home extends React.Component {
  render () {
    return(
      <div>
        <section className="hero is-success">
          <div className="hero-body">
            <p className="title">
            <img src="./self_portrait.gif" width="32" height="64" alt="Logo"/>
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
              <p>
                  I would like to gain the neccessary experience and resources in order to build my own software company.
                This company would see that people of all walks of life could have the opportunity to learn programming and 
                and apply the skills learned to further their careers. The ultimate future that I would like to see for 
                this company is a model that can sustatin itself and pay it's employees while facilitating growth. 

                  I have met a number of people more intelligent than myself believe they could never shift into IT and it is 
                becoming increasingly difficult to get entry-level positiions as more people are graduating with computer science 
                degrees. I would like to see a environment that facillitates these individuals and help them grow into success stories. 
            </div> */}
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box">
              <p className="title">Projects</p>
              <a href="https://github.com/Lyndogwin/salazar"><img src="https://gh-card.dev/repos/Lyndogwin/salazar.svg"/></a>
              <a href="https://github.com/Lyndogwin/poli"><img src="https://gh-card.dev/repos/Lyndogwin/poli.svg"/></a>
              <a href="https://github.com/Lyndogwin/gray_rust"><img src="https://gh-card.dev/repos/Lyndogwin/gray_rust.svg"/></a>
              <a href="https://github.com/Lyndogwin/portfolio"><img src="https://gh-card.dev/repos/Lyndogwin/portfolio.svg"/></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home;