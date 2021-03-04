import React from "react";
import { Header, Grid, GridItem, Container, Image, Button } from "@components";
import { headerBgImage, cloudsImage, logoCampanhaTaglineImage } from "@assets";

const CustomHeader = ({ onSignInClick, onSignUpClick }) => (
  <Header backgroundImage={headerBgImage}>
    <Container maxWidth={"1430px"}>
      <Grid
        direction="row"
        justify="center"
        alignItems="center"
      >
        <GridItem xs={12} md={3}>
          <Grid
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <GridItem xs={12} center>
              <Image image={logoCampanhaTaglineImage} maxWidth={"350px"} />
            </GridItem>
            <GridItem xs={12} sm={6} md={12} lg={6}>
              <Button onClick={onSignInClick} w100>Login</Button>
            </GridItem>
            <GridItem xs={12} sm={6} md={12} lg={6}>
              <Button onClick={onSignUpClick} w100>Cadastre-se</Button>
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
