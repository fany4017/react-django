/* 사용 소스 */
import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ButtonBase from '@material-ui/core/ButtonBase';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Test2 from './Test2';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: 'theme.spacing(6)',
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  media: {
    margin: "-70px auto 0",
    width: "100%",
    height: 140,
    borderRadius: "4px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
    position: "relative",
    zIndex: 1000
  },
  grid:{
    padding:'0px',
  },
  text :{ 
    //Nanum Pen Script
    fontFamily: 'NanumGothic-Bold',
    fontWeight: 'Bold',
    color: 'black',
    fontSize:'12px',
  },
  textOperation :{ 
    //Nanum Pen Script
    fontFamily: 'NanumGothic-Bold',
    fontWeight: 'Bold',
    color: '#ef5350',
    fontSize:'12px',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '120%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  appBar: {
    backgroundColor:'#00c853',
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  text: {
    fontFamily: 'NanumGothic-Bold',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ResturantsList = props => {
  
  const classes = useStyles(); // css 클래스
  const site = props.site; // select 박스에서 선택된 지점 코드
  const[posts, setPosts] = useState('');
  const[loading, setLoading] = useState(false);
  const[resturant, setResturant] = useState('');

  useEffect( () => {
    fetchInitialData(); // useEffect 안에서 바로 fetch를 사용하지 말고, fetch 역할의 함수를 실행할것!
  },[site] )

  const detailOnClick = e => {
    
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (resturant_code) => {
    setResturant(resturant_code);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const fetchInitialData = async () => {
    
    setLoading(true);

    try{
  
      /* 로컬 서버 호출 */
      const res = await fetch('http://127.0.0.1:8000/api/resturant');

       /* 운영 서버 호출 */
     //const res = await fetch('https://nonghyup-babsang.com/api/resturant');

      const posts = await res.json();
      
      function isSite(element)  {
        
        if(element.site_code == site)  {
          return true;
        }
      }
      
      const data = posts.filter(isSite);
      setPosts(data);
      
    }catch(e){
      console.log(e);
    }
    setLoading(false);
  };

  if(loading){
    return <React.Fragment> 대기 중...</React.Fragment>;
  }
  if(!posts){
    return null;
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
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
          <Test2 resturant={resturant}/>
        </List>
      </Dialog>
        <Container className={classes.cardGrid, classes.text} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4} >
          {posts.map((post) => (
              <Grid item key={post.id} xs={12} sm={6} md={4} className={classes.grid, classes.text}>
                <Card className={classes.card}>
                  <ButtonBase
                      focusRipple
                      key={post.resturant_image}
                      className={classes.image}
                      focusVisibleClassName={classes.focusVisible}
                      style={{
                        height: "220px", paddingTop: "20%"
                      }}
                    >
                      <span
                        className={classes.imageSrc}
                        style={{
                          backgroundImage: `url(${post.resturant_image})`,
                        }}
                      />
                      <span className={classes.imageBackdrop} />
                      <span className={classes.imageButton}>
                        <Typography
                          component="span"
                          variant="subtitle1"
                          color="inherit"
                          className={classes.imageTitle}
                          onClick={ () => {handleClickOpen(post.resturant_code);}}
                        >
                          상세보기
                          <span className={classes.imageMarked} />
                        </Typography>
                      </span>
                    </ButtonBase>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h8" component="h2">
                      {post.resturant_name}
                    </Typography>
                    
                    <Typography className={classes.text}>
                      <li>대표메뉴 : {post.title_menu}</li><li>전화번호 : {post.resturant_tel}</li>
                    </Typography>
                    <Typography className={classes.text}>
                      <li>좌석형태 : {post.seat_type}</li><li>룸 여부 : {post.room_is}</li>
                    </Typography>
                    <Typography className={classes.text}>
                      <li><span className={classes.textOperation}>영업시간 : {post.operating_time}</span></li>
                    </Typography>
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default ResturantsList;