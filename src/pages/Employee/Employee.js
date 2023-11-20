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

const EmployeeList = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await axios.get('http://localhost:4000/viewEmployees');
        setEmployee(list.data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchData();
  }, [employee]);

  return (
    <div>
      <h2>Lista de Funcionários</h2>
      <ul>
        {employee.map((employee) => (
          <li key={employee.id}>{employee.nome}</li>
        ))}
      </ul>
    </div>
  );
};

const CreateEmployeeForm = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [cargo, setCargo] = useState('');
  const [salario, setSalario] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const handleCreateEmployee = async () => {
    try {
      const response = await axios.post('http://localhost:4000/createEmployee', {
        nome: name,
        cpf: cpf,
        cargo: cargo,
        salario: salario,
        data_nascimento: dataNascimento
      });
      console.log('Employee created:', response.data);
    } catch (error) {
      console.error('Error creating employee:', error);
    }
  };

  return (
    <FormContainer>
      <FormHeader>Cadastrar Funcionários</FormHeader>
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
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
        />
      </FormLabel>
      <FormLabel>
        Salario:
        <FormInput
          type="text"
          value={salario}
          onChange={(e) => setSalario(e.target.value)}
        />
      </FormLabel>
      <FormLabel>
        Data de Nascimento:
        <FormInput
          type="text"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
        />
      </FormLabel>
      <FormButton onClick={handleCreateEmployee}>Cadastrar</FormButton>
    </FormContainer>
  );
};

const Employee = () => {
  return (
    <Container>
      <EmployeeList />
      <CreateEmployeeForm />
    </Container>
  );
};

export default Employee;