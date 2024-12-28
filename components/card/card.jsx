import Link from "next/link";
import styles from "./card.module.css";

export const Card = ({ title, description, imageUrl, id }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      {imageUrl && <img src={imageUrl} alt={title} className={styles.cardImage} />}
    
    {
      id != null ? <Link href={`/cards/${id}`}>Подробнее</Link> : <Link href={`/404`}></Link>
    }
    
    </div>
  );
};
