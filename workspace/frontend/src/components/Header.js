import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import EcoIcon from '@material-ui/icons/Eco';
import lightBlue from '@material-ui/core/colors/purple';
import Guide from './Guide';
const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor:'#ff6f00',
  },
  text :{ 
    fontFamily: 'Nanum Pen Script',
    fontWeight: 'Bold',
    color: 'white',
    fontSize:'25px'
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
        <Button size="large" className={classes.text}><EcoIcon></EcoIcon> 농협인의 밥상</Button>
        {/* <Guide /> */}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};