import React from 'react';
import './spinner.css';
import SpinnerImg from './spinner.svg';

const Spinner = (): JSX.Element => {
  return <img className="spinner" src={SpinnerImg} alt="" />;
};

export default Spinner;
