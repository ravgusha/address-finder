import './style.scss';

interface IHeaderUser {
  name: string;
}

const HeaderUser = ({name}: IHeaderUser) => {
  return (
    <div className="user">
      <img src="./person.svg" alt="avatar"></img>
      <p>{name}</p>
    </div>
  );
};

export default HeaderUser;
