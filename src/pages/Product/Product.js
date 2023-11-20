import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  FormContainer,
  FormHeader,
  FormLabel,
  FormInput,
  FormButton,
  Container
} from '../../components/StyledForm/StyledForm';

const ProductList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await axios.get('http://localhost:4000/viewProducts');
        setProduct(list.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, [product]);

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {product.map((product) => (
          <li key={product.id}>Código: {product.id} | {product.nome} | R${product.valor}</li>
        ))}
      </ul>
    </div>
  );
};

const CreateProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleCreateProduct = async () => {
    try {
      const response = await axios.post('http://localhost:4000/createProduct', {
        nome: name,
        valor: price
      });
      console.log('Product created:', response.data);
    } catch (error) {
      console.error('Error creating Product:', error);
    }
  };

  return (
    <FormContainer>
      <FormHeader>Cadastrar Produto</FormHeader>
      <FormLabel>
        Nome:
        <FormInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormLabel>
      <FormLabel>
        Valor:
        <FormInput
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </FormLabel>
      <FormButton onClick={handleCreateProduct}>Cadastrar</FormButton>
    </FormContainer>
  );
};

const Product = () => {
  return (
    <Container>
      <ProductList />
      <CreateProductForm />
    </Container>
  );
};

export default Product;