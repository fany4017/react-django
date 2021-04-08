/* 사용 소스 */
import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import 'fontsource-roboto';
import Card from '@material-ui/core/Card';
import ScriptTag from 'react-script-tag'
import ReactGA from "react-ga"; 
ReactGA.initialize("UA-73002501-5");
ReactGA.pageview("AdvertisementList");

const useStyles = makeStyles((theme) => ({ // useStyles 변수에 css 스타일 선언

    root: {
        width: '322px',
    },
    paper: {
        marginTop: '-10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    text :{ 
        //Nanum Pen Script
        fontFamily: 'NanumGothic-Bold',
        fontWeight: 'Bold',
        color: 'black',
        fontSize:'20px',
        textAlign: 'center',
    },
    textSub :{ 
        fontFamily: 'NanumGothic-Bold',
        fontWeight: 'Bold',
        color: 'black',
        fontSize:'10px',
        textAlign: 'center',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
}));

export default function AdvertisementList() {

    const classes = useStyles(); // 이렇게 선언하면 classes.객체로 클래스 접근가능 
    
    const[loading, setLoading] = useState(false); // api 호출했을때 속도가 늦어질 것을 대비해서 loading 변수를 만듬
    const[posts, setPosts] = useState('');

    const[content1, setContent1] = useState(''); 
    const[content2, setContent2] = useState(''); 
    const[content3, setContent3] = useState(''); 
    const[content4, setContent4] = useState(''); 
    const[content5, setContent5] = useState(''); 
    const[content6, setContent6] = useState(''); 
    //const url = 'https://ads-partners.coupang.com/banners/462395?subId=&traceId=V0-301-879dd1202e5c73b2-I462395&w=728&h=90';
    useEffect( () => { // 이건 컴포넌트가 로딩되면 자동으로 실행되는 함수인데
        //로딩되면 fetchInitialData() 를 사용해서 api 통신을 하여 조식 메뉴를 가져올것임
        fetchInitialData(); // useEffect 안에서 바로 fetch를 사용하지 말고, fetch 역할의 함수를 실행할것!
    },[] )

    const fetchInitialData = async () => { // fetchInitialData 함수 선언을 하는데 async() : 비동기로 선언함

    setLoading(true);

    try{

        /* 로컬 서버 호출 */
        //const res = await fetch('http://127.0.0.1:8000/api/advertisement/');
        
        /* 운영 서버 호출 */
        const res = await fetch('https://nonghyup-babsang.com/api/advertisement/');

        const data = await res.json(); //res 에 결과가 담기고 그걸 json 으로 파싱해서 data에 담음
        setPosts(data);//data 값이 있으면 posts에 셋팅

        // 6개만 랜덤으로 뽑기 
        let arr = [];
        for(let i = 0; i < 6; i++){
            arr.push(Math.floor(Math.random()*data.length)); 
            for(let c = 0; c<i; c++){
                if (arr[i] === arr[c]) {
                    arr.pop();
                    i--;  
                }
            }
        }
    
        setContent1(data[arr[0]].link);
        setContent2(data[arr[1]].link);
        setContent3(data[arr[2]].link);
        setContent4(data[arr[3]].link);
        setContent5(data[arr[4]].link);
        setContent6(data[arr[5]].link);

    }catch(e){
        console.log(e);
    }
        setLoading(false);//api 호출완료되면 loading 값을 true 로 변경 -> 즉, api 값이 넘어오기전에는 대기 중... 으로 나타남
    }
    if(!posts){ // api로부터 받아온 값이 없으면
        return null; //return null
    }
    if(loading){ // api 값이 넘어 오기 전이면..
        return <React.Fragment> 대기 중...</React.Fragment>;
    }
    return (
        <div className={classes.paper}><br/>
            <Typography className={classes.textSub}> 해당앱은 파트너스 활동을 통해 일정액의 수수료를 제공받을 수 있습니다. </Typography>
            <Typography className={classes.textSub}> 수수료는 더 나은 서비스 제공에 도움이됩니다. </Typography><br/>
            <main>
                <div >
                    <ins
                    class="kakao_ad_area"
                    style={{display:"none"}}
                    data-ad-unit="DAN-6ATQgCjkEnooHE3v"
                    data-ad-width="320"
                    data-ad-height="100"
                    ></ins>
                    <ScriptTag
                    type="text/javascript"
                    src="//t1.daumcdn.net/kas/static/ba.min.js"
                    async
                ></ScriptTag>
                </div>
                <Card className={classes.root} >
                    <span dangerouslySetInnerHTML={{__html: content1 }}></span>
                    <span dangerouslySetInnerHTML={{__html: content2 }}></span>
                    <span dangerouslySetInnerHTML={{__html: content3 }}></span>
                    <span dangerouslySetInnerHTML={{__html: content4 }}></span>
                    <span dangerouslySetInnerHTML={{__html: content5 }}></span>
                    <span dangerouslySetInnerHTML={{__html: content6 }}></span>
                </Card>
                <br/><br/>
            </main>
        </div>
    )
}
