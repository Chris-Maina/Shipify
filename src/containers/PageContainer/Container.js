import React, { Component } from 'react';

import Content from './Content';

class PageContainer extends Component {
  render() {
    return (
      <Content {...this.props} />
    );
  }
}

export default PageContainer;
