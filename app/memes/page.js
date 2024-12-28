import prisma from '../../lib/prisma';
import styles from "../../app/page.module.css";

export const metadata = {
  title: "Мемы с котиками",
  description: "Лучшая коллекция мемов с котиками",
};

export default async function PMemesPage() {
  // Получаем посты из базы данных
  const posts = await prisma.post.findMany();

  return (
    <div className={styles.pageContainer}>
      {/* Навбар */}
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <ul className={styles.navbarMenu}>
            <li><a href="/" className={styles.navbarLink}>Главная</a></li>
            <li><a href="/memes" className={styles.navbarLink}>Наши котики</a></li>
            <li><a href="/contacts" className={styles.navbarLink}>Контакты</a></li>
          </ul>
        </div>
      </nav>

      {/* Заголовки */}
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Наши котики</h1>
        <p className={styles.subtitle}>
          Каждый из этих хвостатых — уникальная история, наполненная надеждой,
          любовью и мечтами о новом доме. Мы заботимся о каждом питомце, окружая их
          вниманием и лаской, пока они ждут встречи с вами — своим будущим хозяином.
        </p>
        <h1 className={styles.subtitle}>
          Откройте своё сердце — откройте свой дом для нового друга!
        </h1>
      </div>

      {/* Контейнер с карточками */}
      <div className={styles.memeCardContainer}>
        {posts.map((post) => (
          <div key={post.id} className={styles.memeCard}>
            <img src={post.imageUrl} alt={post.name} className={styles.memeCardImage} />
            <h2 className={styles.memeCardTitle}>{post.name}</h2>
            <p className={styles.memeCardDescription}>{post.description}</p>
            {/* Ссылка "Подробнее" */}
            <a href={`../cards/${post.id}`} className={styles.memeCardLink}>Подробнее</a>
          </div>
        ))}
      </div>

      {/* Футер */}
      <footer className={styles.footer}>
        <p>© Ремеслова, Калмышева, Наумчук</p>
      </footer>
    </div>
  );
}
