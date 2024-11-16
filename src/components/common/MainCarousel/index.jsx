import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class Carasol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      banners: [], // Holds the banner video data
    };
    this.carouselRef = React.createRef();
  }

  componentDidMount() {
    // Fetch data from the API when the component mounts
    this.fetchBannerData();
  }

  fetchBannerData = async () => {
    try {
      const response = await fetch("/api/HomePage/banner");
      const data = await response.json();
      console.log("Fetched Data:", data);
  
      // Wrap the single object in an array
      this.setState({ banners: [data] });
    } catch (error) {
      console.error("Error fetching banner data:", error);
    }
  };
  

  updateCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
    this.carouselRef.current.moveTo(index);
  };

  render() {
    const { banners, currentSlide } = this.state;
    console.log("banners",banners);
    
  
    return (
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <Carousel
            ref={(el) => (this.carouselRef = el)}
            autoPlay
            showThumbs={false}
            infiniteLoop
            interval={3000}
            onChange={this.updateCurrentSlide}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
          >
            {banners[0]?.map((banner, index) => (
              <div className="carousel_banner" key={index}>
                <video
                  autoPlay
                  muted
                  className="video-img1"
                  loop
                  src={banner.videoFile} // Use videoFile from the API data
                />
              </div>
            ))}
          </Carousel>
          <div className="scroll-indicator">
            {banners[0]?.map((_, index) => (
              <div
                key={index}
                className={`scroll-pill ${index === currentSlide ? "active" : ""}`}
                onClick={() => this.updateCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  
}
