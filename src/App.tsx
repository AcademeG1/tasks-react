import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import { Character } from './types/types';
import Service from './services/service';
import Spinner from './components/Spinner/Spinner';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

const App = () => {
  const { getAllCharacters, getSearchCharacter } = Service();
  const [inputString, setInputString] = useState('');
  const [charList, setCharList] = useState<Character[]>([]);
  const [loader, setLoader] = useState(true);
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem('search-query') || ''
  );

  useEffect(() => {
    if (searchQuery !== '') {
      setInputString(searchQuery);
      setSearchQuery;
      getSearchCharacter(localStorage.getItem('search-query') || '').then(
        (item) => {
          setCharList(item.results);
          setLoader(false);
        }
      );
    } else {
      getAllCharacters().then((item) => {
        setCharList(item.results);
        setLoader(false);
      });
    }
  }, []);

  return (
    <>
      <ErrorBoundary>
        <Header
          inputString={inputString}
          setInputString={setInputString}
          setCharList={setCharList}
          setLoader={setLoader}
        />
      </ErrorBoundary>
      {loader ? (
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
          <Main charList={charList} />
        </ErrorBoundary>
      )}
    </>
  );
};

export default App;
