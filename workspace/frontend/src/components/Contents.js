/* 사용 소스 */
import React,{useEffect} from 'react'
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
import ReactGA from "react-ga"; 
ReactGA.initialize("UA-73002501-5");
ReactGA.pageview("Contents");

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
    //NanumGothic-Bold
    fontFamily: 'GmarketSansTTFMedium',
    fontWeight: 'Bold',
    color: 'black',
    fontSize:'18px',
    textAlign: 'center',
  },
}));

const Contents = props =>  { //부모 컴포넌트로부터 전달받은 props를 받아온다
  //console.log('Contents 로그찍힘 : '+props.site + ' / ' + props.date)
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0); // value 의 초기값을 0 으로 지정

  const now = new Date();   
  const hours = now.getHours();
  const [tabValue, setTabvalue] = React.useState('');

  
  useEffect(() => {
    if((hours >= 0 && hours <= 9) || (hours >= 20 && hours <= 23)){
      setValue(0);
      setTabvalue(0);
    }else if(hours >= 10 && hours <= 12){
      setValue(1);
      setTabvalue(1);
    }else if(hours >= 13 && hours <= 19){
      setValue(2);
      setTabvalue(2);
    }
  }, [])
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setTabvalue(newValue);
  };

  const handleChangeIndex = (index, newValue) => {
    setValue(index);
    setTabvalue(newValue);
  };

  return (
    <div className={classes.root}>
      {/* AppBar , Tab, 이런건 material-ui 에서제공하는 컴포넌트고 
      SwipeableViews 이건 따로 npm install --save react-swipeable-views 으로 설치해야 쓸수 있는 컴포넌트  */}
      <AppBar  position="static" color="default">
        <Tabs
          value={value} //value
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
        index={value} //value
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={0} index={0} dir={theme.direction}>
          {/* 날짜 & site를 자식 컴포넌트로 전달 
          Morning.js 로 가보자*/}
          <Morning date={props.date} site={props.site}/>
        </TabPanel>
        <TabPanel value={1} index={1} dir={theme.direction}>
          <Lunch date={props.date} site={props.site}/>
        </TabPanel>
        <TabPanel value={2} index={2} dir={theme.direction}>
          <Dinner date={props.date} site={props.site}/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
export default Contents;