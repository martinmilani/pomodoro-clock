import React from 'react';
import moment from 'moment';
import { CircularProgress, Box, Typography } from '@material-ui/core';

const Timer = ({ mode, time, sessionValue, breakValue }) => (

  <Box mt={14} width="100%" justifyContent="center" position="relative" display="inline-flex">
    <Box width="70%" style={{ minWidth: 200, maxWidth: 450 }}>
      <CircularProgress style={{ color: 'white' }} thickness={1.5} size="100%" variant="static" value={mode === 'session' ? (time / 60000) * 100 / sessionValue : (time / 60000) * 100 / breakValue} />
    </Box>
    <Box
      top={0}
      left={0}
      bottom={0}
      right={0}
      position="absolute"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column" >
        <Typography style={{ fontWeight: "700", color: 'white' }} align="center" variant="h1" gutterBottom >{time === 3600000 ? '60:00' : moment(time).format('mm:ss')} </Typography>
        <Typography variant="h4" style={{ color: 'white' }}>{mode === "session" ? "Session" : "Break"}</Typography>
      </Box>
    </Box>
  </Box>
)
export default Timer
