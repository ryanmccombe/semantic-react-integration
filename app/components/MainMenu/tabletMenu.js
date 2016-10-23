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

export default class TabletMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="ui inverted borderless menu tablet computer only row" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <a className="active item">
          <FormattedMessage {...messages.findAJob} />
        </a>
        <a className="item">
          <FormattedMessage {...messages.aboutUs} />
        </a>
        <a className="item">
          <FormattedMessage {...messages.contact} />
        </a>

        <div className="right menu">
          <div className={`item ${styles.button}`}>
            <div className="ui secondary button">
              <FormattedMessage {...messages.clientLogin} />
            </div>
          </div>
          <div className={`horizontally fitted item ${styles.button}`}>
            <div className="ui primary button">
              <FormattedMessage {...messages.clientLogin} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
