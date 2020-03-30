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
        padding: '0px 10px',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '10px 0px',

    },
    typeInput: {
        width: '30%',
        marginRight: 10,
    },
    volumeInput: {
        width: '20%',
        marginLeft: 10,
    },
    buttonWrapper: {
        justifyContent: 'center',
    },
    button: {
        marginLeft: 10,
        width: '20%',
    },
    cargoWrapper: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    addIcon: {
        color: 'green',
        marginRight: 10,
    },
    iconWrapper: {
        display: 'flex',
        paddingLeft: 15,
    },
    active: {
        color: 'green',
        marginRight: 15,
    },
    danger: {
        color: 'red',
    }
}

export default styles;