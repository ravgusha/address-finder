import axios from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import SearchBox from '../../components/SearchBox';

const instance = axios.create({
  baseURL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
  headers: { Authorization: 'Token ' + 'a30327e5acc1b3e6b401d2491690328fb22bf8c5' },
  method: 'POST',
});

const Address = () => {
  const [searchResults, setSearchResults] = useState([]);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchQuery = (event.target as HTMLFormElement).query.value;
    instance
      .request({ data: { query: searchQuery } })
      .then((result) => setSearchResults(result.data.suggestions))
      .catch((error) => console.log('error', error));
  };

  return (
    <main>
      <h2>Поиск адресов</h2>
      <p>Введите интересующий вас адрес</p>
      <SearchBox onSubmit={onSubmit} />
    </main>
  );
};
export default Address;
