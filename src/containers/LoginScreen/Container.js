import React, { PureComponent } from 'react';
import LoginScreenContent from './Content';

class LoginScreenContainer extends PureComponent {
    state = {
        error: {},
        email: '',
        password: '',
    }

    componentDidUpdate(prevProps) {
        const { user, error, history } = this.props;
        const { user: prevUser } = prevProps;

        if (JSON.stringify(prevUser) !== JSON.stringify(user) && !error) {
            // successfull login redirect
            history.push('/shipments');
        }
    }

    redirectToSignUp = () => {
        const { history } = this.props;

        history.push('/signup');
    }

    validateForm = () => {
        const { email } = this.state;
        let errors = {};

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            errors.email = 'Please provide valid email';
        }
        return errors;
    }

    handleChange = evt => {
        const { name, value } = evt.target;

        this.setState(prevState => ({
            [name]: value,
            error: {
                ...prevState.error,
                [name]: null
            }
        }))
    }


    handleSubmit = evt => {
        evt.preventDefault();
        const { signIn } = this.props;
        const { email, password } = this.state;

        const error = this.validateForm();
        if (Object.keys(error).length) {
            this.setState({ error });
        } else {
            signIn({ email, password });
        }
    }
    render() {
        const { error, email, password } = this.state;
        return (
            <LoginScreenContent
                email={email}
                error={error}
                password={password}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                redirectToSignUp={this.redirectToSignUp}
            />
        );
    }
} 

export default LoginScreenContainer;
