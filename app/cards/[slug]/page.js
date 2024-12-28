import styles from "../../page.module.css";
import prisma from '../../../lib/prisma';

export default async function FullInfoPage({ params }) {
    const slug = (await params).slug;
    const card = await prisma.post.findFirst({
        where: {
            id: slug
        }
    });

    return (
        <div className={styles.pageContainer}>
            {/* Заголовок */}
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Подробная информация</h1>
            </div>

            {/* Имя и описание */}
            <h2 className={styles.cardTitle}>{card.name}</h2>
            <p className={styles.cardDescription}>{card.description}</p>

            {/* Картинка */}
            {card.imageUrl && (
                <div className={styles.imageContainer}>
                    <img
                        src={card.imageUrl}
                        alt={`Image of ${card.name}`}
                        className={styles.fullInfoCardImage} // Уникальный класс для этой страницы
                    />
                </div>
            )}
        </div>
    );
}

