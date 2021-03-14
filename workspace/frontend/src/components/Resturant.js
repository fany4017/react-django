import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SiteChoice from './SiteChoice';
import 'fontsource-roboto';

import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import Header from './Header';
import ResturantList from './ResturantList';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  background:{
    backgroundColor : '#b3e5fc',
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
    paddingTop: theme.spacing(2),
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
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Resturant = ({match}) => {

  const classes = useStyles();
  const [site, setSite] = React.useState('');
  

  const handleSetSite = e => {
    setSite(e.target.value);
  };

  console.log('site:'+site);
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        {/* Hero unit */}
        <Container className={classes.cardGrid} maxWidth="md">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <SiteChoice setSite={handleSetSite} site={site} />
            {/* <DetailChoice /> */}
          </Grid>
          <Grid container justify="space-around">
            <ResturantList site={site}/>
          </Grid>
        </MuiPickersUtilsProvider>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default Resturant;