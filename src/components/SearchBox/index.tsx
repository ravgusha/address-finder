import './style.scss';

const SearchBox = () => {
  return (
    <div className='searchbar'>
      <input type="text" placeholder='Введите интересующий вас адрес'/>
      <button>Поиск</button>
    </div>
  );
};

export default SearchBox;
