/* 사용 소스 */
// 1) 필요한 컴포넌트를 임포트해야함 
// 리스트를 보면 material-ui 컴포넌트들이 포함된 것을 볼수 있음
// 참고로 새로운 컴포넌트를 만들어야해서 .js 파일을 만들면 내용이 비어있는데 
// rfc (함수형 컴포넌트) , rcc(클래스형 컴포넌트) 를 타이핑하고 ctrl+space 누르면 자동완성이 가능함

import React from 'react'; //이건 무조건 있어야함
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import 'fontsource-roboto';
import Header from './Header'; //추가할 컴포넌트를 import 해야함 (jsp 에서의 include 랑 동일)
import Footer from './Footer'; //추가할 컴포넌트를 import 해야함 (jsp 에서의 include 랑 동일)
import AppMenu from './AppMenu';
import background from '../images/background_nature.jpg'; // 배경 주소

const useStyles = makeStyles((theme) => ({ // useStyles 변수에 css 스타일 선언

  background:{
    backgroundColor : 'white',
    padding: theme.spacing(2, 2, 4),
  }
}));

export default function Main() { //Main 컴포넌트를 외부로 내보내는 것을 허용하겠다는 의미 (expoert default )

  const classes = useStyles(); // 이렇게 선언하면 classes.객체로 클래스 접근가능 

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Header title="" sections={sections} /> */}
      {/* Header 컴포넌트 임포트 */}
      <Header /> 
      <AppMenu/>
      <Footer/>
    </React.Fragment>
  );
}