import React from "react";
import { Header, Column, Row, Container, Image, Button } from "@components";
import { headerBgImage, cloudsImage, logoCampanhaTaglineImage } from "@assets";

const CustomHeader = ({ onLoginClick, onRegisterClick }) => (
  <Header backgroundImage={headerBgImage}>
    <Container maxWidth={"1430px"}>
      <Row>
        <Column flex={1} alignCenter>
          <Row>
            <Image image={logoCampanhaTaglineImage} />
          </Row>
          <Row>
            <Column>
              <Button onClick={onLoginClick} w100>Login</Button>
            </Column>
            <Column>
              <Button w100 onClick={onRegisterClick}>Cadastre-se</Button>
            </Column>
          </Row>
        </Column>
        <Column flex={3}>
          <Image image={cloudsImage} />
        </Column>
      </Row>
    </Container>
  </Header>
);

export default CustomHeader;
