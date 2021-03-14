import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Morning from './Morning';
import Lunch from './Lunch';
import Dinner from './Dinner';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
  text :{ 
    fontFamily: 'Campton-Bold',
    fontWeight: 'bold',
  }
}));

const Contents = props =>  { //부모 컴포넌트로부터 전달받은 props를 받아온다

  //const [selectedDate, setSelectedDate] = React.useState(props.date);
  //const [site, setSite] = React.useState(props.site);
  
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  // useEffect( () => {

  // },[selectedDate] )


  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab className={classes.text} label="조식" {...a11yProps(0)} />
          <Tab className={classes.text} label="중식" {...a11yProps(1)} />
          <Tab className={classes.text} label="석식" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {/* 날짜 & site를 자식 컴포넌트로 전달 */}
          <Morning date={props.date} site={props.site}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Lunch date={props.date} site={props.site}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Dinner date={props.date} site={props.site}/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
export default Contents;