import React from "react";
import styles from "./footer.module.css"
import Image from "next/image";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div>© App Name. All rights reserved.</div>
			<div className={styles.social}>
				<Image src="/1.png" alt="fb" width={25} height={25} className={styles.icon} />
				<Image src="/2.png" alt="insta" width={25} height={25} className={styles.icon} />
				<Image src="/3.png" alt="twitter" width={25} height={25} className={styles.icon} />
				<Image src="/4.png" alt="yt" width={25} height={25} className={styles.icon} />
			</div>
		</div>
	);
};

export default Footer;
 