import styled from 'styled-components';

export const Button = styled.button`
  margin-left: 15px;
  background-color: #0a0131ab;
  color: white;
  border-radius: 4px;
  border-color: #0a0131ab;
  cursor: pointer;

  :hover {
    background-color: white;
    color: #0a0131ab;
    border-color: #0a0131ab;
  }
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 0 auto;
  border-bottom: 1px solid #ccc;
  width: 320px;
`;
