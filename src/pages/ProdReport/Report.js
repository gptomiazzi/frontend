import React, { useState } from 'react';
import axios from 'axios';
import { FormContainer, FormInput, FormLabel, FormButton, Container } from '../../components/StyledForm/StyledForm';

const ProductionReportList = () => {
  const [date, setDate] = useState('');
  const [productionReport, setProductionReport] = useState([]);

  const handleGetProductionReport = async () => {
    try {
      const response = await axios.post('http://localhost:4000/productionReport', { date: date });
      setProductionReport(response.data);
    } catch (error) {
      console.error('Error fetching production report:', error);
    }
  };

  return (
    <Container>
      <h2>Relatório de Produção</h2>
      <ul>
          {productionReport.map((report) => (
            <li key={report.numero_pedido}>
              N° do Pedido: {report.numero_pedido} | Itens: {report.itens} | Valor Total: R${report.valor_total} | Status: {report.status}
            </li>
          ))}
        </ul>

      <FormContainer>
        <FormLabel>
          Data:
          <FormInput type="text" value={date} onChange={(e) => setDate(e.target.value)} />
        </FormLabel>
        <FormButton onClick={handleGetProductionReport}>Obter Relatório</FormButton>
        
      </FormContainer>
    </Container>
  );
};


export default ProductionReportList;
