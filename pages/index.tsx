import Head from "next/head";
import Link from "next/link";
import styles from "./index.module.scss";

import { DualismBox } from "../components/DualismBox";
import { LearningBox } from "../components/LearningBox";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Gianluca Costa's Creations</title>
        <meta name="author" content="Gianluca Costa" />
        <link rel="canonical" href="https://gianlucacosta.info/" />
        <meta name="description" content="Gianluca Costa's personal website" />
        <meta name="keywords" content="Gianluca Costa,science,humanism" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <main>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Gianluca Costa's Creations</h1>
          </div>

          <div className={styles.portraitBox}>
            <img
              className={styles.portrait}
              alt="Gianluca Costa's portrait"
              src="gian.jpg"
            />
          </div>

          <div className={styles.signatureBox}>Elegance always matters</div>

          <DualismBox />

          <LearningBox />

          <div className={styles.contactsBox}>
            <a href="cv_costa_en.pdf">Download CV</a>

            <a href="https://www.linkedin.com/in/giancosta86">LinkedIn</a>
            <a href="https://twitter.com/giancosta86">Twitter</a>
            <a href="mailto:gianluca@gianlucacosta.info">E-mail</a>
          </div>
        </div>
      </main>

      <footer className="mainFooter">
        <Link href="/privacy">Privacy policy</Link>
      </footer>
    </>
  );
}
