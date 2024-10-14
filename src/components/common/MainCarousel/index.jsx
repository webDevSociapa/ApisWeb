import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default class Carasol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageStyle: {
        width: "100%",
      },
      currentSlide: 0,
    };
  }

  updateCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
    this.carouselRef.moveTo(index);
  }

  render() {
    const totalSlides = 2; // Update this number based on your total slides

    return (
     <>
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <Carousel
            ref={(el) => (this.carouselRef = el)}
            autoPlay={true}
            showThumbs={false}
            infiniteLoop={true}
            interval={4000}
            onChange={this.updateCurrentSlide}
            showArrows={false}
            showStatus={false}
            showIndicators={false} // This removes the default dots
          >
            <div className="carousel_banner" style={this.state.imageStyle}>
              <video
                autoPlay={true}
                muted
                className={"video-img1"}
                loop
                src={'https://luxor-pen-prod.s3.ap-south-1.amazonaws.com/Main+Banner+Video+2.mp4'}
              />
            </div>
            <div className="carousel_banner home-shadow" style={this.state.imageStyle}>
              <video
                autoPlay={true}
                muted
                className={"video-img1"}
                loop
                src={'https://api.luxorpen.com/v1/HomePageBanner1.mp4'}
              />
            </div>
          </Carousel> 
        </div>
        {/* Moved the scroll-indicator below the carousel */}
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
     </>
    );
  }
}
