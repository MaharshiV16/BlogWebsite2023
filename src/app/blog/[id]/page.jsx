import React from "react";
import styles from "./id.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

const getData = async (id) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { next: { revalidate: 10 } });
	if (!res.ok) {
		return notFound();
	}
	return res.json();
};

const BlogPost = async ({ params }) => {
	const data = await getData(params.id);
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.info}>
					<h1 className={styles.title}>{data.title}</h1>
					<p className={styles.desc}>{data.body}</p>
					<div className={styles.author}>
						<Image
							src="/hero.png"
							alt=""
							width={40}
							height={40}
							className={styles.avatar}
						/>
						<span className={styles.username}>username</span>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<Image
						src="/hero.png"
						alt=""
						fill={true}
						className={styles.image}
					/>
				</div>
			</div>
			<div className={styles.content}>
				<p className={styles.text}>content</p>
			</div>
		</div>
	);
};

export default BlogPost;
