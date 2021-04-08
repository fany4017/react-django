/* 사용 소스 */
import 'date-fns';
import React,{useEffect} from 'react';
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
import Typography from '@material-ui/core/Typography';
import ResturantList from './ResturantList';
import ReactGA from "react-ga"; 
ReactGA.initialize("UA-73002501-5");
ReactGA.pageview("ResturantList");

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: '0px',
    paddingBottom: theme.spacing(8),
  },
  text :{ 
    //Nanum Pen Script
    fontFamily: 'NanumGothic-Bold',
    fontWeight: 'Bold',
    color: 'black',
    fontSize:'16px',
    textAlign: 'center',
  },
}));

const Resturant = (props) => {

  const classes = useStyles();
  //앞단에서 위치정보가져와서 가장 가까운 지점으로 초기 셋팅
  const [site, setSite] = React.useState('none');

  useEffect(() => {
    if(props.site != ''){
      setSite(props.site);
    }else{
      setSite('none');
    }
  }, [])
  
  const handleSetSite = e => {
    setSite(e.target.value);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Container className={classes.cardGrid} maxWidth="md">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Typography className={classes.text}>현직자가 직접 엄선한 맛집</Typography>
          <Grid container justify="space-around">
            <SiteChoice setSite={handleSetSite} site={site} />
            {/* <DetailChoice /> */}
          </Grid>
          {/* {
          (function() {
            if (site === "nhlife") return (<NhlifeResturantMap></NhlifeResturantMap>);
            if (site === 'nhproperty') return (<div>농협손해</div>);
            if (site === 'nhit') return (<div>농협정보</div>);
          })()
          } */}
          <br></br>
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