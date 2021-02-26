import React, { useRef, useEffect } from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import Details from './components/Details/Details';
import Main from './components/Main/Main';
import useStyles from './styles';
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';
import { useSpeechContext, SpeechState } from '@speechly/react-client';
function App() {
  const classes = useStyles();
  const { speechState } = useSpeechContext();

  //For scrolling
  const main = useRef(null);
  const executeScroll = () => main.current.scrollIntoView()
  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  
  return (
    <div>
      <Grid container className={classes.grid} spacing={0} alignItems="center" justify="center" style={{ height: '100vh' }}>
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.main} ref={main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>
      </Grid>

      <PushToTalkButtonContainer on>
        <PushToTalkButton captureKey=" " />
        <ErrorPanel />
      </PushToTalkButtonContainer>


    </div>
  );
}

export default App;
