import React, { Component } from 'react';
import './spinner.css';
import SpinnerImg from './spinner.svg';

class Spinner extends Component {
  render(): JSX.Element {
    return <img className="spinner" src={SpinnerImg} alt="" />;
  }
}

export default Spinner;
