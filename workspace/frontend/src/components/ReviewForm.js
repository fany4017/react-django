import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
      width:'67%'
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
    text :{
      fontFamily: 'NanumGothic-Bold',
      fontSize:'10px',
      fontWeight: 'Bold',
      fontWeight:'Bold',
      color:'red',
      textAlign:'center'
    },
}));

export default function ReviewForm(props) {
    
    const classes = useStyles();
    const site = props.site;
    const date = props.date;

    const [email, setEmail] = useState('');
    const [opinion, setOpinion] = useState('');

    let siteName = '';

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
    
  
    const inputRef = React.useRef();
    const [selectionStart, setSelectionStart] = React.useState();
    const updateSelectionStart = () =>
      setSelectionStart(inputRef.current.selectionStart);
    

    const handleSend = () => {
      //전송하기
      // fetch('http://127.0.0.1:8000/api/create/review/', {
      //   method: 'POST',
      //   headers: {
      //       'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     'site_code' : 'nhlife',
      //     'email' : 'fany4017@naver.com',
      //     'site_name' : 'NH농협생명',
      //     's_date' : '2021-04-18',
      //     'email' : 'fany4017@naver.com',
      //     'opinion' : '음식맛이 아주 환상적입니다. 세상에 이런맛을 내기 위해서 얼마나 노력하셨을까 ㅠㅠ'

      //   })
      // })
      // .then(response => response.json())
      // .then(response => {
      //   if (response.token) {
      //     alert('1');
      //     localStorage.setItem('wtw-token', response.token);
      //   }else{
      //     alert('2');
      //   }
      // })
      //alert('전송이 완료되었습니다!');
      alert('afasdfasdfasd');
      props.setOpen(false);
    };

    // function isEmail(asValue) {
    //   var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    
    //   return regExp.test(asValue); // 형식에 맞는 경우 true 리턴	
    
    // }
    return (
        <React.Fragment >
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
                autoComplete="given-name"
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
                autoComplete="family-name"
                helperText="선택하신 날짜에 제공된 식단에 관한 리뷰입니다"
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                onSelect={updateSelectionStart}
                inputRef={inputRef}
                InputProps={{style: { fontWeight: 'bold'}}}
                id="email"
                name="email"
                label="이메일을 입력하세요"
                variant="outlined"
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
              label="의견을 입력하세요"
              fullWidth 
              onChange={(event) => {
                setOpinion(event.target.value)}} 
            />
            </Grid>
        </Grid>
        <br/><Typography className={classes.text}>*작성해주신 소중한 의견을 식당측에 전달하겠습니다</Typography>
        <div className={classes.buttons}>
            <Button
            variant="contained"
            color="primary"
            onClick={handleSend}
            className={classes.button}
            >
            <EmailIcon/>&nbsp;
            {'보내기'}
            </Button>
        </div>
        </React.Fragment>
    );
}