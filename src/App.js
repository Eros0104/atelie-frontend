import './App.css';
import { Button, Input, Section, Row, Column, Header, Image, Container } from './components'
import background from './assets/images/background-marrom.png';
import headerBg from './assets/images/background.png'
import clouds from './assets/images/clouds.png'

function App() {
  return (
    <div className="App">
      <Header backgroundImage={headerBg}>
        <Button>Enviar</Button>
        <Image image={clouds} />
      </Header>
      <Section backgroundImage={background}>
        <Container>
          <Row>
            <Column>
              <Input placeholder="Nome" />
            </Column>
          </Row>
          <Row>
            <Column>
              <Input placeholder="000.000.000-00" />
            </Column>
            <Column>
              <Input />
            </Column>
          </Row>
          <Row>
            <Column>
              <Input />
            </Column>
            <Column>
              <Input />
            </Column>
          </Row>
          <Button>Enviar</Button>
        </Container>
      </Section>
    </div>
  );
}

export default App;
