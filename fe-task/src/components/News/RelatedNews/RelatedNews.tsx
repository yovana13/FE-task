import styles from './RelatedNews.module.scss';

const RelatedNews = (props: {
  relatedNews: { label: string; link: string }[];
}) => {
  return (
    <ul className={`${styles["related-news-wrapper"]}`}>
      {props.relatedNews.map((news) => (
        <li key={news.link}>
          <a href={news.link}>{news.label}</a>
        </li>
      ))}
    </ul>
  );
};
export default RelatedNews;
