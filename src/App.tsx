import { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import { Character } from './types/types';
import Service from './services/service';

class App extends Component {
  service = new Service();
  state = { inputString: '', charList: [] as Character[], loader: true };
  searchQuery = localStorage.getItem('search-query');

  setInputString = (newString: string) => {
    this.setState((prevState) => ({ ...prevState, inputString: newString }));
  };

  setCharList = (charList: Character[]) => {
    this.setState((prevState) => ({ ...prevState, charList: charList }));
  };

  setLoader = (flag: boolean) => {
    this.setState((prevState) => ({ ...prevState, loader: flag }));
  };

  render() {
    return (
      <>
        <Header
          inputString={this.state.inputString}
          setInputString={this.setInputString}
          setCharList={this.setCharList}
          setLoader={this.setLoader}
        />
      </>
    );
  }
}

export default App;
