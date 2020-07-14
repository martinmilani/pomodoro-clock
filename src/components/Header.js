import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, makeStyles, } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SetTimer from './SetTimer';


const Header = ({ sessionValue, breakValue, handleSetTimers }) => {

  /* Custom Styles */
  const useStyles = makeStyles({
    menuItem: {
      padding: '1.5em 3em',
      backgroundColor: "#FFF",
      "&:hover": {
        //you want this to be the same as the backgroundColor above
        backgroundColor: "#FFF",
        disableRipple: true,
      }
    }
  })

  const classes = useStyles();

  /* Menu*/

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <AppBar position="static">
      <Toolbar>
        <Typography align='center' variant="h5">
          Pomodoro Clock
        </Typography>

        <IconButton
          variant="contained"
          aria-owns={anchorEl ? "simple-menu" : null}
          aria-haspopup="true"
          onClick={handleClick}
          color='inherit'
          style={{ marginLeft: 'auto' }}
        >
          <MoreVertIcon />
        </IconButton>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            style: {
              marginTop: "4em",
              width: '400px',
            }
          }}
        >
          {<MenuItem className={classes.menuItem} disableRipple>
            <SetTimer
              type='session'
              label='Session Length'
              value={sessionValue}
              handleChange={handleSetTimers}
            />
          </MenuItem>}

          {<MenuItem className={classes.menuItem} disableRipple>
            <SetTimer
              type='break'
              label='Break Length'
              value={breakValue}
              handleChange={handleSetTimers}
            />

          </MenuItem>}
        </Menu>

      </Toolbar>
    </AppBar >
  )
}

export default Header;
