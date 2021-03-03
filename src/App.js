import './App.css';
import { Button, Input, Section, Row, Column, Container } from '@components';
import { Header } from '@custom-components';
import background from './assets/images/background-marrom.png';

function App() {
  return (
    <div className="App">
      <Header />
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
