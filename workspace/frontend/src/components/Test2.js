import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Carousel } from "react-responsive-carousel";
import RestaurantIcon from '@material-ui/icons/Restaurant';
const useStyles = makeStyles((theme) => ({

  toolbar: {
    backgroundColor:'#00c853',
  },
  text: {
    fontFamily: 'NanumGothic-Bold',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  
}));

const cards = [1, 2, 3, 4];

export default function Test2(props) {
  
  const resturant_code = props.resturant;
  const classes = useStyles();
  const imgSrc1 = "http://127.0.0.1:8000/media/resturant_image/nhitcenter_thehanwu.jpg";
  const imgSrc2 = "http://127.0.0.1:8000/media/resturant_image/nhit_cheongchungamja.jpg";
  const imgSrc3 = "http://127.0.0.1:8000/media/resturant_image/nhitcenter_jeonjumyeongka_Jgaks94.jpg";

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                <div>
                  <Carousel className={classes.image} showThumbs={false} infiniteLoop={true} showIndicators={false} interval="2">
                    <div><img style={{height: "400px"}} src={imgSrc1}></img></div>
                    <div><img style={{height: "400px"}} src={imgSrc2}></img></div>
                    <div><img style={{height: "400px"}} src={imgSrc3}></img></div>
                  </Carousel>
                </div>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      식당 전경
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}