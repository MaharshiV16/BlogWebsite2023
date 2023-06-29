"use client";
import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const Footer = () => {
	const { mode } = useContext(ThemeContext);
	const fill = mode === "dark" ? "invert(1)" : "";
	return (
		<div className={styles.footer}>
			<div>© App Name. All rights reserved.</div>
			<div className={styles.social}>
				<Image
					src="/github.png"
					alt="github"
					width={28}
					height={28}
					className={styles.icon}
					style={{
						filter: fill,
					}}
				/>
				<Image
					src="/instagram.png"
					alt="instagram"
					width={25}
					height={25}
					className={styles.icon}
				/>
				<Image
					src="/linkedin.png"
					alt="linkedin"
					width={25}
					height={25}
					className={styles.icon}
				/>
				<Image
					src="/site.png"
					alt="website"
					width={20}
					height={20}
					className={styles.icon}
					style={{
						filter: fill,
					}}
				/>
			</div>
		</div>
	);
};

export default Footer;
