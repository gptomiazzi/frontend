import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  FormContainer,
  FormHeader,
  FormLabel,
  FormInput,
  FormButton,
  Container,
  DeleteButton
} from '../../components/StyledForm/StyledForm';

const OrderList = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await axios.get('http://localhost:4000/viewOrders');
        setOrder(list.data);
      } catch (error) {
        console.error('Error fetching order data:', error);
      }
    };

    fetchData();
  }, [order]);

  const handleOrderClose = async (orderID) => {
    const divisaoPessoasString = window.prompt("Em quantas pessoas será dividido a conta? (Máx: 4)");
    const divisaoPessoas = parseInt(divisaoPessoasString);
  
    try {
      console.log(orderID, divisaoPessoas);
      const response = await axios.post('http://localhost:4000/closeOrder', {
        orderId: orderID,
        divisaoPessoas: divisaoPessoas
      })
      window.alert(response.data.message);
      console.log('Order closed', response);
    } catch (error) {
      console.error('Error closing order:', error)
    }
  };

  return (
    <div>
      <h2>Lista de Pedidos</h2>
      <ul>
        {order.map((order) => (
          <>
            <li key={order.numero_pedido}> N° do Pedido: {order.numero_pedido} | {order.itens} | Valor Total: R${order.valor_total} | Status: {order.status}
              <DeleteButton style={{ marginLeft: "10px", marginTop: "10px" }} onClick={() => handleOrderClose(order.numero_pedido)}>
                Fechar Pedido
              </DeleteButton>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

const CreateOrderForm = () => {
  const [items, setItems] = useState('');
  const [valorTotal, setValorTotal] = useState('');
  const [idCliente, setIdCliente] = useState('');
  const [dataPedido, setDataPedido] = useState('');

  const handleCreateOrder = async () => {
    try {
      const response = await axios.post('http://localhost:4000/createOrder', {
        itens: items,
        valor_total: valorTotal,
        id_cliente: idCliente,
        data_pedido: dataPedido
      });
      console.log('Order created:', response.data);
    } catch (error) {
      console.error('Error creating Order:', error);
    }
  };

  return (
    <FormContainer>
      <FormHeader>Cadastrar Pedido</FormHeader>
      <FormLabel>
        Itens:
        <FormInput
          type="text"
          value={items}
          onChange={(e) => setItems(e.target.value)}
        />
      </FormLabel>
      <FormLabel>
        Valor Total:
        <FormInput
          type="text"
          value={valorTotal}
          onChange={(e) => setValorTotal(e.target.value)}
        />
      </FormLabel>
      <FormLabel>
        ID Cliente:
        <FormInput
          type="text"
          value={idCliente}
          onChange={(e) => setIdCliente(e.target.value)}
        />
      </FormLabel>
      <FormLabel>
        Data do Pedido:
        <FormInput
          type="text"
          value={dataPedido}
          onChange={(e) => setDataPedido(e.target.value)}
        />
      </FormLabel>
      <FormButton onClick={handleCreateOrder}>Cadastrar</FormButton>
    </FormContainer>
  );
};

const AddItemForm = () => {
  const [orderId, setOrderId] = useState('');
  const [productId, setProductId] = useState('');

  const handleAddItem = async () => {
    try {
      console.log(orderId, productId)
      const response = await axios.post('http://localhost:4000/addItem', {
        productId: productId,
        orderId: orderId
      })
      console.log('Item added:', response.data);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  }

  return (
    <FormContainer>
      <FormHeader>Adcionar item ao pedido</FormHeader>
      <FormLabel>
        N° do pedido:
        <FormInput 
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
      </FormLabel>
      <FormLabel>
        ID do Produto:
        <FormInput 
          type="text"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
      </FormLabel>
      <FormButton onClick={handleAddItem}>Adicionar</FormButton>
    </FormContainer>
  );
};

const Order = () => {
  return (
    <Container>
      <OrderList />
      <CreateOrderForm />
      <AddItemForm />
    </Container>
  );
};

export default Order;