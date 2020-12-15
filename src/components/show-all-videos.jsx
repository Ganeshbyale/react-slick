import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CardMedia from "@material-ui/core/CardMedia";
import VideoMediaCard from "./VideoMediaCard";
import "../css/carousel.css";
import YouTube from "react-youtube";

class ShowAllVideos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false,
    };
    this.toggleShowAllVideos = this.toggleShowAllVideos.bind(this);
  }

  toggleShowAllVideos(){
      this.setState({showAll: !this.state.showAll ? true : false});
  }

  render() {
      
      const opts = {
        height: "388",
        width: "612",
      };
    return (
      <div>
       
        <Grid container className="allVideosGrid">
          <Grid item xs={6} className="allVideosGridLeft">
          <YouTube videoId="l8DWCf5aRqs" opts={opts}></YouTube>
          </Grid>
          <Grid item xs={6} className="allVideosGridRight">
          Rohit Kaila on All Things Tech | #TechnologyOnTheMove
          </Grid>
        </Grid>

        <Grid container className="allVideosGrid">
          <Grid item xs={6} className="allVideosGridLeft">
          <YouTube videoId="_3t47lJL4PM" opts={opts}></YouTube>
          </Grid>
          <Grid item xs={6} className="allVideosGridRight">
          Episode 2 - #TechnologyOnTheMove | Ft. Lalitha Ramani
          </Grid>
        </Grid>
        
       
      </div>
    );
  }
}

export default ShowAllVideos;
