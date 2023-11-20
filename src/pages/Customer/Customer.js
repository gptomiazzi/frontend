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

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await axios.get('http://localhost:4000/viewCustomers');
        setCustomers(list.data);
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    };

    fetchData();
  }, [customers]);

  return (
    <div>
      <h2>Lista de Clientes</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>{customer.nome}</li>
        ))}
      </ul>
    </div>
  );
};

const CreateCustomerForm = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  const handleCreateCustomer = async () => {
    try {
      const response = await axios.post('http://localhost:4000/createCustomer', {
        nome: name,
        cpf: cpf,
        telefone: telefone,
        email: email
      });
      console.log('Customer created:', response.data);
    } catch (error) {
      console.error('Error creating customer:', error);
    }
  };

  return (
    <FormContainer>
      <FormHeader>Cadastrar Cliente</FormHeader>
      <FormLabel>
        Nome:
        <FormInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormLabel>
      <FormLabel>
        CPF:
        <FormInput
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
      </FormLabel>
      <FormLabel>
        Telefone:
        <FormInput
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </FormLabel>
      <FormLabel>
        Email:
        <FormInput
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormLabel>
      <FormButton onClick={handleCreateCustomer}>Cadastrar</FormButton>
    </FormContainer>
  );
};

const Customers = () => {
  return (
    <Container>
      <CustomerList />
      <CreateCustomerForm />
    </Container>
  );
};

export default Customers;