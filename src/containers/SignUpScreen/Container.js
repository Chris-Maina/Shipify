import React, { PureComponent } from 'react';
import SignUpScreenContent from './Content';

class SignUpScreenContainer extends PureComponent {
    state = {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        error: {},
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

    redirectSignIn = () => {
        const { history } = this.props;

        history.push('/signin');
    }

    validateForm = () => {
        const { confirmPassword, password, email } = this.state;
        let errors = {};

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            errors.email = 'Please provide valid email';
        }

        if (confirmPassword !== password) {
            errors.confirmPassword = 'Passwords do not match'
        }
        return errors;
    }

    handleSubmit = evt => {
        evt.preventDefault();
        const { signUp } = this.props;
        const { firstName, lastName, email, password } = this.state;
        
        const errors = this.validateForm();

        if (Object.keys(errors).length) {
            this.setState({ error: errors });
        } else {
            
            signUp({
                email,
                lastName,
                password,
                firstName,
            });
        }
    }
    render() {
        const {
            email,
            error,
            password,
            lastName,
            firstName,
            confirmPassword
        } = this.state;
        return (
            <SignUpScreenContent
                email={email}
                errors={error}
                password={password}
                lastName={lastName}
                firstName={firstName}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                confirmPassword={confirmPassword}
                redirectSignIn={this.redirectSignIn}
            />
        )
    }
}

export default SignUpScreenContainer;
