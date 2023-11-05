import Char from '../character/character';
import { MainProps } from '../../types/types';
import './main.css';

const Main = (props: MainProps): JSX.Element => {
  return (
    <div className="container">
      {props.charList.length == 0
        ? 'There are no such characters :('
        : props.charList.map(
            ({ name, height, hair_color, mass, gender, eye_color }, index) => (
              <Char
                key={index}
                nameChar={name}
                height={height}
                hair_color={hair_color}
                mass={mass}
                gender={gender}
                eye_color={eye_color}
                index={`${++index}`}
              />
            )
          )}
    </div>
  );
};

export default Main;
