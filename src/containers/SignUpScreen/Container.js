import React, { PureComponent } from 'react';
import SignUpScreenContent from './Content';

class SignUpScreenContainer extends PureComponent {
    redirectSignIn = () => {
        const { history } = this.props;
        
        history.push('/signin');
    }
    render() {
        return (<SignUpScreenContent redirectSignIn={this.redirectSignIn} />)
    }
}

export default SignUpScreenContainer;
