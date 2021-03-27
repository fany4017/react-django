/* 사용 소스 */
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme) => ({

    background:{
        backgroundColor : '#e0f2f1',
    },
    root: {
        width: '99%',
        paddingLeft: '2%',
        paddingRight: '1%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '40.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    textTitle :{ 
        fontFamily: 'NanumGothic-Bold',
        fontWeight: 'Bold',
        color: 'black',
        fontSize:'16px',
        textAlign: 'left',
    },
    textDetail :{ 
        fontFamily: 'NanumGothic-Bold',
        fontWeight: 'Bold',
        color: 'black',
        fontSize:'12px',
        textAlign: 'left',
    },
}));

const Notice = () => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const[loading, setLoading] = useState(false); // api 호출했을때 속도가 늦어질 것을 대비해서 loading 변수를 만듬
    const[posts, setPosts] = useState('');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    useEffect( () => { // 이건 컴포넌트가 로딩되면 자동으로 실행되는 함수인데
        //로딩되면 fetchInitialData() 를 사용해서 api 통신을 하여 조식 메뉴를 가져올것임
        fetchInitialData(); // useEffect 안에서 바로 fetch를 사용하지 말고, fetch 역할의 함수를 실행할것!
    },[] )

    const fetchInitialData = async () => { // fetchInitialData 함수 선언을 하는데 async() : 비동기로 선언함

    setLoading(true);

    try{
        //api 통신하는 방법은 axios 랑 fetch 가 있는데 fetch 를 사용함
        //그 이유는 내가 참고한 사이트가 fetch 를 쓰길래 
        const res = await fetch('http://3.36.126.189/api/notice');
        const data = await res.json(); //res 에 결과가 담기고 그걸 json 으로 파싱해서 data에 담음
        setPosts(data);//data 값이 있으면 posts에 셋팅

    }catch(e){
        console.log(e);
    }
        setLoading(false);//api 호출완료되면 loading 값을 true 로 변경 -> 즉, api 값이 넘어오기전에는 대기 중... 으로 나타남
    }
    if(loading){ // api 값이 넘어 오기 전이면..
        return <React.Fragment> 대기 중...</React.Fragment>;
    }
    if(!posts){ // api로부터 받아온 값이 없으면
        return null; //return null
    }
  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.root}>
            {posts.map((post) => (
                <Accordion className={classes.background} expanded={expanded === 'panel'+post.id} onChange={handleChange('panel'+post.id)}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography className={classes.heading, classes.textTitle}>[관리자]</Typography>&nbsp;&nbsp;
                    <Typography className={classes.secondaryHeading, classes.textTitle}>{post.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography className={classes.textDetail}>
                        {post.content}
                    </Typography>
                    </AccordionDetails><br/>
                </Accordion>
            ))}
        </div>
      </main>
    </React.Fragment>
  );
}

export default Notice
