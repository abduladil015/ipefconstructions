import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <div>
        <img
          className="bgi"
          src="./images/back.jpg"
          alt=""
        ></img>
      </div>
      <section>
        <h1 className="head">Our Projects</h1>

        <h3 className="subhead"> On-going: </h3>

        <div className="row-projects">
          <div className="column-projects" style={{ backgroundColor: "white" }}>
            <a
              href="ProjectView1" 
              className="img-container"
            >
              <img
                className="site"
                src="./images/Villa.jpg"
                alt=""
              ></img>
            </a>
            <div className="inner-div">
              <h5 className="project-name">Project Name: </h5>
              <a
                href="ProjectView1"
                className="title"
              >
                Victoria Enclave
              </a>

              <p>
                <i className="fa fa-map-marker"></i>
                <h4>Address:</h4>
                <span>
                  Plot No.94,95, SR Nagar Colony, JubileeHills, Hyderabad.
                </span>
              </p>
              <h4 className="no_br_btm">Configurations: </h4>
              <p className="add">2 &amp; 3 BHK</p>
              <h4 className="no_br_btm">SFT</h4>
              <p className="add"> 1240 to 1550</p>
            </div>
          </div>

          {/* over */}

          <div className="column-projects" style={{ backgroundColor: "white" }}>
            <a
              href="ProjectView2"
              className="img-container"
            >
              <img
                className="site"
                src="./images/Apartment.jpg"
                alt=""
              ></img>
            </a>
            <div className="inner-div">
              <h5 className="project-name">Project Name: </h5>
              <a
                href="ProjectView2"
                className="title"
              >
                Luxury Apartments
              </a>

              <p>
                <i className="fa fa-map-marker"></i>
                <h4>Address:</h4>
                <span>
                  Plot No.95, Srinagar Colony, Manikonda, Hyderabad.
                </span>
              </p>
              <h4 className="no_br_btm">Configurations: </h4>
              <p className="add">2 &amp; 3 BHK</p>
              <h4 className="no_br_btm">SFT</h4>
              <p className="add"> 1240 to 1550</p>
            </div>
          </div>

          {/* over */}

          <div className="column-projects" style={{ backgroundColor: "white" }}>
            <a
              href="ProjectView3"
              className="img-container"
            >
              <img
                className="site"
                src="./images/banner.jpg"
                alt=""
              ></img>
            </a>
            <div className="inner-div">
              <h5 className="project-name">Project Name: </h5>
              <a
                href="ProjectView3"
                className="title"
              >
                Happy Homes
              </a>

              <p>
                <i className="fa fa-map-marker"></i>
                <h4>Address:</h4>
                <span>
                  Plot No.105, Golden Heights Colony, Attapur, Hyderabad.
                </span>
              </p>
              <h4 className="no_br_btm">Configurations: </h4>
              <p className="add">2 &amp; 3 BHK</p>
              <h4 className="no_br_btm">SFT</h4>
              <p className="add"> 1240 to 1550</p>
            </div>
          </div>
        </div>

        <h3 className="subhead"> Completed: </h3>

        <div className="row-projects">
          <div className="completed" style={{ backgroundColor: "white" }}>
            <a
              href="ProjectView4"
              className="img-container"
            >
              <img
                className="site"
                src="./images/Home.jpeg"
                alt=""
              ></img>
            </a>
            <div className="inner-div">
              <h5 className="project-name">Project Name: </h5>
              <a
                href="ProjectView4"
                className="title"
              >
                PLR Homes
              </a>

              <p>
                <i className="fa fa-map-marker"></i>
                <h4>Address:</h4>
                <span>
                  Plot No.94,95, Alkapuri Colony, Manikonda, Hyderabad.
                </span>
              </p>
              <h4 className="no_br_btm">Configurations: </h4>
              <p className="add">2 &amp; 3 BHK</p>
              <h4 className="no_br_btm">SFT</h4>
              <p className="add"> 1240 to 1550</p>
            </div>
          </div>

          {/* over */}

          <div className="column" style={{ backgroundColor: "white" }}>
            <p></p>
          </div>

          {/* over */}

          <div className="column" style={{ backgroundColor: "white" }}>
            <p></p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
