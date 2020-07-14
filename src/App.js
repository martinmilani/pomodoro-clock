import React from 'react';
import Controls from './components/Controls';
import Header from './components/Header';
import Timer from './components/Timer';
import { Box, createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      breakValue: 5,
      sessionValue: 25,
      mode: "session",
      time: 25 * 60 * 1000,
      active: false,
      touched: false
    }
  }

  handleSetTimers = (type, newValue) => {
    this.setState({ [`${type}Value`]: newValue })
    if (type === 'session') {
      this.setState({ time: (this.state[`${type}Value`]) * 60 * 1000 })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.time === 0 && prevState.mode === 'session') {
      this.setState({ time: this.state.breakValue * 60 * 1000, mode: 'break' })
      this.audio.play()
    }
    if (prevState.time === 0 && prevState.mode === 'break') {
      this.setState({ time: this.state.sessionValue * 60 * 1000, mode: 'session' })
      this.audio.play()
    }
  }

  handleReset = () => {
    this.setState({
      breakValue: 5,
      sessionValue: 25,
      time: 25 * 60 * 1000,
      mode: 'session',
      touched: false,
      active: false
    })
    clearInterval(this.pomodoro)
    this.audio.pause()
    this.audio.currentTime = 0
  }



  handlePlayPause = () => {
    if (this.state.active) {
      this.setState({ active: false }, () => clearInterval(this.pomodoro))
    } else {
      if (!this.state.touched && this.state.breakValue === 5 && this.state.sessionValue === 25) {
        this.pomodoro = setInterval(() => this.setState({ time: this.state.time - 1000 }), 1000)
        this.setState({ active: true })
      } else {
        this.setState({
          time: this.state.sessionValue * 60 * 1000,
          touched: true,
          active: true
        }, () => this.pomodoro = setInterval(() => this.setState({ time: this.state.time - 1000 }), 1000))
      }
    }
  }

  formatTime = milSec => {
    return milSec === 3600000 ? "60:00" : new Date(milSec).toISOString().substr(14, 5);
  }


  render() {

    return (
      <Box maxWidth='xl' style={{ height: '100vh', backgroundColor: '#3f51b5' }}>
        <MuiThemeProvider theme={theme}>

          <Header
            breakValue={this.state.breakValue}
            sessionValue={this.state.sessionValue}
            handleSetTimers={this.handleSetTimers}
          />

          <Timer
            mode={this.state.mode}
            time={this.state.time}
            breakValue={this.state.breakValue}
            sessionValue={this.state.sessionValue}

          />
          <Controls
            active={this.state.active}
            handlePlayPause={this.handlePlayPause}
            handleReset={this.handleReset}
          />
          <audio
            id="beep"
            src='https://s3-us-west-1.amazonaws.com/benjaminadk/Data+synth+beep+high+and+sweet.mp3'
            ref={el => this.audio = el}
          >
          </audio>

          {/* <Footer /> */}

        </MuiThemeProvider>
      </Box>
    )
  }
}

export default App;
