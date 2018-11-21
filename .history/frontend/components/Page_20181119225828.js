import React from 'react';
class Page extends React.Component {
  render() {
    return (
      <div>
        <p>I am Page</p>
        {this.props}
      </div>
    );
  }
}

export default Page;
