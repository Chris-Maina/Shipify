import React, { PureComponent } from 'react';

import Content from './Content';

import LocalStorage from '../../utils/localStorage';

class PageContainer extends PureComponent {
  componentDidMount() {
    const { history, getUser } = this.props;

    const token = LocalStorage.getUserToken();

    if (!token) {
      history.push('/signin')
    } else {
      getUser();
    }
  }

  componentDidUpdate(prevProps) {
    const { userInfo, error, history } = this.props;
    const { userInfo: prevUserInfo } = prevProps;

    if (prevUserInfo !== userInfo && !error && !userInfo) {
      history.push('/signin')
    }
  }

  render() {
    return (
      <Content {...this.props} />
    )

  }
};

export default PageContainer;
