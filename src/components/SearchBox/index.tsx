import { FormEvent } from 'react';

import './style.scss';

interface ISearchBox {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const SearchBox = ({ onSubmit }: ISearchBox) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Введите интересующий вас адрес" name="query" minLength={3} />
      <button type="submit">
        <span>Поиск</span>
      </button>
    </form>
  );
};

export default SearchBox;
