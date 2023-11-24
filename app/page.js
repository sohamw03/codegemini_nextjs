import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  const blogs = (await getServerSideProps()).slice(0, 3);

  return (
    <main className={styles.main}>
      <div className={styles.herotext}>
        <h1>CodeGemini</h1>
        <p>Unlocking the Code to Infinite Possibilities: Explore, Learn, and Create with CodeGemini!</p>
      </div>

      <Image id={styles["bg"]} src="/hero-bg.jpg" alt="Background-img" width={1920} height={1080} />

      <h2 className={styles.h2}>Popular Blogs</h2>
      <div className={styles.blogs}>
        {blogs.map((blogitem) => {
          return (
            <Link key={blogitem.slug} href={`blog/blogpost/${blogitem.slug}`}>
              <div className={styles.blog}>
                <h3>{blogitem.title}</h3>
                <p>{blogitem.metadesc || blogitem.content}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}

async function getServerSideProps() {
  const response = await fetch(`http://localhost:3000/api/getblogs`);
  const responseJson = await response.json();
  responseJson.map((blog) => {
    blog.slug = blog.title
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-");
    return blog;
  });
  console.log(responseJson);
  return responseJson;
}
