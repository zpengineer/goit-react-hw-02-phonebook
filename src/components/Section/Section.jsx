import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ title, children, titleTag }) => {
  return (
    <div className={styles.section}>
      {titleTag === 'h2' ? (
        <h2 className={styles.title}>{title}</h2>
      ) : (
        <h3 className={styles.title}>{title}</h3>
      )}

      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  titleTag: PropTypes.string,
};

export default Section;
