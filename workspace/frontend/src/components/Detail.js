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
// const sections = [
//   { title: 'HOME', url: '#' },
//   { title: '식단표', url: '#' },
//   { title: '주변맛집', url: '#' },
//   { title: '공지사항', url: '#' },
// ];


const Detail = ({match}) => {

  const site = match.params.site; //main에서 전달된 url에서 site 부분만 가져옴
  const classes = useStyles();

  const date = new Date();   //오늘 날짜
  const year = date.getFullYear();
  const month = ("0" + (1 + date.getMonth())).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const today  =  year + "-" + month + "-" + day;

  const [selectedDate, setSelectedDate] = React.useState(new Date(today)); // 캘린더 초기값 셋팅

  const handleDateChange = (date) => { //날짜 변경시
    setSelectedDate(date); //setSelectedDate 메소드로 날짜 state 변경
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
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
          <Grid container justify="space-around">
            {/* 날짜 & 사이트를 props 로 전달 */}
            <Contents date={selectedDate} site={site}/>
          </Grid>
        </MuiPickersUtilsProvider>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default Detail;