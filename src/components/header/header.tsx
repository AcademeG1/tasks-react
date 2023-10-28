import { ChangeEvent, Component } from 'react';
import Service from '../../services/service';
import './header.css';
import { Character } from '../../types/types';
class Header extends Component<{
  inputString: string;
  setInputString: (newString: string) => void;
  setCharList: (charList: Character[]) => void;
  setLoader: (flag: boolean) => void;
}> {
  service = new Service();
  handlerChange = (event: ChangeEvent<HTMLInputElement>) =>
    this.props.setInputString(event.target.value);

  handlerButtonClick = () => {
    localStorage.setItem('search-query', this.props.inputString);
    this.props.setLoader(true);
    this.service.getSearchCharacter(this.props.inputString).then((item) => {
      this.props.setCharList(item.results);
      this.props.setLoader(false);
    });
  };
  render() {
    return (
      <div className="header">
        <input
          type="text"
          onChange={this.handlerChange}
          placeholder="name to search"
          value={this.props.inputString!}
        />
        <button onClick={this.handlerButtonClick}>search</button>
      </div>
    );
  }
}

export default Header;
