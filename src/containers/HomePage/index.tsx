import NewsItem from '../../components/NewsItem';
import Navigation from '../Navigation';
import NewsData from './NewsData';

import './style.scss';

const HomePage = () => {
  return (
    <div className="container">
      <Navigation />
      <main>
        <h2>Новости</h2>
        {NewsData.map((item, index) => {
          return <NewsItem item={item} index={index} key={index}></NewsItem>;
        })}
      </main>
    </div>
  );
};
export default HomePage;
