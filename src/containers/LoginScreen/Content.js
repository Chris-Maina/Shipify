import React from 'react';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import FacebookIcon from '@material-ui/icons/Facebook';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

const LoginScreenContent = ({
    classes,
    error,
    email,
    password,
    handleChange,
    handleSubmit,
    redirectToSignUp
}) => {
    return (
        <div className={classes.container}>
            <Paper className={classes.wrapper}>
                {/* Right content */}
                <div className={classes.leftContent}>
                    <div className={classes.titleWrapper}>
                        <div className={classes.title}>Welcome Back</div>
                        <div className={classes.subtitle}>Please sign in to continue</div>
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
                        <FormControl className={classes.formElement}>
                            <label className={classes.label}>Email</label>
                            <InputBase type='email' name='email' value={email} onChange={handleChange} />
                        </FormControl>
                        <FormControl className={classes.formElement}>
                            <label className={classes.label} htmlFor='password'>Password</label>
                            <InputBase type='password' name='password' value={password} onChange={handleChange} />
                        </FormControl>
                        <Button 
                            color='primary'
                            type='submit' 
                            variant="contained" 
                            className={classes.loginButton}
                        >
                            Sign in
                        </Button>
                        <a href='/signup' className={classes.forgotPassTxt}>Forgot password?</a>
                    </form>
                    <div className={classes.createAccWrapper}>
                        <div>Don't have an account?</div>
                        <Button
                            className={classes.createButton}
                            variant="outlined"
                            color="secondary"
                            onClick={redirectToSignUp}
                        >
                            Create now
                        </Button>
                    </div>
                </div>
                {/* Left content */}
                <div className={classes.rightContent} />
            </Paper>
        </div>
    )
}

export default withStyles(styles)(LoginScreenContent);
