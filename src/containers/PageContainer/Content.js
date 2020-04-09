import React, { PureComponent } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
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
        >
          <Toolbar>
            <h3 className={classes.toolBarTitle}>SHIPIFY</h3>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => this.toggleDrawerState(true)}
              edge="end"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          open={open}
          onClose={() => this.toggleDrawerState(false)}
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
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div className={classes.pageContent}>{this.props.children}</div>
        </main>
      </div>
    )
  }
}



export default withStyles(styles, { withTheme: true })(Content);
