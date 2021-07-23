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
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import { auth } from '../firebase';

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
  const [{basket, user}, dispatch] = useStateValue();
  const history = useHistory();

  const SignOut = () => {
    if(user){
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: []
      });
      dispatch({
        type: actionTypes.SET_USER,
        user: null
      });
      history.push('/');
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} >
        <Toolbar>
          <Link to="/">
            <IconButton edge="start"  
                        className={classes.menuButton} 
                        color="inherit" 
                        aria-label="menu">
              <img src={imageLogoMain} 
                  className={classes.image}/>
            </IconButton>
          </Link>
          <div className={classes.grow}/>
          <Typography variant="h6" color="textPrimary" component="p">
            Bienvenido {user ? user.email  : ""}
          </Typography>
          <div className={classes.button}>
            <Link to='signin'>
              <Button variant="outlined" onClick={SignOut}>
                <strong>{user ? "Logout" : "Login"}</strong>
              </Button>
            </Link>
            <Link to="checkout">
              <IconButton aria-label="Items agregados al carrito" color="inherit">
                <Badge badgeContent={basket?.length} color="secondary" >
                  <ShoppingCart fontSize="large" color="primary" />
                </Badge>
              </IconButton>
            </Link>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
