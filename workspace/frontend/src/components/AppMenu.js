/* 사용 소스 */
/*global kakao */
import React, {useEffect} from 'react';
import ReactGA from "react-ga";  // react ga
import { createBrowserHistory } from 'history';

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
import PrivacyPolicy from './PrivacyPolicy';
import Badge from '@material-ui/core/Badge';
import MainSiteList from './MainSiteList';
import Advertisement from './Advertisement';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import ReportIcon from '@material-ui/icons/Report';

const markerdata = [
  {
    site: "nhlife",
    lat: 37.563005503554535,
    lng: 126.96862132595075,
  },
  {
    site: "nhproperty",
    lat: 37.56405355528566,
    lng: 126.96573365335992,
  },
  {
    site: "nhitcenter",
    lat: 37.39863472468278,
    lng: 126.98800784718713,
  },
  {
    site: "nhit",
    lat: 37.46421591496631,
    lng: 127.0360252486866,
  },
  {
    site: "nhbank",
    lat: 37.56580256809762,
    lng: 126.96747152409849,
  },
  {
    site: "nhcore",
    lat: 37.566682877757664,
    lng: 126.96842527400186,
  }
];

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

  progressBar: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  background:{
    color : '#651fff',
  },
  text :{ 
    //NanumGothic-Bold
    fontFamily: 'SongMyung-Regular',
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
  const [site, setSite] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const message1 = 'click';
  const message2 = '추천';

  useEffect(() => {
    mapscript();
  }, []);

  var minDistance = '';
  var minSite = '';

  const mapscript = () => {
    let mapContainer = document.getElementById('map'); // 지도를 표시할 div 
    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 

    if (navigator.geolocation) {
        
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(function(position) {
        
        //접속자 현재 위치
        var lat = position.coords.latitude; // 위도
        var lon = position.coords.longitude; // 경도
        
        //농협생명 근무자 : "37.56348231035996", "126.9680859091507"
        //농협손해 근무자 : "37.563849111455426", "126.9657232531785"
        //의왕 근무자 : "37.39759781091387", "126.98621432406449"
        //양재 근무자 : "37.46420932844801", "127.03514090411251"
        //중앙회 근무자 : "37.566640336804305", "126.96838577331107"

        //var lat = "37.566640336804305"; // 위도
        //var lon = "127.03514090411251"; // 경도
        //var locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
    
        markerdata.forEach((el, index) => {
            
            var sitename = el.site;
            var lat2 = el.lat;
            var lng2 = el.lng;
            
            function deg2rad(deg) {
                return deg * (Math.PI/180)
            }
            var r = 6371; //지구의 반지름(km)
            var dLat = deg2rad(lat2-lat);
            var dLon = deg2rad(lng2-lon);
            var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var d = r * c; // Distance in km
            var distance =  Math.round(d*1000);

            if(index == 0){
                minSite = sitename
                minDistance = distance;
            }else{
                if(distance < minDistance){
                    minDistance = distance;
                    minSite = sitename
                }
            }
        });
        setSite(minSite);
    });
    
    
    } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    
        var locPosition = new kakao.maps.LatLng(33.450701, 126.570667);  
        var message = 'geolocation을 사용불가 상태!!'
        alert(message);
    }
  };
  return (
    <div className={classes.root} style={{position: 'relative'}}>
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
          <Badge className={classes.badge} badgeContent={message1} color="secondary"></Badge>
          <Tab label="제휴광고" className={classes.text} icon={<LiveTvIcon />} {...a11yProps(2)} />
          <Badge className={classes.badge} badgeContent={message2} color="primary"></Badge>
          <Tab label="주변맛집" className={classes.text} icon={<LocalDiningRoundedIcon />} {...a11yProps(3)} />
          <Tab label="공지사항" className={classes.text} icon={<NotificationsActiveRoundedIcon />} {...a11yProps(4)} />
          <Tab label="개인정보처리방침" className={classes.text} icon={<ReportIcon />} {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <MainSiteList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Detail site={site}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Detail site={site}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Advertisement />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Advertisement />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Resturant site={site}/>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Notice />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <PrivacyPolicy />
      </TabPanel>
      
    </div>
    
  );
}
