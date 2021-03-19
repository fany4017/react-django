import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor:'#eeeeee'
  },
  grow: {
    flexGrow: 1,
  },
  text :{
    padding: theme.spacing(1, 1, 1),
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black',
    width: '100%',
  }
}));

export default function Footer() {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <div className={classes.grow} />
          <Typography className={classes.text}>Copyright 2021. Nice Helper. <br/>All rights reserved.</Typography><br/>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
