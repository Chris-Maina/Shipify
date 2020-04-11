export default theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
      background: 'transparent',
      border: 'none',
      boxShadow: 'none',
      borderRadius: 0,
    },
    noDataText: {
      textAlign: 'center',
      transition: 'background .35s',
      backgroundColor: '#FFFFFF',
      borderTop: '1px solid #ecf2fa',
      borderBottom: '1px solid #ecf2fa',
      borderRadius: '4px',
      padding: '16px',
    },
  });
  