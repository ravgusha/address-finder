import NewsItem from '../../components/NewsItem';
import NewsData from './NewsData';

const Home = () => {
  return (
    <main>
      <h2>Новости</h2>
      {NewsData.map((item, index) => {
          return (
            <NewsItem item={item} index={index} key={index}></NewsItem>
          );
        })}
    </main>
  );
};
export default Home;
