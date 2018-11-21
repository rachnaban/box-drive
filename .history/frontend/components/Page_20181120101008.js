import React from 'react';
import Header from './Header';
import Meta from './Meta';
import styled from 'styled-components';

const StyledPage = styled.div``;
class Page extends React.Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Page;
