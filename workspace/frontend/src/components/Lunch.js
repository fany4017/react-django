/* 사용 소스 */
import React,{useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import WriteReivew from './WriteReivew';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Slide from '@material-ui/core/Slide';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import Alert from '@material-ui/lab/Alert';
const useStyles = makeStyles((theme) => ({ // useStyles 변수에 css 스타일 선언

    li: {
        borderBottom: "1.5px solid rgb(212, 212, 212)",
        paddingBottom: '10px',
    },
    titleText :{
        fontWeight: 'Bold',
        color: '#f44336',
        textDecoration : 'underline',
    },
    text :{ 
        //NanumGothic-Bold SongMyung-Regular
        fontFamily: 'GmarketSansTTFLight',
        fontSize:'15px',
        fontWeight: 'Bold',
    },
    textInfo:{ 
        //Nanum Pen Script
        fontFamily: 'GmarketSansTTFMedium',
        fontWeight: 'Bold',
        color: 'black',
        fontSize:'10px',
        textAlign: 'left',
        paddingTop : '4px',
    },
    textButton :{
        //NanumGothic-Bold SongMyung-Regular
        fontFamily: 'GmarketSansTTFLight',
        fontSize:'15px',
        fontWeight: 'Bold',
    },
    appBar: {
        backgroundColor:'#2fa767',
        position: 'relative',
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Lunch = (props) => {

    const classes = useStyles(); // 이렇게 선언하면 classes.객체로 클래스 접근가능 
    let year = props.date.getFullYear();
    let month = ("0" + (1 + props.date.getMonth())).slice(-2);
    let day = ("0" + props.date.getDate()).slice(-2);
    let date =  year + "-" + month + "-" + day;
    let site = props.site;

    const[lunch1, setlunch1] = useState('준비중입니다');
    const[lunch2, setlunch2] = useState('');
    const[lunch3, setlunch3] = useState('');
    const[lunch4, setlunch4] = useState('');
    const[lunch5, setlunch5] = useState('');

    const[loading, setLoading] = useState(false); // api 호출했을때 속도가 늦어질 것을 대비해서 loading 변수를 만듬
    const[posts, setPosts] = useState('');

    useEffect( () => {
        fetchInitialData(); // useEffect 안에서 바로 fetch를 사용하지 말고, fetch 역할의 함수를 실행할것!
    },[site, date] )

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        //setResturant(resturant_code);
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
    };

    const fetchInitialData = async () => {

        setLoading(true);

        try{

            /* 로컬 서버 호출 */
            //const res = await fetch('http://127.0.0.1:8000/api/cafeteria/'+site+'/'+date);

            /* 운영 서버 호출 */
            const res = await fetch('https://nonghyup-babsang.com/api/cafeteria/'+site+'/'+date);
            //const res = await fetch('http://3.36.126.189/api/cafeteria/'+site+'/'+date);

            const data = await res.json();
            setPosts(data);//data 값이 있으면 posts에 셋팅

            if(data.detail != 'Not found.'){
                const lunch1Arr = data.lunch_type_1.split(",");
                const lunch2Arr = data.lunch_type_2.split(",");
                const lunch3Arr = data.lunch_type_3.split(",");
                const lunch4Arr = data.lunch_type_4.split(",");
                const lunch5Arr = data.lunch_type_5.split(",");

                const lunch1_element = [];
                const lunch2_element = [];
                const lunch3_element = [];
                const lunch4_element = [];
                const lunch5_element = [];

                setlunch1('');
                setlunch2('');
                setlunch3('');
                setlunch4('');
                setlunch5('');

                if(lunch1Arr.length >= 0 || lunch1Arr[0] != ''){
                    for(let i=0;i<lunch1Arr.length;i++){
                        if(i==0){
                            lunch1_element.push(<li><span className={classes.titleText}>{lunch1Arr[i]}</span><span>⭐</span></li> )
                        }else{
                            lunch1_element.push(<li>{lunch1Arr[i]}</li> )
                        }
                        
                    };
                    setlunch1(lunch1_element);
                }
                
                if(lunch2Arr.length >= 0 && lunch2Arr[0] != ''){
                    for(let i=0;i<lunch2Arr.length;i++){
                        if(i==0){
                            lunch2_element.push(<li><span className={classes.titleText}>{lunch2Arr[i]}</span><span>⭐</span></li> )
                        }else{
                            lunch2_element.push(<li>{lunch2Arr[i]}</li> )
                        }
                    };
                    setlunch2(lunch2_element);
                }
                
                if(lunch3Arr.length >= 0 && lunch3Arr[0] != ''){
                    for(let i=0;i<lunch3Arr.length;i++){
                        if(i==0){
                            lunch3_element.push(<li><span className={classes.titleText}>{lunch3Arr[i]}</span><span>⭐</span></li> )
                        }else{
                            lunch3_element.push(<li>{lunch3Arr[i]}</li> )
                        }
                    };
                    setlunch3(lunch3_element);
                }
                
                if(lunch4Arr.length >= 0 && lunch4Arr[0] != ''){
                    for(let i=0;i<lunch4Arr.length;i++){
                        if(i==0){
                            lunch4_element.push(<li><span className={classes.titleText}>{lunch4Arr[i]}</span><span>⭐</span></li> )
                        }else{
                            lunch4_element.push(<li>{lunch4Arr[i]}</li> )
                        }
                    };
                    setlunch4(lunch4_element);
                }

                if(lunch5Arr.length >= 0 && lunch5Arr[0] != ''){
                    for(let i=0;i<lunch5Arr.length;i++){
                        if(i==0){
                            lunch5_element.push(<li><span className={classes.titleText}>{lunch5Arr[i]}</span><span>⭐</span></li> )
                        }else{
                            lunch5_element.push(<li>{lunch5Arr[i]}</li> )
                        }
                    };
                    setlunch5(lunch5_element);
                }
                
            }else{
                setlunch1('등록전입니다');
                setlunch2('');
                setlunch3('');
                setlunch4('');
                setlunch5('');
            }
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
        <div className={classes.text}>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <ArrowBackIcon />
                        <Typography variant="h6" className={classes.text}>
                            &nbsp;뒤로가기
                        </Typography>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <List>
                    <WriteReivew setOpen={setOpen} date={date} site={site}/>
                </List>
            </Dialog>
            <div>{lunch1}</div><br/>
            <div>{lunch2}</div><br/>
            <div>{lunch3}</div><br/>
            <div>{lunch4}</div><br/>
            <div>{lunch5}</div><br/>
        </div>
    )
}
export default Lunch