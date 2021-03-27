/* 미 사용 소스 !!!!!!!!!!!!!!!!! */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ // useStyles 변수에 css 스타일 선언

  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  text :{ 
    //fontFamily: 'cursive',
    fontWeight: 'bold',
    textAlign: 'center',
  }

}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Guide() {
  const classes = useStyles(); // 이렇게 선언하면 classes.객체로 클래스 접근가능 

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.card, classes.text}>
      <Button className={classes.text} variant="outlined" color="secondary" onClick={handleClickOpen}>
        농협인의 밥상 가이드
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
