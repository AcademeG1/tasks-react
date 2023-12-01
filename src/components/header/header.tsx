import { ChangeEvent } from 'react';
import Service from '../../services/service';
import './header.css';
import { HeaderProps } from '../../types/types';
import ErrorButton from '../errorButton/errorButton';

const Header = ({
  inputString,
  setInputString,
  setCharList,
  setLoader,
}: HeaderProps): JSX.Element => {
  const { getSearchCharacter } = Service();

  const handlerChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInputString(event.target.value);

  const handlerButtonClick = () => {
    localStorage.setItem('search-query', inputString);
    setLoader(true);
    getSearchCharacter(inputString).then((item) => {
      setCharList(item.results);
      setLoader(false);
    });
  };
  return (
    <div className="header">
      <input
        type="text"
        onChange={handlerChange}
        placeholder="name to search"
        value={inputString}
      />
      <button onClick={handlerButtonClick}>search</button>
      <ErrorButton />
    </div>
  );
};

export default Header;
