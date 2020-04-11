import { connect } from 'react-redux';
import { signUp } from './store/actions';
import SignUpScreen from './Container';


const mapStateToProps = ({ signUpScreen }) => ({
    user: signUpScreen.user,
    error: signUpScreen.error,
    loading: signUpScreen.loading,
});

const mapDispatchToProps = {
    signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
