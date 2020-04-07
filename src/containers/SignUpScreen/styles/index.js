import blueBackground from '../../../images/watercolor_background.jpg';

const text = {
    fontSize: 13,
    color: 'rgba(0, 0, 0, 0.54)'
}
const styles = theme => ({
    container: {
        fontSize: 12,
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${blueBackground})`,
    },
    wrapper: {
        width: '70%',
        display: 'flex',
        boxShadow: ' 0 2.8px 2.2px rgba(0, 0, 0, 0.02), 0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035), 0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 10px 80px rgba(0, 0, 0, 0.07)'
    },
    rightContent: {
        width: '50%',
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${blueBackground})`
        },
    },
    image: {
        objectFit: 'cover',
        height: '100%',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
    },
    leftContent: {
        width: '100%',
        display: 'flex',
        padding: '20px 0',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            width: '50%',
        },
    },
    titleWrapper: {
        textAlign: 'center',
        marginBottom: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10,
    },
    subtitle: {
        ...text,
        fontSize: 15,
    },
    row: {
        width: '80%',
        display: 'flex',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        '& span': {
            margin: '0 8px'
        }
    },
    facebookBtn: {
        backgroundColor: '#1877f2',
        borderRadius: 14,
        '&:hover': {
            backgroundColor: '#1877f2',
        }
    },
    facebookIcon: {
        fontSize: 18,
        marginRight: 24,  
    },
    googleBtn: {
        height: 36,
        minWidth: 64,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.75,
        fontFamily: 'Roboto',
        borderRadius: 14,
        display: 'flex',
        alignItems: 'center',
        padding: '6px 16px',
        backgroundColor: '#FEFEFD',
        textTransform: 'uppercase',
        boxSizing: 'border-box',
        boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)'
    },
     googleIconWrapper: {
        width: 18,
        height: 18,
        marginRight: 24
    },
    divider: {
        width: '100%',
        opacity: 0.1,
        borderBottom: '1px solid #000'
    },
    formWrapper: {
        display: 'flex',
        width: '80%',
        flexDirection: 'column',
    },
    formGroup: {
        display: 'flex',
        '& div': {
            width: '95%'
        }
    },
    label: {
        marginLeft: 5,
        textTransform: 'uppercase',
        ...text
    },
    inputRoot: {
        marginTop: 10,
    },
    inputInput: {
        borderRadius: 14,
        width: '100%',
        padding: '10px 12px',
        border: '1px solid #ced4da',
    },
    formElement: {
        width: '100%',
        marginBottom: 10,
    },
    loginButton: {
        width: '100%',
        borderRadius: 14,
        marginBottom: 20
    },
    createButton: {
        borderRadius: 14,
        backgroundColor: '#fff'
    },
    createAccWrapper: {
        width: '80%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 13,
    }
});

export default styles;
