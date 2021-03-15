import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SiteChoice from './SiteChoice';
import 'fontsource-roboto';

import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import Header from './Header';
import ResturantList from './ResturantList';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
}));

const Resturant = ({match}) => {

  const classes = useStyles();
  const [site, setSite] = React.useState('');
  

  const handleSetSite = e => {
    setSite(e.target.value);
  };

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