/* 미 사용 소스 !!!!!!!!!!!!!!!!! */
import React from 'react'; //이건 무조건 있어야함
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import 'fontsource-roboto';
import Test from './Test';
import Avatar from '@material-ui/core/Avatar';
import RoomIcon from '@material-ui/icons/Room';
const useStyles = makeStyles((theme) => ({ // useStyles 변수에 css 스타일 선언

    background:{
      backgroundColor : '#fce4ec',
      padding: theme.spacing(2, 2, 4),
    },
    paper: {
        marginTop: '-10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
        alignItems: 'center',
    },
    cardGrid: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(8),
      padding:'6px',
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '2px',
    },
    cardMedia: {
      paddingTop: '25.25%', // 16:9
    },
    text :{ 
        fontFamily: 'Nanum Pen Script',
        fontWeight: 'Bold',
        color: 'black',
        fontSize:'25px',
        textAlign: 'center',
    },
    textDetail :{ 
        fontFamily: 'NanumGothic-Bold',
        fontWeight: 'Bold',
        color: 'black',
        fontSize:'16px',
        textAlign: 'center',
    },
}));

export default function MainChoice() {

    const classes = useStyles(); // 이렇게 선언하면 classes.객체로 클래스 접근가능 
    return (
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <RoomIcon />
            </Avatar>
            <Typography className={classes.text}>제휴 법인</Typography>
            <main>
                {/* <main> 밑으로 Container, Grid, Card, CareMedia, Typography 컴포넌트가 선언되어있는데 이건 materail-ui 에서 제공하는 컴포넌트임 */}
                {/* Link 는 페이지 이동시켜주는 컴포넌트임 */}
                <Container className={classes.cardGrid} maxWidth="md" style={{ 
                // backgroundImage: `url(${background})`
                padding:'8px'
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
                            {/* <Link to="/detail/nhlife" > */}
                                <Test
                                    
                                />
                            {/* </Link> */}
                            <Typography className={classes.textDetail} >
                                서울특별시 서대문구 통일로 87
                            </Typography>
                            
                        </Card>
                        </Grid>
                        
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                            {/* <Link to="/detail/nhitcenter" > */}
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="/images/NHBANK.jpg"
                                    title="Image title"
                                />
                            {/* </Link> */}
                            <Typography className={classes.textDetail} >
                                서울특별시 중구 통일로 120(충정로1가)
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                            {/* <Link to="/detail/nhit" > */}
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="/images/NHIT.jpg"
                                    title="Image title"
                                />
                            {/* </Link> */}
                            <Typography className={classes.textDetail} >
                                서울특별시 서초구 양재2동 매헌로 24
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    )
}
