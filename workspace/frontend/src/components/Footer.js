import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from './Copyright';

const useStyles = makeStyles((theme) => ({
    background:{
      backgroundColor : 'white',
      padding: theme.spacing(2, 2, 4),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
      },
  }));

export default function Footer() {
    const classes = useStyles();
    return (
        <div>
            <footer className={classes.footer, classes.background}>
                <Typography variant="h6" align="center" gutterBottom>
                Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </footer>
        </div>
    )
}
