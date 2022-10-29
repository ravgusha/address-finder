import { useNavigate } from 'react-router';

import './style.scss';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div
      className="logo"
      onClick={() => {
        navigate('/');
      }}
    >
      <img src="./logo.svg" alt="logo"></img>
      <h1>Wrench CRM</h1>
    </div>
  );
};

export default Logo;
