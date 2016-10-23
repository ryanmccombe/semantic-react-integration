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
import TabletMenu from './tabletMenu';
import MobileMenu from './mobileMenu';

export default class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <div>
          <div className={styles.leftBar}></div>
          <div className={styles.rightBar}></div>
        </div>
        <nav className={styles.navBar} style={{ clear: 'both' }}>
          <div className="ui container grid">
            <TabletMenu />
            <MobileMenu />
          </div>


        </nav>
      </div>
    );
  }
}
