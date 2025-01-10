import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class Carasol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: [],
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchBannerData();
  }

  fetchBannerData = async () => {
    try {
      const response = await fetch("/api/HomePage/banner");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      const filteredBanners = data.filter((banner) => banner.hideShow);
      this.setState({ banners: filteredBanners, isLoading: false });
    } catch (error) {
      console.error("Error fetching banner data:", error);
      this.setState({ error: error.message, isLoading: false });
    }
  };

  render() {
    const { banners, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    if (banners.length === 0) {
      return <div>No banners to display</div>;
    }

    return (
      <div className="carousel-wrapper">
        <Carousel
          autoPlay={true}
          showThumbs={false}
          infiniteLoop={true}
          interval={2500}
        >
          {banners.map((banner) => (
            <div
              className="carousel_banner home-shadow"
              style={{ width: "100%" }}
              key={banner._id}
            >
              <video
                autoPlay
                muted
                loop
                className="video-img1"
                src={banner.videoFile}
              />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}
