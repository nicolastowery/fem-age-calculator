import styles from "./Attribution.module.css";
function Attribution() {
  return (
    <footer className={styles.attribution}>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://github.com/nicolastowery/fem-age-calculator">
        Nicolas Towery
      </a>
      .
    </footer>
  );
}

export default Attribution;
