import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

  
}));

const Test = (props) => {

  const imgSrc = props.imgsrc;
  alert(imgSrc);
  return (
    <div>
      <Carousel showThumbs={false} infiniteLoop={true} showIndicators={false} interval="2">
        <div style={{ height: "294px", color: "white" }}><img src={imgSrc}></img></div>
        <div style={{ height: "294px", color: "white" }}><img src={imgSrc}></img></div>
        <div style={{ height: "294px", color: "white" }}><img src={imgSrc}></img></div>
      </Carousel>
    </div>
  )
}
export default Test