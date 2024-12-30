import React from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  padding: 20px;
`;

const Home = () => {
  return (
    <Container>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
    </Container>
  );
};

export default Home;
