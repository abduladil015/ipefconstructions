import React from "react";
import "./Quote.css";

function Quote() {
  return (
    <div className="container">
      <div className="row">
          <img className="iquote" src="./images/ApartmentQ.jpg" alt=""></img>
          <div class="apart">
            <h3>Type:</h3>
            <span>Apartment</span>
            <h3>Rate</h3>
            <span>1400/SQft.</span>
          </div>
          </div>
          <div className="row">
          <img className="iquote" src="./images/Home.jpg" alt=""></img>
          <div class="house">
          <h3>Type:</h3>
          <span>Independent House</span>
          <h3>Rate:</h3>
          <span>1600/SQft.</span>
          </div>
          </div>
          <div className="row">
          <img class="iquote" src="./images/VillaQ.jpg" alt=""></img>
          <div class="vill">
          <h3>Type:</h3>
          <span>Villa</span>
          <h3>Rate:</h3>
          <span>2000/SQft.</span>
          </div>
      </div>
    </div>
  );
}

export default Quote;