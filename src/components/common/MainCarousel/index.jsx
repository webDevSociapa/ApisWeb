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
    };
  }

  render() {
    return (
      <Carousel
        autoPlay={true}
        showThumbs={false}
        renderStatus={<></>}
        infiniteLoop={true}
        interval={2500}
      >
        <div className="carousel_banner " style={this.state.imageStyle}>
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
        {/* <div className="carousel_banner" style={this.state.imageStyle}>
          <Image className="img-fluid" src={Home_Page_Banner} />
        </div>
        <div className="carousel_banner" style={this.state.imageStyle}>
          <Image className="img-fluid" src={Home_Page_Banner} />
        </div>
        <div className="carousel_banner" style={this.state.imageStyle}>
          <Image className="img-fluid" src={Home_Page_Banner} />
        </div> */}
        {/* <div className="carousel_banner" style={this.state.imageStyle}>
          <Image alt="banner1" className="img-fluid" src={Home_Page_Banner2} />
        </div>
        <div className="carousel_banner" style={this.state.imageStyle}>
          <Image alt="banner2" className="img-fluid" src={Home_Page_Banner3} />
        </div>
        <div className="carousel_banner" style={this.state.imageStyle}>
          <Image alt="banner2" className="img-fluid" src={Home_Page_Banner4} />
        </div>
        <div className="carousel_banner" style={this.state.imageStyle}>
          <Image alt="banner2" className="img-fluid" src={Home_Page_Banner5} />
        </div>
        <div className="carousel_banner" style={this.state.imageStyle}>
          <Image alt="banner2" className="img-fluid" src={Home_Page_Banner6} />
        </div>
        <div className="carousel_banner" style={this.state.imageStyle}>
          <Image alt="banner2" className="img-fluid" src={Home_Page_Banner7} />
        </div> */}
      </Carousel>
    );
  }
}
