import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Container from './Container';

import { getUser, logout } from './store/actions';

const mapStateToProps = ({ global }) => ({
    userInfo: global.userInfo,
    error: global.error,
})

const mapDispatchToProps = { getUser, logout };

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withRouter)(Container);
