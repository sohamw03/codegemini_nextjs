import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import fs from "fs";

export default async function Blog() {
    const blogs = await getServerSideProps();

    return (
        <main className={styles.main}>
            <h2 className={styles.h2}>Popular Blogs</h2>
            <div className={styles.blogs}>
                {blogs.map((blogitem) => {
                    return (
                        <Link key={blogitem.slug} href={`blog/blogpost/${blogitem.slug}`}>
                            <div className={styles.blog}>
                                <h3>{blogitem.title}</h3>
                                <p>{blogitem.content.slice(0, 120)}...</p>
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
