"use client";

import Link from "next/link";
import React from "react";
import styles from "@/app/page.module.css";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={pathname === "/" ? styles.activepage : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === "/about" ? styles.activepage : ""}>
          <Link href="/about">About</Link>
        </li>
        <li className={pathname.search("blog*") === 1 ? styles.activepage : ""}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={pathname === "/contact" ? styles.activepage : ""}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
