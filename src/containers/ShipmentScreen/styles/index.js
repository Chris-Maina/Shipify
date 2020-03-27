const styles = {
  container: {
    paddingLeft: 20,
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inputRoot: {
    'input': {
      fontSize: '14px',
      ouline: 'none',
      padding: '14px 10px',
      backgroundColor: '#fff',
      boxSizing: 'border-box'
    }
  },
  searchField: {
    fontSize: '14px',
    marginLeft: 'auto'
  },
  title: {
    fontWeight: 700,
    fontSize: 23,
    color: '#3f51b5'
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
  }
}

export default styles;
