import React from 'react';
import './About.css';

function About () {
    return (
        <>
            <img class="bgi" src="./images/back.jpg" alt="background"></img>
            <div class="all">
                <h1 class="abth">About</h1>
                <div class="abtd">
                We are a group of young professionals, and building projects with great value for our clients is our inspiration. Striking balance between value and quality is an utmost priority to us. We are driven by a vision of creating sustainable communities for our clients in terms of living, spaces and amenities. Adhering to the highest quality and executing our projects with great precision and care is our job.
                </div>
                <a href="https://en.wikipedia.org/wiki/Vision" target="_blank" rel="noreferrer"><h1 class="abth">Vision</h1></a>
                <div class="abtd">To be a world-class infrastructure construction and Real Estate Development company committed to total customer satisfaction and enhancing shareholder's value, by building on our strengths - innovative designs, superlative quality of material, cutting-edge technology, timely completion and demonstrating the highest standards of workmanship.
                </div>
                <a href="https://en.wikipedia.org/wiki/Mission_statement" target="_blank" rel="noreferrer" ><h1 class="abth">Mission</h1></a>
                <div class="abtd">To provide quality workmanship and customer service and maintain the highest level of professionalism, honesty and fairness in our relationships with our customers, employees and vendors. To grow by continually providing useful and significant products, services, and solutions to markets and to expand into new areas that build on our competencies and customer interests.
                </div>
            </div>
        </>
            
    );
}
export default About;