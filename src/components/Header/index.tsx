import './style.scss';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="./logo.svg"></img>
        <h3>Wrench CRM</h3>
      </div>
      <div>
      <img src="./person.svg"></img>
      <p>Имя Фамилия</p></div>
    </header>
  );
};

export default Header;
