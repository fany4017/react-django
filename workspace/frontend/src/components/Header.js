import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import EcoIcon from '@material-ui/icons/Eco';
const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  text :{ 
    fontFamily: 'Campton-Bold',
    fontWeight: 'Bold',
    color: '#00a152'
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const sections = [
    { title: '식단표', url: '/' },
    { title: '주변맛집', url: '/resturant' },
    { title: '공지사항', url: '#' },
  ];
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="large" className={classes.text}><EcoIcon></EcoIcon>농협인의 밥상</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
        </Typography>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section, index) => (
          <Link style={{ fontWeight: 'Bold' }}
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};