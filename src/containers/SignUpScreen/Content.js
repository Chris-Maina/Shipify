import React from 'react';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FacebookIcon from '@material-ui/icons/Facebook';
import FormHelperText from '@material-ui/core/FormHelperText';

import styles from './styles';

const SignUpScreenContent = ({
    email,
    errors,
    classes,
    password,
    lastName,
    firstName,
    handleSubmit,
    handleChange,
    redirectSignIn,
    confirmPassword,
}) => {
    return (
        <div className={classes.container}>
            <Paper className={classes.wrapper}>
                {/* Right content */}
                <div className={classes.leftContent}>
                    <div className={classes.titleWrapper}>
                        <div className={classes.title}>Hello!</div>
                        <div className={classes.subtitle}>Let's create your account</div>
                    </div>
                    <div className={classes.row}>
                        {/* Social login */}
                        <Button
                            variant="contained"
                            color='primary'
                            className={classes.facebookBtn}
                        >
                            <FacebookIcon className={classes.facebookIcon} />
                            Facebook
                        </Button>
                        <div className={classes.googleBtn}>
                            <div className={classes.googleIconWrapper}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google signin button" />
                            </div>
                            <div>Google</div>
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.divider} />
                        <span>OR</span>
                        <div className={classes.divider} />
                    </div>
                    <form className={classes.formWrapper} onSubmit={handleSubmit}>
                        <div className={classes.formGroup}>
                            <FormControl className={classes.formElement}>
                                <label className={classes.label}>First name</label>
                                <InputBase name='firstName' value={firstName} onChange={handleChange} />
                            </FormControl>
                            <FormControl className={classes.formElement}>
                                <label className={classes.label}>Last name</label>
                                <InputBase name='lastName' value={lastName} onChange={handleChange} />
                            </FormControl>
                        </div>
                        <FormControl className={classes.formElement}>
                            <label className={classes.label}>Email</label>
                            <InputBase
                                required
                                type='email'
                                name='email'
                                value={email}
                                onChange={handleChange}
                            />
                            {errors.email && <FormHelperText error={!!errors.email} >{errors.email}</FormHelperText>}
                        </FormControl>
                        <FormControl className={classes.formElement}>
                            <label className={classes.label} htmlFor='password'>Password</label>
                            <InputBase
                                required
                                type='password'
                                name='password'
                                value={password}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl className={classes.formElement}>
                            <label className={classes.label} htmlFor='password'>Confirm password</label>
                            <InputBase
                                required
                                type='password'
                                name='confirmPassword'
                                value={confirmPassword}
                                onChange={handleChange}
                                error={!!errors.confirmPassword}
                            />
                            {errors.confirmPassword && <FormHelperText error={!!errors.confirmPassword} >{errors.confirmPassword}</FormHelperText>}
                        </FormControl>
                        <Button
                            color='primary'
                            type="submit"
                            variant="contained"
                            className={classes.loginButton}
                        >
                            Sign up
                        </Button>
                    </form>
                    <div className={classes.createAccWrapper}>
                        <div>Already have an account?</div>
                        <Button
                            color="secondary"
                            variant="outlined"
                            onClick={redirectSignIn}
                            className={classes.createButton}
                        >
                            Sign in
                        </Button>
                    </div>
                </div>
                {/* Left content */}
                <div className={classes.rightContent} />
            </Paper>
        </div>
    )
}

export default withStyles(styles)(SignUpScreenContent);
