import React, { PureComponent } from 'react';
import LoginScreenContent from './Content';

class LoginScreenContainer extends PureComponent {
    redirectToSignUp = () => {
        const { history } = this.props;

        history.push('/signup');
    }
    render() {
        return (<LoginScreenContent redirectToSignUp={this.redirectToSignUp} />);
    }
} 

export default LoginScreenContainer;
