// import React from 'react';

const Hero = () => {
  return (
    <main className="hero">
      <div>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button>Catogary</button>
        </div>
        <div className="shopping">
          <p>Aloso availabe on</p>
          <div className="images">
            <img src='amazon.png'/>
            <img src='flipkart.png'/>

          </div>
        </div>

      </div>
      <div className="hero-img">
        <img src='shoe_image.png' alt="Hero Image" />
      </div>
    </main>
  );
};

export default Hero;
