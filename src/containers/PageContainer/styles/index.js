const drawerWidth = 240;
const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    margin: '0 auto',
  },
  toolBarTitle: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    zIndex: theme.zIndex.appBar + 1,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: 0,
  },
  drawerContainer: {
    overflow: 'auto',
    padding: '24px',
  },
  toolbar: {
    flexDirection: 'column',
    justifyContent: 'center',
    ...theme.mixins.toolbar,
  },
  avartar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    backgroundColor: theme.palette.text.main
  },
  userName: {
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '18px'
  },
  listItem: {
    color: 'inherit',
    display: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
    textDecoration: 'inherit',
    flexGrow: 1,
  },
  listItemIcon: {
    minWidth: 46,
  },
  listItemText: {
    fontWeight: 500,
  },
  content: {
    display: 'flex',
    flexGrow: 1,
    background: '#f1f3f6',
    flexDirection: 'column',
    padding: theme.spacing(3),
  },
  pageContent: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0%'
  }
});

export default styles;
