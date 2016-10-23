/**
 * Pattern Library
 *
 * Demo of Semantic UI styling with current theme
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Site from '../../components/PatternLibrary/Site';
import styles from './styles.css';

export default class PatternLibrary extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={`ui container ${styles.wrapper}`}>
        <h1 className={styles.pageheader}>Theming Examples</h1>

        <h2 className={`ui dividing header ${styles.dividingheader}`}>Site</h2>
        <Site />
      </div>
    );
  }
}
