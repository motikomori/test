"use client";
import styles from "../../app/page.module.css";

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
      title: "Контакты",
      subtitle: "Свяжитесь с нами для любых вопросов!",
    },
    contactDetails: {
      address: "г. Москва, ул. Пушистых, д. 5",
      phone: "+7 (999) 123-45-67",
      email: "info@kotodommurlyka.ru",
    },
    map: {
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.602649638617!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIwLjgiTiAzN8KwMzcnMDIuOSJF!5e0!3m2!1sen!2sru!4v1699999999999!5m2!1sen!2sru",
    },
    footer: {
      text: "© Кошачий дом, 2024",
    },
  },
};

export default function ContactPage() {
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
        <h1 className={styles.bannerTitle}>{pageData.body.banner.title}</h1>
        <p className={styles.bannerSubtitle}>{pageData.body.banner.subtitle}</p>
      </div>

      {/* Контактные данные */}
      <section className={styles.contactSection}>
        <ul className={styles.contactList}>
          <li><strong>Адрес:</strong> {pageData.body.contactDetails.address}</li>
          <li><strong>Телефон:</strong> {pageData.body.contactDetails.phone}</li>
          <li><strong>Email:</strong> <a href={`mailto:${pageData.body.contactDetails.email}`}>{pageData.body.contactDetails.email}</a></li>
        </ul>
      </section>

      {/* Карта */}
      <div className={styles.mapContainer}>
        <iframe
          src={pageData.body.map.iframeSrc}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Карта расположения"
        ></iframe>
      </div>

      {/* Футер */}
      <footer className={styles.footer}>
        <p>© Ремеслова, Калмышева, Наумчук</p>
      </footer>
    </div>
  );
}
