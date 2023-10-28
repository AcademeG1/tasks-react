import { Component } from 'react';
import Char from '../character/character';
import { Character } from '../../types/types';
import './main.css';

class Main extends Component<{
  charList: Character[];
  setCharList: (charList: Character[]) => void;
}> {
  render() {
    return (
      <div className="container">
        {this.props.charList.map(
          ({ name, height, hair_color, mass, gender, eye_color }, index) => (
            <Char
              key={index}
              nameChar={name}
              height={height}
              hair_color={hair_color}
              mass={mass}
              gender={gender}
              eye_color={eye_color}
              index={++index}
            />
          )
        )}
      </div>
    );
  }
}

export default Main;
