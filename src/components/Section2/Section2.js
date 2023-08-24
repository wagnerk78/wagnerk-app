import React, { useState, useEffect } from "react";
import api from "./api";
import Carousel from 'react-elastic-carousel'
import { Container, Options, ContainerItens, Image, Text, Title, Price} from './styles'
import formatCurrency from '../utils/formatCurrency'

const Section2 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function LoadProducts() {
      try {
        const response = await api.get(
          "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
        );

        if (response.data && response.data.success) {
          setProducts(response.data.products);
        } else {
          console.error("API response format is incorrect.");
        }
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    }

    LoadProducts();
  }, []);

  return (
    <Container>
      <Title>Produtos Relacionados</Title>
      <Options>
        <div>CELULAR</div>
        <div>ACESSÓRIOS</div>
        <div>TABLETS</div>
        <div>NOTEBOOKS</div>
        <div>TVS</div>
        <div>VER TODOS</div>
      </Options>
      <Carousel
        itemsToShow={4}
        showArrows={true}
        disableArrowsOnEnd={false}
        >
        {products.map(((product, index) => (
          <ContainerItens key={index}>
            <Image src={product.photo} alt="foto do produto" />
            <Text>{product.productName}</Text>
            <Price>{formatCurrency(product.price)}</Price>
            <button>Comprar</button>
          </ContainerItens>
        )))}
      </Carousel>
    </Container>
  )



        }
export default Section2












