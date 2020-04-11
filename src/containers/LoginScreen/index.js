import { connect } from 'react-redux';

import LoginScreen from './Container';
import { signIn } from './store/actions';

const mapStateToProps = ({ signInScreen }) => ({
    user: signInScreen.user,
    error: signInScreen.error,
    loading: signInScreen.loading,
});

const mapDispatchToProps = {
    signIn,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
