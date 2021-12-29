import React from 'react'
import styled from 'styled-components';
import Footer from './Footer'
import Header from './Header'

const Body = () => {
  return (
    <BodyC>
      <Header />
      <Footer />
    </BodyC>
  );
};

const BodyC = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export default Body
