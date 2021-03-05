import React from "react";
import { headerBgImage, cloudsImage, logoCampanhaTaglineImage } from "@assets";
import {
  Header,
  Grid,
  GridItem,
  Container,
  Image,
  Button,
  Hidden
} from "@components";

const CustomHeader = ({ onSignInClick, onSignUpClick }) => (
  <Header backgroundImage={headerBgImage}>
    <Container maxWidth={"1430px"}>
      <Grid
        direction="row"
        justify="center"
        alignItems="center"
      >
        <GridItem center xs={12} md={3}>
          <Grid
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <GridItem xs={12} center>
              <Image image={logoCampanhaTaglineImage} maxWidth={"350px"} />
            </GridItem>
            <GridItem xs={12} lg={6}>
              <Button onClick={onSignInClick} w100>Login</Button>
            </GridItem>
            <GridItem xs={12} lg={6}>
              <Button onClick={onSignUpClick} w100>Cadastre-se</Button>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem md={12} lg={9}>
          <Hidden mdDown>
            <Image image={cloudsImage} />
          </Hidden>
        </GridItem>
      </Grid>
    </Container>
  </Header>
);

export default CustomHeader;
