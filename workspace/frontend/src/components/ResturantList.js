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

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: 'theme.spacing(6)',
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
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
    //boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
    position: "relative",
    zIndex: 1000
  },
  grid:{
    padding:'0px',
  },
  text :{ 
    fontFamily: 'NanumGothic-Bold',
    fontWeight: 'Bold',
    color: 'black',
    fontSize:'10px',
    //textAlign: 'center',
  },
}));

const ResturantsList = props => {
  
  const classes = useStyles(); // css 클래스
  const site = props.site; // select 박스에서 선택된 지점 코드
  const[posts, setPosts] = useState('');
  const[loading, setLoading] = useState(false);
  

  useEffect( () => {
    fetchInitialData(); // useEffect 안에서 바로 fetch를 사용하지 말고, fetch 역할의 함수를 실행할것!
  },[site] )

  const fetchInitialData = async () => {
    setLoading(true);
    try{

      
      /* 로컬 서버 호출 */
      //const res = await fetch('http://127.0.0.1:8000/api/resturant');

       /* 운영 서버 호출 */
      const res = await fetch('https://nonghyup-babsang.com/api/resturant');

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
        <Container className={classes.cardGrid, classes.text} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4} >
          {posts.map((post) => (
              <Grid item key={post.id} xs={12} sm={6} md={4} className={classes.grid, classes.text}>
                <Card className={classes.card}>
                <CardMedia style={{ height: "250px", paddingTop: "10%" }}
                    className={classes.media}
                    image={post.resturant_image}
                    title="Image title"
                  />
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
                      <li>영업시간 : {post.operating_time}</li>
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