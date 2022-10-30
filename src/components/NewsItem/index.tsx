import './style.scss';

interface INewsItem {
  item: {
    title: string;
    text: string;
  };
  index: number;
}

const NewsItem = ({ item }: INewsItem) => {
  return (
    <article>
      <h4>{item.title}</h4>
      <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
    </article>
  );
};

export default NewsItem;
