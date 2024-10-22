import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default class Carasol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0, // Tracks the current slide index
    };
    this.carouselRef = React.createRef(); // Create a reference for the carousel
  }

  updateCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
    this.carouselRef.current.moveTo(index);
  };

  render() {
    const totalSlides = 2; // Update this number based on your total slides
    // 

    return (
     <>
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <Carousel
            ref={(el) => (this.carouselRef = el)}
            autoPlay={true} // Ensures the carousel plays automatically
            showThumbs={false}
            infiniteLoop={true} // Allows the carousel to loop infinitely
            interval={3000} // Sets the interval to 4 seconds
            onChange={this.updateCurrentSlide}
            showArrows={false}
            showStatus={false}
            showIndicators={false} // This removes the default dots
          >
            <div className="carousel_banner" style={this.state.imageStyle}>
              <video
               autoPlay
                muted
                className={"video-img1"}
                loop // Ensures the video loops continuously
                src={'https://luxor-pen-prod.s3.ap-south-1.amazonaws.com/Main+Banner+Video.mp4'}
              />
            </div>
            <div className="carousel_banner home-shadow" style={this.state.imageStyle}>
              <video
                autoPlay
                muted
                className={"video-img1"}
                loop // Ensures the video loops continuously
                src={'https://api.luxorpen.com/v1/HomePageBanner1.mp4'}
              />
            </div>
          </Carousel> 
          {/* Moved the scroll-indicator inside the carousel-container */}
          <div className="scroll-indicator">
            {[...Array(totalSlides)].map((_, index) => (
              <div
                key={index}
                className={`scroll-pill ${index === this.state.currentSlide ? 'active' : ''}`}
                onClick={() => this.updateCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
     </>
    );
  }
}
