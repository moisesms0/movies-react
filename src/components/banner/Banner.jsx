import Styles from "./Banner.module.css";

export function Banner() {
  return (
    <section className={Styles.banner}>
      <div className={Styles.container}>
        <h2 className={Styles.title}>DMS Films</h2>
        <p className={Styles.paragraph}>
          Millones de peliculas y series por descubrir
        </p>
      </div>
    </section>
  );
}
