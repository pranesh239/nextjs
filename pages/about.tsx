import React from 'react';
import styles from '../styles/index.module.css';

type AboutProps = {
  data: [];
};

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <>
      <h1 className={styles.redBG}>Hello there</h1>
    </>
  );
};

export default About;
