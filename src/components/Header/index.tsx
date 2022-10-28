import './style.scss';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="./logo.svg"></img>
        <h1>Wrench CRM</h1>
      </div>
      <div>
      <img src="./person.svg"></img>
      <p>Имя Фамилия</p></div>
    </header>
  );
};

export default Header;
