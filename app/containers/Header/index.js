/*
 * Header
 *
 * This is the site header
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

export default class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <h1>
        <FormattedMessage {...messages.findAJob} />
      </h1>
    );
  }
}
