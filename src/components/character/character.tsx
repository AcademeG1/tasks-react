import { CharProps } from '../../types/types';
import './character.css';

const Char = ({
  nameChar,
  height,
  hair_color,
  mass,
  gender,
  eye_color,
  index,
}: CharProps): JSX.Element => {
  return (
    <div className="block-character">
      <div className="name-character">
        {index}. <span>{nameChar.toUpperCase()}</span>
      </div>
      <p className="description charHeight">Height: {height}</p>
      <p className="description hair_color">Hair color: {hair_color}</p>

      <p className="description mass">Mass: {mass}</p>
      <p className="description gender">Gender: {gender}</p>
      <p className="description eye_color">
        Eye color: {eye_color}{' '}
        <span style={{ backgroundColor: eye_color }}></span>
      </p>
    </div>
  );
};

export default Char;
