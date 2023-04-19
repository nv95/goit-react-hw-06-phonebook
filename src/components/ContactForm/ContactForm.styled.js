import styled from 'styled-components';

export const FormContainer = styled.div`
  margin: 30px auto;
  width: 300px;
  padding: 20px;
  display: block;
  border: 1px solid #477405;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
export const Button = styled.button`
  background-color: #0a0131ab;
  color: white;
  border-radius: 4px;
  border-color: #0a0131ab;

  :hover {
    background-color: white;
    color: #0a0131ab;
    border-color: #0a0131ab;
  }
`;
