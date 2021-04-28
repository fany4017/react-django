import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

  
}));

const Test = (props) => {

  const imgSrc = "http://127.0.0.1:8000/media/resturant_image/nhitcenter_thehanwu.jpg";
  alert(imgSrc);
  return (
    <div>
      <Carousel showThumbs={false} infiniteLoop={true} showIndicators={false} interval="2">
        <div style={{ height: "440px", color: "white" }}><img src={imgSrc}></img></div>
        <div style={{ height: "440px", color: "white" }}><img src={imgSrc}></img></div>
        <div style={{ height: "440px", color: "white" }}><img src={imgSrc}></img></div>
      </Carousel>
    </div>
  )
}
export default Test