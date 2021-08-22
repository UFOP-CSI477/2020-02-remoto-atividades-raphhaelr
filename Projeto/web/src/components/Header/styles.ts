import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  width: 100%;

  padding: 1.25rem;
  height: 4.5rem;

  background: #404040;

  @media (max-width: 1100px) {
    position: absolute;
  }
  @media print {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;

  a {
    display: flex;
    align-items: center;
    color: #F0F0F5;
    font-size: 1rem;
    margin-right: 1rem;
    text-decoration: none;
    
    
    img {
      height: 1.25rem;
      width: 1.25rem;
      margin-right: 0.25rem;
    }
  }
`;

export const MainTitle = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #F0F0F5;
    font-size: 0.875rem;
    text-decoration: none;

    h1 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 1100px) {
    width: 4rem;
  }
`;

export const Exit = styled.div`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  svg {
    color: #fff;
  }

  span {
    font: 'Poppins', sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    color: #fff;
  }
`;
