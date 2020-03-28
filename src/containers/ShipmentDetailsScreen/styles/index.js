const styles = {
  container: {
    paddingLeft: 20,
    fontSize: 14,
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontWeight: 700,
    fontSize: 20,
    color: '#3f51b5',
  },
  card: {
    padding: 20,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  block: {
    marginBottom: 20
  },
  caption: {
    textTransform: 'uppercase',
    marginBottom: 5,
    color: '#3f51b5',
  },
  row: {
    width: '40%',
    display: 'flex',
    marginLeft: 5,
    marginBottom: 5,
  },
  rowItem: {
    width: '33%',
    boxSizing: 'border-box'
  },
  completed: {
    color: 'blue'
  },
  active: {
    color: 'green'
  },
  canceled: {
    color: 'red'
  }
}

export default styles;
