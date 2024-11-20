import React from 'react';
import styles from './Header.module.scss';
import logoImg from "../../../public/logo.svg"
import Image from "next/image";

import { mockData } from "@/app/data/data"
import Link from "next/link";

function Logo() {
	return <Link href={mockData.config.url}><Image src={logoImg} alt={""}/></Link>;
}

function Menu() {
	return <ul className={"menu flex gap-4 items-center"}>
		{mockData.header.menu.items.map((item) => <li className={"m-0"} key={item.title}>{item.link ? <Link href={item.link} className={styles.menuLink}>{item.title}</Link> : <span>|</span>}</li>)}
	</ul>;
}

function CTA() {
	return <ul className={styles.cta + " " + "cta flex gap-4"}>
		{mockData.header.cta.map((item, index) => <li key={item.title} className={`item-${index}`}><Link href={item.link}>{item.title}</Link></li>)}
	</ul>;
}

const Header = () => {
	return (
		<header className={styles.Header}>
			<Logo/>
			<Menu/>
			<CTA/>
		</header>
	);
};

export default Header;
