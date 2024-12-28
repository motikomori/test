"use client";
import styles from "./page.module.css";

const pageData = {
  body: {
    navbar: {
      menu: [
        { text: "Главная", href: "/" },
        { text: "Наши котики", href: "/memes" },
        { text: "Контакты", href: "/contacts" },
      ],
    },
    banner: {
      title: "Добро пожаловать в уютный кошачий дом!",
      subtitle:
        "Мы помогаем пушистым друзьям обрести семью и счастье. Присоединяйтесь к нашему сообществу!",
      image: { src: "/images/banner-cat.jpg", alt: "Котик на диване" },
    },
    section: {
      title: "Наши пушистики ждут вас",
      description:
        "Познакомьтесь с милыми котиками, которые с нетерпением ждут новых друзей!",
      carousel: {
        images: [
          "/images/cat1.jpg",
          "/images/cat2.jpg",
          "/images/cat3.jpg",
          "/images/cat4.jpg",
          "/images/cat5.jpg",
        ],
      },
    },
    footer: {
      text: "© Кошачий дом, 2024",
    },
  },
};

export default function HomePage() {
  const carouselImages = pageData.body.section.carousel.images;

  return (
    <div className={styles.pageContainer}>
      {/* Навбар */}
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <ul className={styles.navbarMenu}>
            {pageData.body.navbar.menu.map((item, index) => (
              <li key={index}>
                <a href={item.href} className={styles.navbarLink}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Баннер */}
      <div className={styles.banner}>
        
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>{pageData.body.banner.title}</h1>
          <p className={styles.bannerSubtitle}>
            {pageData.body.banner.subtitle}
          </p>
        </div>
      </div>

      {/* Секция с каруселью */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{pageData.body.section.title}</h2>
        <p className={styles.sectionDescription}>
          {pageData.body.section.description}
        </p>
        <div className={styles.carouselContainer}>
          <div className={styles.carouselTrack}>
            {/* Основные изображения */}
            {carouselImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Cat ${index + 1}`}
                className={styles.carouselImage}
              />
            ))}
            {/* Дублированные изображения */}
            {carouselImages.map((src, index) => (
              <img
                key={`duplicate-${index}`}
                src={src}
                alt={`Duplicate Cat ${index + 1}`}
                className={styles.carouselImage}
              />
            ))}
            {/* Дополнительное первое изображение для бесшовного перехода */}
            <img
              src={carouselImages[0]}
              alt="First Duplicate Cat"
              className={styles.carouselImage}
            />
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className={styles.footer}>
        <p>© Ремеслова, Калмышева, Наумчук</p>
      </footer>
    </div>
  );
}





