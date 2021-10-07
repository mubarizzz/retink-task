import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// We can inject some CSS into the DOM.
const styles = {
  root: {
    background: 'linear-gradient(45deg, #4d3154 30%, #3d1044 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 50,
    padding: '0 40px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
};

function Buttons(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Button className={clsx(classes.root, className)} {...other}>
      {children || 'FREE DEMO'}
    </Button>
  );
}

Buttons.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(Buttons);