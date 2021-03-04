import React from "react";
import { Header, Grid, GridItem, Container, Image, Button } from "@components";
import { headerBgImage, cloudsImage, logoCampanhaTaglineImage } from "@assets";

const CustomHeader = ({ onLoginClick, onRegisterClick }) => (
  <Header backgroundImage={headerBgImage}>
    <Container maxWidth={"1430px"}>
      <Grid>
        <GridItem md={3}>
          <Image image={logoCampanhaTaglineImage} />
          <Grid>
            <GridItem>
              <Button onClick={onLoginClick} w100>Login</Button>
            </GridItem>
            <GridItem>
              <Button w100 onClick={onRegisterClick}>Cadastre-se</Button>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem md={9}>
          <Image image={cloudsImage} />
        </GridItem>
      </Grid>
    </Container>
  </Header>
);

export default CustomHeader;
