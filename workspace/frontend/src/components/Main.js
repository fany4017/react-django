// 1) 필요한 컴포넌트를 임포트해야함 
// 리스트를 보면 material-ui 컴포넌트들이 포함된 것을 볼수 있음
// 참고로 새로운 컴포넌트를 만들어야해서 .js 파일을 만들면 내용이 비어있는데 
// rfc (함수형 컴포넌트) , rcc(클래스형 컴포넌트) 를 타이핑하고 ctrl+space 누르면 자동완성이 가능함

import React from 'react'; //이건 무조건 있어야함
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import 'fontsource-roboto';
import { Link } from 'react-router-dom';
import Header from './Header'; //추가할 컴포넌트를 import 해야함 (jsp 에서의 include 랑 동일)
import Footer from './Footer'; //추가할 컴포넌트를 import 해야함 (jsp 에서의 include 랑 동일)

import background from '../images/background_nature.jpg'; // 배경 주소

const useStyles = makeStyles((theme) => ({ // useStyles 변수에 css 스타일 선언

  background:{
    backgroundColor : 'white',
    padding: theme.spacing(2, 2, 4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
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
  text :{ 
    fontFamily: 'cursive',
    fontWeight: 'bold',
    textAlign: 'center',
  }
}));

export default function Main() { //Main 컴포넌트를 외부로 내보내는 것을 허용하겠다는 의미 (expoert default )

  const classes = useStyles(); // 이렇게 선언하면 classes.객체로 클래스 접근가능 

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Header title="" sections={sections} /> */}
      {/* Header 컴포넌트 임포트 */}
      <Header title=""/> 
      <main>
        {/* <main> 밑으로 Container, Grid, Card, CareMedia, Typography 컴포넌트가 선언되어있는데 이건 materail-ui 에서 제공하는 컴포넌트임 */}
        {/* Link 는 페이지 이동시켜주는 컴포넌트임 */}
        <Container className={classes.cardGrid, classes.background} maxWidth="md" style={{ 
          backgroundImage: `url(${background})`
        }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    {/* 이 카드영역을 누르면 /detail/nhlife로 넘어가는데, App.js에 선언된 부분을 보면 
                    <Route path="/detail/:site" component={Detail} />
                    이렇게 되어있음, 즉 Detail.js 로 이동하는건데, /detail/사이트명을 파라미터로 넘겨주는것이다.
                    그러면 Detail.js에서 site 값을 받을 수 있음
                    이, site 값을 받아서 각 사이트에 맞는 구내식당 메뉴를 호출할것임. 
                    Datail.js 로 가보자 */}
                      <Link to="/detail/nhlife" >
                        <CardMedia
                            className={classes.cardMedia}
                            image="/images/NHLIFE.jpg"
                            title="Image title"
                        />
                      </Link>
                      <Typography gutterBottom variant="h8" component="h4" align="center">
                        서울특별시 서대문구 통일로 87
                      </Typography>
                      
                  </Card>
                </Grid>
                
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <Link to="/detail/nhitcenter" >
                        <CardMedia
                            className={classes.cardMedia}
                            image="/images/NHBANK.jpg"
                            title="Image title"
                        />
                      </Link>
                      <Typography gutterBottom variant="h8" component="h4" align="center">
                        서울특별시 중구 통일로 120(충정로1가)
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <Link to="/detail/nhit" >
                        <CardMedia
                            className={classes.cardMedia}
                            image="/images/NHIT.jpg"
                            title="Image title"
                        />
                      </Link>
                      <Typography gutterBottom variant="h8" component="h4" align="center">
                        서울특별시 서초구 양재2동 매헌로 24
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Footer/>
      {/* End footer */}
    </React.Fragment>
  );
}