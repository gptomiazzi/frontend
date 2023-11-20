import styled from "styled-components";

export const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionHeader = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin: 5px 0;
`;

export const FormContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormHeader = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  width: 100%;
  display: block;
  padding: 8px;
  margin-top: 5px;
`;

export const FormButton = styled.button`
  padding: 8px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
background-color: #ff5757;
color: white;
padding: 5px 10px;
border: none;
cursor: pointer;
`;