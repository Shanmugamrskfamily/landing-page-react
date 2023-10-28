import React from "react";

function Home() {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Welcome to our Tourism Website</h1>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 equal-height">
            <img
              src="https://media.gq-magazine.co.uk/photos/5d13a9c2976fa37177f3b040/16:9/w_1920,c_limit/hp-gq-6dec18_istock_.jpg"
              className="card-img-top"
              alt="New York"
            />
            <div className="card-body">
              <h5 className="card-title">New York</h5>
              <p className="card-text">
              New York City (NYC) is the largest city in the United States and one of the most important cities in the world. It's a global city and a center for: Culture, Finance, High-tech, Entertainment, Media.
              </p>
              <p className="card-text">Rating: 4.5⭐</p>
              <a href="/more-info" className="btn btn-primary">
                More Info
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 equal-height">
            <img
              src="https://www.visa.co.in/content/dam/VCOM/regional/ap/images/travel-with-visa/paris/marquee-travel-paris-1920x720.jpg"
              className="card-img-top"
              alt="Paris"
            />
            <div className="card-body">
              <h5 className="card-title">Paris</h5>
              <p className="card-text">
              Paris is the capital and largest city of France. It's located in the north-central part of the country, along the Seine River. The city is known as the "City of Light" because of its early and extensive street lighting, and its leading role in the arts and sciences.
              </p>
              <p className="card-text">Rating: 5⭐</p>
              <a href="/more-info" className="btn btn-primary">
                More Info
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 equal-height">
            <img
              src="https://www.visa.co.in/content/dam/VCOM/regional/ap/images/travel-with-visa/bangkok/marquee-travel-bangkok-1920x720.jpg"
              className="card-img-top"
              alt="Bangkok"
            />
            <div className="card-body">
              <h5 className="card-title">Bangkok</h5>
              <p className="card-text">
              Bangkok is the capital and most important city in Thailand. It's also the country's major port and cultural, financial, and educational center.
              </p>
              <p className="card-text">Rating: 4.5⭐</p>
              <a href="/more-info" className="btn btn-primary">
                More Info
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 equal-height">
            <img
              src="https://www.visa.co.in/content/dam/VCOM/regional/ap/images/travel-with-visa/london/marquee-travel-london-1920x720.jpg"
              className="card-img-top"
              alt="London"
            />
            <div className="card-body">
              <h5 className="card-title">London</h5>
              <p className="card-text">
              London is the capital and largest city of England and the United Kingdom. It's located on the River Thames in southeast England. London is the UK's economic, transportation, and cultural center. It's also the largest city in western Europe by population and area.
              </p>
              <p className="card-text">Rating: 4.5⭐</p>
              <a href="/more-info" className="btn btn-primary">
                More Info
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 equal-height">
            <img
              src="https://www.visa.co.in/content/dam/VCOM/regional/ap/images/travel-with-visa/dubai/marquee-travel-dubai-1920x720.jpg"
              className="card-img-top"
              alt="Dubai"
            />
            <div className="card-body">
              <h5 className="card-title">Dubai</h5>
              <p className="card-text">
              Dubai is a city and emirate in the United Arab Emirates. It's located on the Persian Gulf in the northeast of the country.
              </p>
              <p className="card-text">Rating: 5⭐</p>
              <a href="/more-info" className="btn btn-primary">
                More Info
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 equal-height">
            <img
              src="https://www.visa.co.in/content/dam/VCOM/regional/ap/images/travel-with-visa/sydney/marquee-travel-sydney-1920x720.jpg"
              className="card-img-top"
              alt="Sydney"
            />
            <div className="card-body">
              <h5 className="card-title">Sydney</h5>
              <p className="card-text">
              Sydney is the capital of New South Wales and the largest city in Australia. It's located on the southeastern coast of Australia, next to the Blue Mountains. Sydney is built around a huge harbor and has many tourist attractions,
              </p>
              <p className="card-text">Rating: 4.5⭐</p>
              <a href="/more-info" className="btn btn-primary">
                More Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
