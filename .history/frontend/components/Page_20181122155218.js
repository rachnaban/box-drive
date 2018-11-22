import React from 'react';
import Header from './Header';
import Meta from './Meta';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';

const theme = {
  royalBlue: '#0300FF',
  lightBlue: '#3633FE',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0,0,0,0.9)',
};

const GlobalStyle = createGlobalStyle` 
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: Helvetica, Roboto, Calibri, sans-serif;
    height:100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    height:100%;
    
  }
  a {
    text-decoration: none;
    color: white;
  }
  
`;
const StyledPage = styled.div`
  background-color: ${props => props.theme.royalBlue};
  color: white;
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth}
  margin: 0 auto;
  padding: 2rem;
`;
class Page extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle theme={theme} />
        <ThemeProvider theme={theme}>
          <StyledPage>
            <Meta />
            <Header />
            <Inner>{this.props.children}</Inner>
          </StyledPage>
        </ThemeProvider>
      </>
    );
  }
}

export default Page;
