import React from 'react';
import { Typography, Grid, Slider, Box } from '@material-ui/core';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


const setTimer = ({ type, value, handleChange }) => {

  return (
    <Box width="100%" justifyItems="center">
      <Typography variant="h5" align="center">{type === 'session' ? 'Session ' : 'Break '}Length</Typography>
      <Typography variant="h4" color="primary" align="center"> {value} </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <RemoveCircleOutlineIcon color="disabled" />
        </Grid>
        <Grid item xs>
          <Slider max={type === 'session' ? 60 : 30} min={1} value={value} onChange={(event, value) => handleChange(type, value)} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          <AddCircleOutlineIcon color="disabled" />
        </Grid>
      </Grid>
    </Box>
  )

}

export default setTimer;