const styles = theme => ({
  container: {
    paddingLeft: 20,
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    flexGrow: 1,
    fontWeight: 700,
    fontSize: 23,
  },
  searchIcon: {
    height: '100%',
    pointerEvents: 'none',
    padding: theme.spacing(0, 2),
  },
  inputRoot: {
    color: 'inherit',
    marginRight: 20,
    backgroundColor: theme.palette.common.white,
  },
  inputInput: {
    fontSize: '14px',
    border: 'none',
    boxSizing: 'border-box',
    '&:focus': {
      ouline: 'none',
      borderColor: 'none',
    }
  },
  createBtn: {
    marginTop: '10px'
  },
  shipmentWrapper: {
    marginTop: 20,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridColumnGap: 15,
    gridRowGap: 15,
    fontSize: 14,
  },
  tableHead: {
    fontWeight: 700,
    fontSize: 16,
    color: 'unset'
  },
  tableRow: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#DCDCDC',
    }
  },
  text: {
    margin: '8px 0'
  },
  completed: {
    color: 'blue'
  },
  active: {
    color: 'green'
  },
  mode: {
    textTransform: 'capitalize'
  }
});


export default styles;
