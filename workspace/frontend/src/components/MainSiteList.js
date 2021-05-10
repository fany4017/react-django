/* 사용 소스 */
import React,{useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'fontsource-roboto';
import Avatar from '@material-ui/core/Avatar';
import RoomIcon from '@material-ui/icons/Room';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NhlifeMap from './NhlifeMap';
import NhitcenterMap from './NhitcenterMap';
import NhitMap from './NhitMap';
import NhpropertyMap from './NhpropertyMap';
import NhcoreMap from './NhcoreMap';
import NhbankMap from './NhbankMap';
import {useCookies} from 'react-cookie';
import Alert from '@material-ui/lab/Alert';
import ReactGA from "react-ga"; 
ReactGA.initialize("UA-73002501-5");
ReactGA.pageview("MainSiteList");
const useStyles = makeStyles((theme) => ({ // useStyles 변수에 css 스타일 선언

    //#e0f2f1, #dcedc8
    background:{
      backgroundColor : '#e8f5e9',
    },
    paper: {
        marginTop: '-10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(0),
        backgroundColor: '#1a237e',
        alignItems: 'center',
    },
    text :{ 
        //Nanum Pen Script
        fontFamily: 'Wemakeprice-Bold',
        fontWeight: 'Bold',
        color: 'black',
        fontSize:'20px',
        textAlign: 'center',
    },
    textTitle :{ 
        //NanumGothic-Bold
        fontFamily: 'GmarketSansTTFMedium',
        fontWeight: 'Bold',
        color: 'black',
        fontSize:'16px',
        textAlign: 'left',
    },
    textSub :{ 
        fontFamily: 'GmarketSansTTFLight',
        color: 'black',
        fontSize:'11px',
        textAlign: 'left',
    },
    textDetail :{ 
        fontFamily: 'GmarketSansTTFLight',
        fontWeight: 'Bold',
        color: 'black',
        fontSize:'12px',
        textAlign: 'left',
    },
    textNotice :{ 
        fontFamily: 'GmarketSansTTFMedium',
        color: 'black',
        fontSize:'9px',
        textAlign: 'left',
        fontWeight: 'Bold',
    },
}));

export default function MainSiteList(props) {

    const classes = useStyles(); // 이렇게 선언하면 classes.객체로 클래스 접근가능 
    const [expanded, setExpanded] = React.useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['siteCookie']);
   
    // useEffect(() => {
    //     if(props.site == 'nhitcenter' || cookies.siteCookie == 'nhitcenter'){
    //         setExpanded(true ? 'panel1' : false);
    //     }else if(props.site == 'nhcore' || cookies.siteCookie == 'nhcore'){
    //         setExpanded(true ? 'panel2' : false);
    //     }else if(props.site == 'nhbank' || cookies.siteCookie == 'nhbank'){
    //         setExpanded(true ? 'panel3' : false);
    //     }else if(props.site == 'nhlife' || cookies.siteCookie == 'nhlife'){
    //         setExpanded(true ? 'panel4' : false);
    //     }else if(props.site == 'nhproperty' || cookies.siteCookie == 'nhproperty'){
    //         setExpanded(true ? 'panel5' : false);
    //     }else if(props.site == 'nhit' || cookies.siteCookie == 'nhit'){
    //         setExpanded(true ? 'panel6' : false);
    //     }
    // }, [])
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }
    return (
        <div className={classes.paper}>
            <br/>
            <Alert variant="outlined" severity="error"><Typography className={classes.textNotice}>원활한 앱사용을 위해 위치정보 수집을 허용해주세요.<br/>현 위치에서 가장 가까운 구내식당 정보가 보여집니다.</Typography></Alert>
            <br/>
            <Avatar className={classes.avatar}>
            <RoomIcon />
            </Avatar>
            <Typography className={classes.text}>제휴 식당 목록</Typography><br/>
            <main>
                <Accordion className={classes.background} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography className={classes.textTitle}>NH통합IT센터
                    <Typography className={classes.textDetail}>경기도 의왕시 포일동 617 NH통합IT센터 3F</Typography>
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <NhitcenterMap />
                    </AccordionDetails><br/>
                </Accordion>
                <Accordion className={classes.background} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography className={classes.textTitle}>NH농협생명보험
                    <Typography className={classes.textDetail}>서울 서대문구 통일로 87 NH농협생명 20F</Typography>
                    </Typography>
                    </AccordionSummary>
                    <Typography style={{paddingLeft:'16px', fontSize:'12px', fontWeight: 'Bold', fontFamily: 'GmarketSansTTFLight'}}>
                        [운영 시간 및 가격]<br/>
                        조식 :  08:00 ~ 09:00 (3,700원)<br/>
                        중식 :  11:30 ~ 13:00 (4,700원)<br/>
                    </Typography><br/>
                    <AccordionDetails>
                        <NhlifeMap />
                    </AccordionDetails><br/>
                </Accordion>
                <Accordion className={classes.background} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography className={classes.textTitle}>NH농협손해보험<span className={classes.textSub}> (KT&G 서대문타워)</span>
                    <Typography className={classes.textDetail}>서울 서대문구 충정로 60 B1</Typography>
                    </Typography>
                    </AccordionSummary>
                    <Typography style={{paddingLeft:'16px', fontSize:'12px', fontWeight: 'Bold', fontFamily: 'GmarketSansTTFLight'}}>
                        [운영 시간 및 가격]<br/>
                        조식 :  07:30 ~ 08:30 (3,500원)<br/>
                        중식 :  12:00 ~ 13:30 (5,500원)<br/>
                        석식 :  17:30 ~ 18:30 (5,500원)·셀프라면(3,500원)
                    </Typography><br/>
                    <AccordionDetails>
                        <NhpropertyMap />
                    </AccordionDetails><br/>
                </Accordion>
                <Accordion className={classes.background} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography className={classes.textTitle}>NH디지털혁신센터<span className={classes.textSub}> (농협정보시스템)</span>
                    <Typography className={classes.textDetail}>서울특별시 서초구 양재2동 매헌로 24 6F</Typography>
                    </Typography>
                    </AccordionSummary>
                    <Typography style={{paddingLeft:'16px', fontSize:'12px', fontWeight: 'Bold', fontFamily: 'GmarketSansTTFLight'}}>
                        [운영 시간 및 가격]<br/>
                        중식 :  11:30 ~ 13:00 (5,500원)<br/>
                    </Typography><br/>
                    <AccordionDetails>
                        <NhitMap />
                    </AccordionDetails><br/>
                </Accordion><br/><br/><br/>
            </main>
        </div>
    )
}
