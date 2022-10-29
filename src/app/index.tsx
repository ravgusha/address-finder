import './style.scss';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';
import Header from '../components/Header';
import Navigation from '../containers/Navigation';

function App() {
  return (
    <>
      <Header />
      <Routes>
        {routes.map(({ path, component: Component }, i) => (
          <Route key={i} path={path} element={<Component />} />
        ))}
      </Routes>
    </>
  );
}

export default App;
