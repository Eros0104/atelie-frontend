import React from "react";
import { Footer, Container, H2, Small, Grid, GridItem, Image, Hyperlink } from "@components";
import { GrayBgImage, logoCampanhaImage } from "@assets";

const CustomFooter = () => (
  <Footer backgroundImage={GrayBgImage}>
    <Footer.Main>
      <Container maxWidth="1100px">
        <Grid>
          <GridItem xs={12} md={8}>
            <H2>
              Só quem vende curte as<br />
              experiências mais diferentonas!
          </H2>
            <Small>
              *Campanha válida de 01/02 a 31/03/2020.
              Vendas via Business Center e para o Setor Público não serão válidas.
              A apuração do mês de agosto será retroativa. Imagens meramente ilustrativas.
              Realizamos todos os esforços para garantir a precisão das informações,
              mas não somos responsáveis por qualquer conteúdo editorial, fotográfico ou por erros tipográficos.
              Todas as imagens são apenas para fins ilustrativos. Para especificações completas de produto,
              informações de serviços e garantias, visite www.umbrindenaeuropa.com/saiba.
              Não fazemos nenhuma representação ou garantia em relação a produtos ou serviços de terceiros.
              Outros nomes de empresas, produtose serviços podem ser marcas registradas ou marcas de serviços de terceiros.
              © 2020. Todos os direitos reservados.
          </Small>
          </GridItem>
          <GridItem xs={12} md={4} center>
            <Image maxWidth="300px" margin="20px 0 0" image={logoCampanhaImage} />
          </GridItem>
        </Grid>
      </Container>
    </Footer.Main>
    <Footer.Bottom>
      <Container maxWidth="1143px">
        <Grid justify="space-between" direction="row">
          <GridItem xs={12} md={5} center>
            <Small>
              Dúvidas? Envie um e-mail para <Hyperlink href="mailto: atendimento@umbrindenaeuropa.com.br">atendimento@umbrindenaeuropa.com.br</Hyperlink>
            </Small>
          </GridItem>
          <GridItem xs={12} md={5} center>
            <Small>
              Imagens meramente ilustrativas. Promoção válida de 01/02 a 31/03/2020.
            </Small>
          </GridItem>
        </Grid>
      </Container>
    </Footer.Bottom>
  </Footer>
);
export default CustomFooter;
