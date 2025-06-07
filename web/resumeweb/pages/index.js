import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import styles from "./Home.module.scss";
import HomeComponent from "./Home";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function HomePage() {
  return (
    <div
      className={`${styles.homePage} ${geistSans.variable} ${geistMono.variable}`}
    >
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.navbar}>
            <Link href="/login" className={styles.loginBtn}>
              Log In
            </Link>
            <Link href="/signup" className={styles.signupBtn}>
              Sign Up
            </Link>
          </nav>
        </div>
      </header>
      <main>
        <HomeComponent />
      </main>
    </div>
  );
}
