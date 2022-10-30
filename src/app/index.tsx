import { Routes, Route } from 'react-router-dom';

import routes from './routes';
import Header from '../components/Header';
import Navigation from '../containers/Navigation';
import { ContextProvider } from '../context';

import './style.scss';
import NotFoundPage from '../containers/NotFoundPage';

function App() {
  return (
    <ContextProvider>
      <Header />
      <div className="container">
        <Navigation />
        <Routes>
          {routes.map(({ path, component: Component }, i) => (
            <Route key={i} path={path} element={<Component />} />
          ))}
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;
