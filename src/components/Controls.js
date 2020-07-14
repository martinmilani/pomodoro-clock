import React from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import ReplayIcon from '@material-ui/icons/Replay';
import { IconButton, Box } from '@material-ui/core'

const Controls = ({ active, handleReset, handlePlayPause }) => (
  <Box m={3} display="flex" justifyContent="center">
    <IconButton
      aria-label="play/pause"
      onClick={handlePlayPause}
    >{active ? <PauseCircleOutlineIcon color="primary" style={{ fontSize: 60, color: 'white' }} /> : <PlayCircleOutlineIcon color="primary" style={{ fontSize: 60, color: 'white' }} />}
    </IconButton>
    <IconButton
      aria-label="reset"
      onClick={handleReset} >
      <ReplayIcon color="primary" style={{ fontSize: 60, color: 'white' }} />
    </IconButton>
  </Box>
)

export default Controls