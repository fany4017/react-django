import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import 'fontsource-roboto';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import background from '../images/background_nature.jpg';

const useStyles = makeStyles((theme) => ({

  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  background:{
    backgroundColor : 'white',
    padding: theme.spacing(2, 2, 4),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '25.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  text :{ 
    fontFamily: 'cursive',
    fontWeight: 'bold',
    textAlign: 'center',
  }
}));

export default function Main() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Header title="" sections={sections} /> */}
      <Header title=""/>
      <main>
        <Container className={classes.cardGrid, classes.background} maxWidth="md" style={{ 
          backgroundImage: `url(${background})`
        }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                      <Link to="/detail/nhlife" >
                        <CardMedia
                            className={classes.cardMedia}
                            image="/images/NHLIFE.jpg"
                            title="Image title"
                        />
                      </Link>
                      <Typography gutterBottom variant="h8" component="h4" align="center">
                        서울특별시 서대문구 통일로 87
                      </Typography>
                      
                  </Card>
                </Grid>
                
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <Link to="/detail/nhitcenter" >
                        <CardMedia
                            className={classes.cardMedia}
                            image="/images/NHBANK.jpg"
                            title="Image title"
                        />
                      </Link>
                      <Typography gutterBottom variant="h8" component="h4" align="center">
                        서울특별시 중구 통일로 120(충정로1가)
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <Link to="/detail/nhit" >
                        <CardMedia
                            className={classes.cardMedia}
                            image="/images/NHIT.jpg"
                            title="Image title"
                        />
                      </Link>
                      <Typography gutterBottom variant="h8" component="h4" align="center">
                        서울특별시 서초구 양재2동 매헌로 24
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Footer/>
      {/* End footer */}
    </React.Fragment>
  );
}