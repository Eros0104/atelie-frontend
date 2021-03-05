import React, { useState } from 'react';
import { Section, Modal } from '@components';
import { Header, Footer, SignUpForm, SignInForm } from '@custom-components';
import background from './assets/images/background-marrom.png';
import { MuiThemeProvider, createMuiTheme, StylesProvider } from '@material-ui/core/styles';
import { materialUiTheme } from '@assets';

const theme = createMuiTheme(materialUiTheme);

function App() {
  const [toggleScreen, setToggleScreen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const onSignInClick = () => {
    setToggleScreen(true);
    document.getElementById('cadastro').scrollIntoView({
      behavior: 'smooth'
    });
  }
  const onSignUpClick = () => {
    setToggleScreen(false);
    document.getElementById('cadastro').scrollIntoView({
      behavior: 'smooth'
    });
  }
  return (
    <StylesProvider injectFirst>      
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Modal />   
          <Header onSignUpClick={onSignUpClick} onSignInClick={onSignInClick} />
          <Section id="cadastro" backgroundImage={background}>
            {
              toggleScreen ? (
                <SignInForm />
              ) : (
                <SignUpForm />
              )
            }
          </Section>
          <Footer />
        </MuiThemeProvider>
      </div>
    </StylesProvider>
  );
}

export default App;
