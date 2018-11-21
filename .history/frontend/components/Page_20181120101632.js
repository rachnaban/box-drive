import React from 'react';
import Header from './Header';
import Meta from './Meta';
import styled from 'styled-components';

const theme = {
  red: 'FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
};

const StyledPage = styled.div`
  background-color: white;
  color: black;
`;

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;
class Page extends React.Component {
  render() {
    return (
      <StyledPage>
        <Meta />
        <Header />
        <Inner>{this.props.children}</Inner>
      </StyledPage>
    );
  }
}

export default Page;
