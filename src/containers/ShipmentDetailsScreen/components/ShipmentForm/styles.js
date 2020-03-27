const styles = {
    card: {
        padding: 20,
        fontSize: 14,
        display: 'flex',
        flexDirection: 'column'
    },
    label: {
        textTransform: 'uppercase',
        marginBottom: 5,
        fontWeight: 600,
    },
    block: {
        marginBottom: 20
    },
    innerBlock: {
        display: 'flex',
        maxWidth: '40%',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '10px 0px',

    },
    input: {
        maxWidth: '40%'
    },
    buttonWrapper: {
        display: 'flex',
        marginTop: 20
    },
    button: {
        marginLeft: 10,
        width: '15%',
    },
    cargoWrapper: {
        maxWidth: '40%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    inputWrapper: {
        display: 'flex',
        maxWidth: '55%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    active: {
        color: 'green'
    },
    danger: {
        color: 'red'
    }
}

export default styles;