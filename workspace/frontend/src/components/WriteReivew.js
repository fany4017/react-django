import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import {useCookies} from 'react-cookie';
const useStyles = makeStyles((theme) => ({

  layout: {
    width: 'auto',
    marginTop: theme.spacing(0),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  text :{
    fontFamily: 'NanumGothic-Bold',
    fontSize:'20px',
    fontWeight: 'Bold',
    textAlign: 'center',
    color: '#1a237e'
  },
  paper: {
    marginTop: '-20px',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  textSub :{
    fontFamily: 'NanumGothic-Bold',
    fontSize:'10px',
    fontWeight: 'Bold',
    fontWeight:'Bold',
    color:'red',
    textAlign:'center'
  },
}));

export default function WriteReivew(props) {

  const classes = useStyles();

  const site = props.site;
  const date = props.date;

  const [email, setEmail] = useState('');
  const [opinion, setOpinion] = useState('');

  let siteName = '';

  const [cookies, setCookie, removeCookie] = useCookies(['emailCookie']);
  //const inputRef = React.useRef(null);

  if(site == 'nhitcenter'){
    siteName = 'NH통합IT센터';
  }else if(site == 'nhcore'){
    siteName = '농협중앙회(본관)';
  }else if(site == 'nhbank'){
    siteName = 'NH농협은행 본점(신관)';
  }else if(site == 'nhlife'){
    siteName = 'NH농협생명보험';
  }else if(site == 'nhproperty'){
    siteName = 'NH농협손해보험(NH카페테리아)';
  }else if(site == 'nhit'){
    siteName = '농협정보시스템';
  }

  // useEffect(() => {
  //   if(cookies.emailCookie !== undefined) { //이메일 Cookie 가 있으면
  //     alert('쿠키있음');
  //   }
  //   setEmail(cookies.emailCookie);
  // }, []);
  
  const inputRef = React.useRef();

  const handleSend = (e) => {
    //이메일 체크
    //로컬 : http://127.0.0.1:8000/api/create/review/
    //운영 : https://nonghyup-babsang.com/api/create/review/
    if(isEmail(email) && opinion != ''){
      //전송하기
      
      fetch('https://nonghyup-babsang.com/api/create/review/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'site_code' : site,
        'site_name' : siteName,
        's_date' : date,
        'email' : email,
        'opinion' : opinion
        })
      })
      //쿠키 생성
      // const expires = new Date();
      // expires.setDate(expires.getDate() + 7); 
      // setCookie('emailCookie', email, {path: '/',expires});
      alert('성공적으로 전송되었습니다');
      props.setOpen(false);

    }else if(opinion == ''){
      alert('내용을 입력해주세요');
      //inputRef.current.focus();
    }else if(!isEmail(email)){
      alert('이메일이 형식에 맞지 않습니다');
      //inputRef.current.focus();
    }
  };
  
  function isEmail(asValue) {
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴	
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}><br/><br/><br/>
        <Paper className={classes.paper}>
          <Typography className={classes.text}>
            * 리뷰 작성하기 *
          </Typography><br/>
              <React.Fragment>
                  <React.Fragment>
                  <Grid container spacing={3} className={classes.text}>
                <Grid item xs={12} sm={6}>
                <TextField 
                    InputProps={{ style: { fontWeight: 'bold'} }}
                    required
                    id="site"
                    name="site"
                    label="구내식당"
                    value={siteName}
                    variant="outlined"
                    fullWidth
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    InputProps={{ style: { fontWeight: 'bold' } }}
                    required
                    id="date"
                    label="선택한 날짜"
                    name="date"
                    value={date}
                    variant="outlined"
                    fullWidth
                    helperText="선택하신 날짜에 제공된 메뉴에 관한 리뷰입니다"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    InputProps={{style: { fontWeight: 'bold'}}}
                    id="email"
                    name="email"
                    label="이메일을 입력하세요"
                    variant="outlined"
                    //value={email}
                    fullWidth
                    onChange={(event) => {setEmail(event.target.value)}}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                  InputProps={{style: { fontWeight: 'bold' } }}
                  id="opinion" 
                  name="opinion" 
                  variant="outlined"
                  label="내용을 입력하세요"
                  fullWidth 
                  onChange={(event) => {
                    setOpinion(event.target.value)}}
                />
                </Grid>
            </Grid>
            <br/><Typography className={classes.textSub}>*작성해주신 소중한 의견을 구내식당 측에 전달하겠습니다</Typography>
            <div style={{position:'relative'}} className={classes.buttons}><br/><br/><br/><br/>
                <Button style={{position:'absolute', top:'50%', left:'48%', transform:'translate(-50%,-50%)'}}
                variant="contained"
                color="primary"
                onClick={handleSend}
                className={classes.button}
                >
                <EmailIcon/>&nbsp;
                {'작성완료'}
                </Button>
            </div>
              </React.Fragment>
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}