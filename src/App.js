import './App.css';
import React, { useState, useRef } from 'react';
import { Section } from '@components';
import { Header, Footer, SignUpForm, SignInForm } from '@custom-components';
import background from './assets/images/background-marrom.png';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@assets';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary
    }
  }
});

function App() {
  const [screen, setScreen] = useState(SignUpForm);
  const onSignInClick = () => {
    setScreen(<SignInForm />);
    document.getElementById('cadastro').scrollIntoView({
      behavior: 'smooth'
    });
  }
  const onSignUpClick = () => {
    setScreen(<SignUpForm />);
    document.getElementById('cadastro').scrollIntoView({
      behavior: 'smooth'
    });
  }
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Header onSignUpClick={onSignUpClick} onSignInClick={onSignInClick} />
        <Section id="cadastro" backgroundImage={background}>
          {screen}
        </Section>
        <Footer />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
