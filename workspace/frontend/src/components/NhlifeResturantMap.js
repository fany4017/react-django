/* 미 사용 소스 !!!!!!!!!!!!!!!!! */
import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'fontsource-roboto';
import Avatar from '@material-ui/core/Avatar';
import RoomIcon from '@material-ui/icons/Room';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Test from './Test';
const useStyles = makeStyles((theme) => ({ // useStyles 변수에 css 스타일 선언

    background:{
      backgroundColor : '#e0f2f1',
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
        fontFamily: 'Nanum Pen Script',
        fontWeight: 'Bold',
        color: 'black',
        fontSize:'25px',
        textAlign: 'center',
    },
    textTitle :{ 
        fontFamily: 'NanumGothic-Bold',
        fontWeight: 'Bold',
        color: 'black',
        fontSize:'18px',
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
    textSub :{ 
        fontFamily: 'Nanum Pen Script',
        fontWeight: 'Bold',
        color: 'black',
        fontSize:'16px',
        textAlign: 'center',
    },
}));

export default function NhlifeResturantMap() {

    const classes = useStyles(); // 이렇게 선언하면 classes.객체로 클래스 접근가능 
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }
    return (
        <div className={classes.paper}>
            {/* <Avatar className={classes.avatar}>
            <RoomIcon />
            </Avatar> */}
            <main><br/>
                <Accordion className={classes.background} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography className={classes.textTitle}>NH농협생명보험
                    <Typography className={classes.textDetail}>서울 서대문구 통일로 87 NH농협생명빌딩 동관 20F</Typography>
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Test />
                    </AccordionDetails><br/>
                </Accordion>
            </main>
        </div>
    )
}
