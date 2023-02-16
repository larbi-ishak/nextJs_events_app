import Link from "next/link";
import styles from "@/styles/Home.module.css";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navUl}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
