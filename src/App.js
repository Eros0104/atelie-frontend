import './App.css';
import { Section } from '@components';
import { Header, Footer, SignUpForm } from '@custom-components';
import background from './assets/images/background-marrom.png';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { colors } from "@assets";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary
    }
  }
});

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Header />
        <Section backgroundImage={background}>
          <SignUpForm />
        </Section>
        <Footer/>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
