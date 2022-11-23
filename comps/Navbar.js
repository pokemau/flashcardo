import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h1>FLASHCARDO</h1>
        </div>

        <div className={styles["nav-links"]}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
