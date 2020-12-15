import React, { Component } from "react";
import Slider from "react-slick";
import YouTube from "react-youtube";
import Divider from "@material-ui/core/Divider";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Grid, Button } from "@material-ui/core";

class CustomSlide extends Component {
  render() {
    const opts = {
      height: "100%",
      width: "100%",
    };

    
    const { index, ...props } = this.props;
    return (
      <div {...props}>
        <div className="mainMediaTitleWrapper">
          <div className="mainMediaTitle">
            Rohit Kaila on All Things Tech | #TechnologyOnTheMove
          </div>
          <div class="time">8 minutes</div>
          <Divider variant="fullWidth" />
        </div>
        <div className="subMediaTitle">
          Rohit Kaila on All Things Tech | #TechnologyOnTheMove
        </div>

        <YouTube videoId="voLuHiIp5gY" opts={opts} onReady={this._onReady} onStateChange={this._onStateChange}></YouTube>
      </div>
    );

   
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    console.log("isnide onReady event");
    debugger;
    event.target.pauseVideo();
  };

  _onStateChange(event){
     console.log("on state change");
  }

}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <span className="slick-arrow carousel-control-next" onClick={onClick}>
      <ArrowForwardIosIcon fontSize="small" />
    </span>
  );
}

function PrevArrow(props) {
  var { className, style, onClick } = props;

  return (
    <span className="slick-arrow carousel-control-prev" onClick={onClick}>
      <ArrowBackIosIcon fontSize="small"/>
    </span>
  );
}
export default class SimpleSlider extends Component {
  render() {
    const buttonText = "show all videos" ;
    const settings = {
      focusOnSelect: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    const opts = {
      height: "100%",
      width: "100%",
    };
    return (
      <div className="video-thumbs-wrapper">
        <h2>Videos</h2>

        <Slider {...settings}>
          <CustomSlide />
          <div className="slick-item">
            <div className="mainMediaTitleWrapper">
              <div className="mainMediaTitle">
                Episode 2 - #TechnologyOnTheMove | Ft. Lalitha Ramani
              </div>
              <div class="time">8 minutes</div>
              <Divider variant="fullWidth" />
            </div>
            <div className="subMediaTitle">
              Episode 2 - #TechnologyOnTheMove | Ft. Lalitha Ramani
            </div>
            <YouTube videoId="l8DWCf5aRqs" opts={opts}></YouTube>
          </div>
          <div className="slick-item">
            <div className="mainMediaTitleWrapper">
              <div className="mainMediaTitle">
                Episode 3 - #TechnologyOnTheMove | Ft. Lalitha Ramani
              </div>
              <div class="time">8 minutes</div>
              <Divider variant="fullWidth" />
            </div>
            <div className="subMediaTitle">
              Episode 3 - #TechnologyOnTheMove | Ft. Lalitha Ramani
            </div>
            <YouTube videoId="_3t47lJL4PM" opts={opts}></YouTube>
          </div>
          <div className="slick-item">
            <div className="mainMediaTitleWrapper">
              <div className="mainMediaTitle">
                Episode 4 - #TechnologyOnTheMove | Ft. Lalitha Ramani
              </div>
              <div class="time">8 minutes</div>
              <Divider variant="fullWidth" />
            </div>
            <div className="subMediaTitle">
              Episode 4 - #TechnologyOnTheMove | Ft. Lalitha Ramani
            </div>
            <YouTube videoId="CBE4Su301n4" opts={opts}></YouTube>
          </div>
          <div className="slick-item">
            <div className="mainMediaTitleWrapper">
              <div className="mainMediaTitle">
                Episode 5 - #TechnologyOnTheMove | Ft. Lalitha Ramani
              </div>
              <div class="time">8 minutes</div>
              <Divider variant="fullWidth" />
            </div>
            <div className="subMediaTitle">
              Episode 5 - #TechnologyOnTheMove | Ft. Lalitha Ramani
            </div>
            <YouTube videoId="E8UO7DA9KHs" opts={opts}></YouTube>
          </div>
          <div className="slick-item">
            <div className="mainMediaTitleWrapper">
              <div className="mainMediaTitle">
                Episode 6 - #TechnologyOnTheMove | Ft. Lalitha Ramani
              </div>
              <div class="time">8 minutes</div>
              <Divider variant="fullWidth" />
            </div>
            <div className="subMediaTitle">
              Episode 6 - #TechnologyOnTheMove | Ft. Lalitha Ramani
            </div>
            <YouTube videoId="_3t47lJL4PM" opts={opts}></YouTube>
          </div>
        </Slider>

        <Grid container justify="center" className="showAllButtonWrapper">
          <Button onClick={this.toggleShowAllVideos}>
            {buttonText} <ArrowForwardIosIcon fontSize="small" />
          </Button>
        </Grid>
      </div>
    );
  }
}
