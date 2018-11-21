import React from 'react';
import Header from './Header';
import Meta from './Meta';
import styled from 'styled-components';

const StyledPage = styled.div`
  background-color: white;
  color: black;
`;

const Inner = styled.div``;
class Page extends React.Component {
  render() {
    return (
      <StyledPage>
        <Meta />
        <Header />
        {this.props.children}
      </StyledPage>
    );
  }
}

export default Page;
