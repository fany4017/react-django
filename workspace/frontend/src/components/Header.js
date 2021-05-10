/* 사용 소스 */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import lightBlue from '@material-ui/core/colors/purple';
import Typography from '@material-ui/core/Typography';
import logoImage from '../images/NB_logo_sm.png';
const useStyles = makeStyles((theme) => ({

  toolbar: {
    //#69f0ae, #4caf50
    //borderBottom: `1px solid ${theme.palette.divider}`,
    //backgroundColor:'#64dd17',#69f0ae, #00c853
    //backgroundColor:'#00c853',
    backgroundColor:'#2fa767',
  },
  text :{ 
    //fontFamily: 'Nanum Pen Script',Dokdo-Regular, SongMyung-Regular, Wemakeprice-Bold, peach_TTF
    fontFamily: 'Wemakeprice-Bold',
    color: 'white',
    fontSize:'20px'
  },
  palette: {
    primary: lightBlue,
    secondary: lightBlue,
  },
}));

export default function Header(props) {
  
  const classes = useStyles();
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
      <img src = {logoImage} width='30' height='30'/>&nbsp;&nbsp;<Typography className={classes.text}>농협인의 밥상</Typography>
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};