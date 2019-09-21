import styled from 'styled-components';

export const Button = styled.button`
  background: white;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.15);
  outline: none;
  border-radius: 4px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  :hover {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
