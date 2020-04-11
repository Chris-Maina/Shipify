import React, { memo } from 'react';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

const NoDataMessage = memo(({ classes, text }) => (
  <Paper className={classes.root}>
    <p className={classes.noDataText}>
      {text || 'There is no data to display.'}
    </p>
  </Paper>
));


export default withStyles(styles)(NoDataMessage);
