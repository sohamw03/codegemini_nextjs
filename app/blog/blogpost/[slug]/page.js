import styles from "./page.module.css";
import fs from "fs";

export default async function Blogpost({ params }) {
    const props = await getServerSideProps(params);
    return (
        <main className={styles.main}>
            <h1 className={styles.blogtitle}>{props.title}</h1>
            <hr className={styles.divider} />
            <p>{props.content}</p>
        </main>
    );
}

async function getServerSideProps(params) {
    const response = await fetch(`http://localhost:3000/api/blog?slug=${params.slug}`);
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
}
