import React from 'react';
class Page extends React.Component {
  render() {
    return (
      <div>
        <p>I am Page</p>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
