import React, { Component } from "react";
import Slider from "react-slick";
import YouTube from 'react-youtube';

class CustomSlide extends Component {
  render() {
    const opts = {
      height: '100%',
      width: '100%',
     
    };
    
    const { index, ...props } = this.props;
    return (
      <div {...props}>
         <YouTube videoId="voLuHiIp5gY" opts={opts}></YouTube>
      </div>
    );
  }
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      focusOnSelect: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    const opts = {
      height: '100%',
      width: '100%',
     
    };
    return (
      <div>
       <h2>FocusOnSelect</h2>
        <div>Click on any slide to select and make it current slide</div>
        <Slider {...settings}>
          <CustomSlide/>
          <div className="slick-item">
          <YouTube videoId="l8DWCf5aRqs" opts={opts}></YouTube>
          </div>
          <div className="slick-item">
          <YouTube videoId="l8DWCf5aRqs" opts={opts}></YouTube>
          </div>
          <div className="slick-item">
          <YouTube videoId="l8DWCf5aRqs" opts={opts}></YouTube>
          </div>
          <div className="slick-item">
          <YouTube videoId="l8DWCf5aRqs" opts={opts}></YouTube>
          </div>
          <div className="slick-item">
          <YouTube videoId="l8DWCf5aRqs" opts={opts}></YouTube>
          </div>
        </Slider>
      </div>
    );
  }
}