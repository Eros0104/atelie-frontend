import React from "react";
import { Footer, Container, Column, Row, H1, P } from "@components";
import { GrayBgImage } from "@assets";

const CustomFooter = () => (
  <Footer backgroundImage={GrayBgImage}>
    <Container maxWidth="1100px">
      <Row>
        <Column flex={4}>
          <H1>
            Só quem vende curte as<br />
            experiências mais diferentonas!
          </H1>
          <P>
          *Campanha válida de 01/02 a 31/03/2020. Vendas via Business Center e para o Setor Público não serão válidas. A apuração do mêsde agosto será retroativa. Imagens meramente ilustrativas. Realizamos todos os esforços para garantir a precisão das informações, mas não somos responsáveis por qualquer conteúdo editorial, fotográfico ou por erros tipográficos. Todas as imagens são apenas para fins ilustrativos. Para especificações completas de produto, informações de serviços e garantias, visite www.umbrindenaeuropa.com/saiba. Não fazemos nenhuma representação ou garantia em relação a produtos ou serviços de terceiros. Outros nomes de empresas, produtose serviços podem ser marcas registradas ou marcas de serviços de terceiros. © 2020. Todos os direitos reservados.
          </P>
        </Column>
        <Column flex={1}>
          
        </Column>
      </Row>
    </Container>
    <Footer.Bottom>
      teste
    </Footer.Bottom>
  </Footer>
);
export default CustomFooter;
