import './App.css';
import { Button, Input, Section, Row, Column } from './components'
import background from './assets/images/background-marrom.png';

function App() {
  return (
    <div className="App">
      <Section backgroundImage={background}>
        <Row>
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

      </Section>
    </div>
  );
}

export default App;
