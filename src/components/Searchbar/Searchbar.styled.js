import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  margin: 0 auto;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: transparent;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  min-height: 40px;
  display: block;
  background-color: transparent;
  border: none;
  border-bottom: 0.5px solid darkgray;
  width: 100%;
  outline: none;
  padding-left: 4px;
  font-size: 18px;
  &::placeholder {
    font-size: 18px;

    color: #f65261;
  }
`;
