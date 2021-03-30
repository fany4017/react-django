/* 사용 소스 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ScriptTag from 'react-script-tag'
const useStyles = makeStyles((theme) => ({
  
  appBar: {
    top: 'auto',
    bottom: -1,
    backgroundColor:'white' //#eeeeee
  },
  grow: {
    flexGrow: 1,
  },
  text :{
    padding: theme.spacing(1, 1, 1),
    fontFamily: 'SongMyung-Regular',
    fontWeight: 'Bold',
    textAlign: 'center',
    color:'black',
    width: '100%',
    fontSize:'10px'
  },
  addBanner :{
    width: '320px',
    margin: '0 auto',
    marginTop : '5px',
  }
}));

export default function Footer() {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <div className={classes.addBanner}>
              <ins
              class="kakao_ad_area"
              style={{display:"none"}}
              data-ad-unit="DAN-6b6kJtciUzz19Qwh"
              data-ad-width="320"
              data-ad-height="50"
              ></ins>
              <ScriptTag
              type="text/javascript"
              src="//t1.daumcdn.net/kas/static/ba.min.js"
              async
          ></ScriptTag>
          </div>
          {/* <Typography className={classes.text}>Copyright 2021. Nice Helper. <br/>All rights reserved.</Typography><br/> */}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
