/* 사용 소스 */
import 'date-fns';
import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import 'fontsource-roboto';
import {MuiPickersUtilsProvider,KeyboardDatePicker,} from '@material-ui/pickers';
import Contents from './Contents';
import SiteChoice from './SiteChoice';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import ReactGA from "react-ga"; 
import {useCookies} from 'react-cookie';

ReactGA.initialize("UA-73002501-5");
ReactGA.pageview("Detail");

const useStyles = makeStyles((theme) => ({

  paper: {
    marginTop: '-10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  background:{
    backgroundColor : '#b3e5fc',
    padding: theme.spacing(2, 2, 4),
  },
  cardGrid: {
    paddingTop: '0px',
    paddingBottom: theme.spacing(8),
  },
  text :{ 
    //Nanum Pen Script
    fontFamily: 'GmarketSansTTFMedium',
    fontWeight: 'Bold',
    color: 'black',
    fontSize:'10px',
    textAlign: 'center',
    paddingTop : '3.5px',
  },
  textNotice :{ 
    fontFamily: 'GmarketSansTTFMedium',
    color: 'black',
    fontSize:'9px',
    textAlign: 'left',
    fontWeight: 'Bold',
},
}));

const Detail = (props) => {
  
  const classes = useStyles();
  
  //const site = match.params.site; //main에서 전달된 url에서 site 부분만 가져옴
  const [site, setSite] = React.useState('none');
  const [cookies, setCookie, removeCookie] = useCookies(['siteCookie']);

  useEffect(() => {
    if(props.site != ''){
      setSite(props.site);
    }else{
      if(cookies.siteCookie !== undefined){ //site Cookie 쿠키값이 있으면
        setSite(cookies.siteCookie);
      }else{
        setSite('none');
      }
    }
  }, [])
  
  //앞단에서 위치정보가져와서 가장 가까운 지점으로 초기 셋팅
  //const [site, setSite] = React.useState(props.site);
  const handleSetSite = e => {
    setSite(e.target.value);
  };
  const minDate = new Date(new Date().getTime() + 86400000);
  
  //오늘 날짜 YYYY-MM-DD 로 만드는 과정 (캘린더에 오늘날짜를 기본으로 적용하기 위함)
  const date = new Date();   
  const year = date.getFullYear();
  const month = ("0" + (1 + date.getMonth())).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const today  =  year + "-" + month + "-" + day;

  // useState 라고 하는 중요한 개념인데, 일종의 앱 전체적으로 관리해야하는 상태값이다
  // 리액트를 공부하면 제일먼저 배우는게 props 랑 state 인데
  // props 는 부모 컴포넌트에서 자식 컴포넌트로 전달해주는 변경불가한 값이고 (부모 -> 자식)
  // state 는 부모 -> 자식으로 전달해주는 값이라기보다는 기능 구현에 꼭 필요한 데이터 ? 변경 가능함
  // useState 는 함수형 컴포넌트에서만 사용가능하다

  const [selectedDate, setSelectedDate] = React.useState(new Date(today)); // 캘린더 초기값 셋팅

  const handleDateChange = (date) => { //날짜 변경시
    setSelectedDate(date); 
    //setSelectedDate 메소드로 날짜 state 변경하면 위에선한한 selectedData 변수에 선택된 날짜가 담김.
    //이걸 props 에 담아서 하위 Contents 컴포넌트로 전달함
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.paper}> 
        {/* Hero unit */}
        <Container className={classes.cardGrid} maxWidth="md">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <br/>
            <Alert  variant="outlined" severity="info"><Typography className={classes.textNotice}>일부 메뉴는 재료 수급 사정 또는 구내식당 운영 상황에 따라 변경될 수 있습니다.</Typography></Alert>
          <Grid container justify="space-around">
            <SiteChoice setSite={handleSetSite} site={site} />
            {/* <DetailChoice /> */}
          </Grid>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              margin="normal"
              size="medium"
              id="date-picker-dialog"
              label="일자를 선택하세요"
              format="yyyy-MM-dd"
              value={selectedDate}
              onChange={handleDateChange} // 날짜 컴포넌트가 변경될때마다 onChange 메소드가 호출됨-> 위에 선언한 handleDateChange 호출
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid container justify="space-around">
            {/* 날짜 & 사이트를 props 로 전달 
            Contents.js 로 가보자*/}
            <Contents date={selectedDate} site={site}/>
          </Grid>
        </MuiPickersUtilsProvider>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default Detail
