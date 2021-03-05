import React, { useState } from 'react';
import { Section, Container } from '@components';
import { Header, Footer, SignUpForm, SignInForm } from '@custom-components';
import background from './assets/images/background-marrom.png';
import { MuiThemeProvider, createMuiTheme, StylesProvider } from '@material-ui/core/styles';
import { materialUiTheme } from '@assets';
import { scrollTo } from '@utils'

const theme = createMuiTheme(materialUiTheme);

function App() {
  const [toggleScreen, setToggleScreen] = useState(false);
  const onSignInClick = () => {
    setToggleScreen(true);
    scrollTo('cadastro');
  }
  const onSignUpClick = () => {
    setToggleScreen(false);
    scrollTo('cadastro');
  }
  return (
    <StylesProvider injectFirst>
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Header onSignUpClick={onSignUpClick} onSignInClick={onSignInClick} />
          <Section id="cadastro" backgroundImage={background}>
            <Container>
              {
                toggleScreen ? (
                  <SignInForm />
                ) : (
                   <SignUpForm />
                )
              }
            </Container>
          </Section>
          <Footer />
        </MuiThemeProvider>
      </div>
    </StylesProvider>
  );
}

export default App;
