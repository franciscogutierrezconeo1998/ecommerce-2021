import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import imageLogoMain from '../assets/img/ventas-logo.png';
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem"
  },
  appBar: {
    backgroundColor: "whitesmoke",
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  image: {
    marginRight: "10px",
    maxWidth: "130px",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={imageLogoMain} className={classes.image}/>
          </IconButton>
          <div className={classes.grow}/>
          <Typography variant="h6" color="textPrimary" component="p">
            Bienvenido
          </Typography>
          <div className={classes.button}>
            <Button variant="outlined">
              <strong>Login</strong>
            </Button>
            <IconButton aria-label="Items agregados al carrito" color="inherit">
              <Badge badgeContent={2} color="secondary" >
                <ShoppingCart fontSize="large" color="primary" />
              </Badge>
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
