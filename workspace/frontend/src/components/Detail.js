import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import 'fontsource-roboto';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import Contents from './Contents';
import Header from './Header';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  background:{
    backgroundColor : '#b3e5fc',
    padding: theme.spacing(2, 2, 4),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '25.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Detail = ({match}) => { //match 로 Main.js에서 site 값을 가져올수있음 /detail/nhlife 의 nhlife 값

  const site = match.params.site; //main에서 전달된 url에서 site 부분만 가져옴
  const classes = useStyles();

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
      <Header title=""/>
      <main>
        {/* Hero unit */}
        <Container className={classes.cardGrid} maxWidth="md">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="일자를 선택하세요"
              format="yyyy/MM/dd"
              value={selectedDate}
              onChange={handleDateChange} // 날짜 컴포넌트가 변경될때마다 onChange 메소드가 호출됨-> 위에 선언한 handleDateChange 호출
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
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
