/* 사용 소스 */
import React from 'react';
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
        margin: theme.spacing(1),
        backgroundColor: '#1a237e',
        alignItems: 'center',
    },
    text :{ 
        //Nanum Pen Script
        fontFamily: 'SongMyung-Regular',
        fontWeight: 'Bold',
        color: 'black',
        fontSize:'20px',
        textAlign: 'center',
    },
    textTitle :{ 
        //NanumGothic-Bold
        fontFamily: 'SongMyung-Regular',
        fontWeight: 'Bold',
        color: 'black',
        fontSize:'16px',
        textAlign: 'left',
    },
    textSub :{ 
        fontFamily: 'SongMyung-Regular',
        fontWeight: 'Bold',
        color: 'black',
        fontSize:'14px',
        textAlign: 'left',
    },
    textDetail :{ 
        fontFamily: 'NanumGothic-Bold',
        fontWeight: 'Bold',
        color: 'black',
        fontSize:'12px',
        textAlign: 'left',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
}));

export default function MainSiteList() {

    const classes = useStyles(); // 이렇게 선언하면 classes.객체로 클래스 접근가능 
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }
    return (
        <div className={classes.paper}>
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
                    <Typography className={classes.textTitle}>농업중앙회(본관)
                    <Typography className={classes.textDetail}>서울 중구 새문안로 16 B2</Typography>
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <NhcoreMap />
                    </AccordionDetails><br/>
                </Accordion>
                <Accordion className={classes.background} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography className={classes.textTitle}>NH농협은행 본점(신관)
                    <Typography className={classes.textDetail}>서울 중구 통일로 120 NH농협은행 신관 12F</Typography>
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <NhbankMap />
                    </AccordionDetails><br/>
                </Accordion>
                <Accordion className={classes.background} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography className={classes.textTitle}>NH농협생명보험
                    <Typography className={classes.textDetail}>서울 서대문구 통일로 87 NH농협생명 20F</Typography>
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <NhlifeMap />
                    </AccordionDetails><br/>
                </Accordion>
                <Accordion className={classes.background} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography className={classes.textTitle}>NH농협손해보험<span className={classes.textSub}> (KT&G 서대문타워)</span>
                    <Typography className={classes.textDetail}>서울 서대문구 충정로 60 B1</Typography>
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <NhpropertyMap />
                    </AccordionDetails><br/>
                </Accordion>
                <Accordion className={classes.background} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography className={classes.textTitle}>농협정보시스템
                    <Typography className={classes.textDetail}>서울특별시 서초구 양재2동 매헌로 24 B1</Typography>
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <NhitMap />
                    </AccordionDetails><br/>
                </Accordion><br/><br/><br/><br/>
                
            </main>
        </div>
    )
}
