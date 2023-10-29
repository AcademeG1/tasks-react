import { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import { Character } from './types/types';
import Service from './services/service';
import Spinner from './components/Spinner/Spinner';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

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

  componentDidMount(): void {
    if (this.searchQuery !== null && this.searchQuery !== '') {
      this.setState({ inputString: this.searchQuery }, () => {
        this.service.getSearchCharacter(this.state.inputString).then((item) => {
          this.setState((prevState) => ({
            ...prevState,
            charList: item.results,
          }));
          this.setState((prevState) => ({ ...prevState, loader: false }));
        });
      });
    } else {
      this.service.getAllCharacters().then((item) => {
        this.setState((prevState) => ({
          ...prevState,
          charList: item.results,
        }));
        this.setState((prevState) => ({ ...prevState, loader: false }));
      });
    }
  }

  render() {
    return (
      <>
        <ErrorBoundary>
          <Header
            inputString={this.state.inputString}
            setInputString={this.setInputString}
            setCharList={this.setCharList}
            setLoader={this.setLoader}
          />
        </ErrorBoundary>
        {this.state.loader ? (
          <Spinner />
        ) : (
          <ErrorBoundary>
            <button
              className="btn_error"
              onClick={() => {
                throw new Error('намеренная ошибка для теста');
              }}
            >
              Create Error
            </button>
            <Main
              charList={this.state.charList}
              setCharList={this.setCharList}
            />
          </ErrorBoundary>
        )}
      </>
    );
  }
}

export default App;
