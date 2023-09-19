import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.herotext}>
                <h1>CodeGemini</h1>
                <p>Unlocking the Code to Infinite Possibilities: Explore, Learn, and Create with CodeGemini!</p>
            </div>

            <Image id={styles["bg"]} src="/hero-bg.jpg" alt="Background-img" width={1920} height={1080} />

            <h2 className={styles.h2}>Popular Blogs</h2>
            <div className={styles.blogs}>
                <div className={styles.blog}>
                    <h3>How to learn JavaScript in 2023 ?</h3>
                    <p>JavaScript is the language to design logic for the web.</p>
                </div>
                <div className={styles.blog}>
                    <h3>How to learn JavaScript in 2023 ?</h3>
                    <p>JavaScript is the language to design logic for the web.</p>
                </div>
                <div className={styles.blog}>
                    <h3>How to learn JavaScript in 2023 ?</h3>
                    <p>JavaScript is the language to design logic for the web.</p>
                </div>
            </div>
        </main>
    );
}
