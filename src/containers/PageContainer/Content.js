import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PublicIcon from '@material-ui/icons/Public';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';

import styles from './styles';

class Content extends PureComponent {
  static propTypes = {
    classes: PropTypes.shape({}),
  }

  state = {
    open: false
  }

  menuClick = () => {
    this.setState(prevState => ({ open: !prevState.open }))
  }

  toggleDrawerState = bool => {
    this.setState({ open: bool });
  }
  /**
   * Drawer and this.props.children
  */
  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classes.appBar}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="Open drawer"
              className={classes.menuButton}
              onClick={this.menuClick}
            >
              <MenuIcon />
            </IconButton>
            <h3 className={classes.toolBarTitle}>SHIPIFY</h3>
            <IconButton
              color="inherit"
              aria-label="logout"
              // onClick={() => this.toggleDrawerState(true)}
              edge="end"
            >
              <ExitToAppIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Smaller screen drawer */}
        <Hidden smUp implementation="css">
          <Drawer
            className={classes.drawer}
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="temporary"
            open={open}
            onClose={() => this.toggleDrawerState(false)}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <div className={classes.drawerContainer}>
              <Toolbar className={classes.toolbar}>
                <Avatar className={classes.avartar}>CM</Avatar>
                <h4 className={classes.userName}>Chris Maina</h4>
              </Toolbar>
              <Divider />
              <List>
                <ListItem>
                  <Link className={classes.listItem} to='/shipments' >
                    <ListItemIcon className={classes.listItemIcon}><PublicIcon /></ListItemIcon>
                    <ListItemText classes={{ primary: classes.listItemText }} primary="Shipments" />
                  </Link>
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Hidden>

        {/* Large screen drawer */}
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            classes={{
              paper: classes.drawerPaper,
            }}
            open={open}
            variant="permanent"
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <Toolbar className={classes.toolbar}>
                <Avatar className={classes.avartar}>CM</Avatar>
                <h4 className={classes.userName}>Chris Maina</h4>
              </Toolbar>
              <Divider />
              <List>
                <ListItem>
                  <Link className={classes.listItem} to='/shipments' >
                    <ListItemIcon className={classes.listItemIcon}><PublicIcon /></ListItemIcon>
                    <ListItemText classes={{ primary: classes.listItemText }} primary="Shipments" />
                  </Link>
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div className={classes.pageContent}>{this.props.children}</div>
        </main>
      </div>
    )
  }
}



export default withStyles(styles, { withTheme: true })(Content);
