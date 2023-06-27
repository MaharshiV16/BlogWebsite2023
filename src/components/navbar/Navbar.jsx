"use client";
import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkMoteToggle from "../DarkModeToggle/DarkMoteToggle";

const links = [
	{
		id: 1,
		title: "Home",
		url: "/",
	},
	{
		id: 2,
		title: "Portfolio",
		url: "/portfolio",
	},
	{
		id: 3,
		title: "Blog",
		url: "/blog",
	},
	{
		id: 4,
		title: "About",
		url: "/about",
	},
	{
		id: 5,
		title: "Contact",
		url: "/contact",
	},
	{
		id: 6,
		title: "Dashboard",
		url: "/dashboard",
	},
];

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<Link href="/" className={styles.logo}>
				App Name
			</Link>
			<div className={styles.links}>
				<DarkMoteToggle />
				{links.map((link) => (
					<Link href={link.url} key={link.id} className={styles.link}>
						{link.title}
					</Link>
				))}
				<button
					className={styles.navBtn}
					onClick={() => {
						console.log("Logged Out");
					}}
				>
					Logout
				</button>
			</div>
		</div>
	);
};

export default Navbar;
