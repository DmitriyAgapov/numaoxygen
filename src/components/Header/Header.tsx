import React from 'react';
import styles from './Header.module.scss';
import logoImg from "../../../public/logo.svg"
import Image from "next/image";

import { mockData } from "@/app/data/data"
import Link from "next/link";

function Logo() {
	return <Image src={logoImg} alt={""}/>;
}

function Menu() {
	return <ul className={"menu flex gap-4"}>
		{mockData.header.menu.items.map((item) => <li key={item.title}><Link href={item.link} >{item.title}</Link></li>)}
	</ul>;
}

function CTA() {
	return <ul className={"cta flex gap-4"}>
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
