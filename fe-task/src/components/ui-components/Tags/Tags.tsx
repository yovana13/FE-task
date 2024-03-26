import styles from './Tag.module.scss';

const Tags = (props: { tags: string[] }) => {
  return (
    <ul className={`${styles["tag-wrapper"]}`}>
      {props.tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
};
export default Tags;
