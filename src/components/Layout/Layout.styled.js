import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 40px;
  max-width: 85%;
  margin: 0 auto;
`;

export const Header = styled.header`
  padding: 40px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #24243e;
`;

export const Section = styled.section`
  padding: 40px 0;
  display: grid;
  gap: 30px;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 20px;
  position: relative;
  display: block;
  color: #24243e;
  font-size: ${props => props.$titlesize || '40px'};
  text-shadow:
    0 3px 4px rgba(15, 12, 41, 1),
    0px -2px 1px #fff;
  font-weight: bold;

  &::after {
    content: ${props => (props.$titleunderline === 'false' ? 'none' : '""')};
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: darkgray;
    border-radius: 4px;
  }
`;
