import React from 'react';
import './ProjectView.css';

function ProjectView2() {
    return(
        <div>
             <>
      <div>
          <section >
    <div class="">
        
    <img class="bgi1" src="./images/Apartment.jpg" alt=""></img>
    </div>
        </section>
		
		<section>
			<div>
				<h1 className="heads">Floor plans</h1>
				</div>
		<div class="row">

  <div class="column">
    <img class="gallery" src="./images/fp1.png" alt="Snow" ></img>
  </div>
  <div class="column">
    <img class="gallery" src="./images/fp2.png" alt="Forest" ></img>
  </div>
  <div class="column">
    <img  class="gallery" src="./images/fp3.jpg" alt="Mountains" ></img>
  </div>
</div>
		</section>


    
		   <section>
			   <div>
				   <h1 class="heads">Amenities</h1>
				   <img className="amenities" src="./images/Amenities.png" alt=""></img>
			   </div>
		   </section>
		
		
	<section>
			<div>
				<h1 className="heads">Construction Progress</h1>
				</div>
		<div class="row">

  <div class="column">
    <img class="gallery" src="./images/aprt1.jpg" alt="Snow" ></img>
  </div>
  <div class="column">
    <img class="gallery" src="./images/aprt2.jpg" alt="Forest" ></img>
  </div>
  <div class="column">
    <img  class="gallery" src="./images/aprt3.jpg" alt="Mountains" ></img>
  </div>
</div>
		</section>


      </div>
      
      </>
        </div>

    );

}

export default ProjectView2;