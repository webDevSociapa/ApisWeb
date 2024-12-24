import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class Carasol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: [],
      currentSlide: 0,
    };
    this.carouselRef = React.createRef();
  }

  componentDidMount() {
    this.fetchBannerData();
  }

  fetchBannerData = async () => {
    try {
      const response = await fetch("/api/HomePage/banner");
      const data = await response.json();
      const filteredBanners = data.filter((banner) => banner.hideShow);
      this.setState({ banners: filteredBanners });
    } catch (error) {
      console.error("Error fetching banner data:", error);
    }
  };

  handleSlideChange = (index) => {
    this.setState({ currentSlide: index });
  };

  render() {
    const { banners, currentSlide } = this.state;

    return (
      <div className="carousel-wrapper">
        <div className="carousel-container">
          {/* Carousel Component */}
          <Carousel
            ref={this.carouselRef}
            autoPlay
            infiniteLoop
            showThumbs={false}
            interval={5000} // Adjust slide interval
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            stopOnHover={false}
            onChange={this.handleSlideChange}
          >
            {banners.map((banner) => (
              <div className="carousel_banner" key={banner._id}>
                <video
                  autoPlay
                  muted
                  loop
                  className="video-img1"
                  src={banner.videoFile}
                  playsInline // Ensure compatibility with mobile devices
                />
              </div>
            ))}
          </Carousel>

          {/* Custom Scroll Indicators */}
          <div className="scroll-indicator">
            {banners.map((_, index) => (
              <div
                key={index}
                className={`scroll-pill ${index === currentSlide ? "active" : ""}`}
                onClick={() => this.carouselRef.current.moveTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
