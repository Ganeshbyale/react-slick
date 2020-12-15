import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Carousel from "../components/carousel";
import ShowAllVideos from "../components/show-all-videos";
import SimpleSlider from "../components/SimpleSlider";
import "../css/slick-theme.css";
import "../css/slick.css";

class CarouselWrapper extends Component {
  render() {
    const isShowMore=true;
    if(isShowMore){
      return (
        <Container className ="video-thumbs-wrapper"  maxWidth="lg">
          <ShowAllVideos />
        </Container>
      );
    } 
    return (
      <Container className="video-thumbs-wrapper" maxWidth="lg">
        {/* <Carousel /> */}
        <SimpleSlider />
      </Container>
    );
    
  }
}

export default CarouselWrapper;
