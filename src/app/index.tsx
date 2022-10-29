import './style.scss';
import { Routes, Route} from 'react-router-dom';
import routes from './routes';
import Header from '../components/Header';
import Navigation from '../containers/Navigation';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Navigation />
        <Routes>
          {routes.map(({ path, component: Component }, i) => (
            <Route key={i} path={path} element={<Component />} />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
