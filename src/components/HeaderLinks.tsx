import Link from "next/link";
import styles from "../styles/Home.module.css";

const HeaderLinks = () => {
  return (
    <main className={styles.headerContainer}>
      <div className={styles.description}>
        <Link href="/">Static page rendering</Link>
        <Link href="/client-side">Fetch data from component</Link>
        <Link href="/server-side">Server side rendering</Link>
      </div>
    </main>
  );
};

export default HeaderLinks;
