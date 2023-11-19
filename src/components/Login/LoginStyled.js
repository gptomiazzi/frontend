import styled from 'styled-components';

export const LoginFormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginTitle = styled.h2`
  text-align: center;
  color: #333;
`;

export const LoginInput = styled.input`
  width: 50%;
  padding: 10px;
  margin-bottom: 10px;
`;

export const LoginButton = styled.button`
  width: 40%;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
