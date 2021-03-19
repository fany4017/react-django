import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import KitchenRoundedIcon from '@material-ui/icons/KitchenRounded';
import LocalDiningRoundedIcon from '@material-ui/icons/LocalDiningRounded';
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Notice from './Notice';
import Resturant from './Resturant';
import Detail from './Detail';
import Badge from '@material-ui/core/Badge';
import MainSiteList from './MainSiteList';

function TabPanel(props) {
  
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
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
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  background:{
    backgroundColor : '#eeeeee',
  },
  text :{ 
    fontFamily: 'NanumGothic-Bold',
    fontWeight: 'Bold',
    color: 'black',
    fontSize:'12px',
  },
  badge: {
    '& > *': {
      margin: theme.spacing(2),
    }
  },
}));

export default function ScrollableTabsButtonForce() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const message = 'click';

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="HOME" className={classes.text} icon={<HomeIcon />} {...a11yProps(0)} />
          <Tab label="오늘의식단" className={classes.text} icon={<KitchenRoundedIcon />} {...a11yProps(1)} />
          <Badge className={classes.badge} badgeContent={message} color="secondary"></Badge>
          <Tab label="주변맛집" className={classes.text} icon={<LocalDiningRoundedIcon />} {...a11yProps(2)} />
          <Tab label="공지사항" className={classes.text} icon={<NotificationsActiveRoundedIcon />} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <MainSiteList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Detail />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Detail />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Resturant />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Notice />
      </TabPanel>
    </div>
  );
}
