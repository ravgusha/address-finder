import { FormEvent } from 'react';
import './style.scss';

interface ISearchBox {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const SearchBox = ({onSubmit}: ISearchBox) => {

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Введите интересующий вас адрес" name="query" />
      <button type="submit">Поиск</button>
    </form>
  );
};

export default SearchBox;
