import React from 'react';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FacebookIcon from '@material-ui/icons/Facebook';

import styles from './styles';

const SignUpScreenContent = ({ classes }) => {
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
                    <form className={classes.formWrapper}>
                        <div className={classes.formGroup}>
                            <FormControl className={classes.formElement}>
                                <label className={classes.label}>First name</label>
                                <InputBase classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }} />
                            </FormControl>
                            <FormControl className={classes.formElement}>
                                <label className={classes.label}>Last name</label>
                                <InputBase classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }} />
                            </FormControl>
                        </div>
                        <FormControl className={classes.formElement}>
                            <label className={classes.label}>Email</label>
                            <InputBase classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }} type='email' />
                        </FormControl>
                        <FormControl className={classes.formElement}>
                            <label className={classes.label} htmlFor='password'>Password</label>
                            <InputBase classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }} type='password' />
                        </FormControl>
                        <FormControl className={classes.formElement}>
                            <label className={classes.label} htmlFor='password'>Confirm password</label>
                            <InputBase classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }} type='password' />
                        </FormControl>
                        <Button variant="contained" color='primary'  className={classes.loginButton}>Sign up</Button>
                    </form>
                    <div className={classes.createAccWrapper}>
                        <div>Already have an account?</div>
                        <Button className={classes.createButton} variant="outlined" color="secondary">Sign in</Button>
                    </div>
                </div>
                 {/* Left content */}
                 <div className={classes.rightContent} />
            </Paper>
        </div>
    )
}

export default withStyles(styles)(SignUpScreenContent);
