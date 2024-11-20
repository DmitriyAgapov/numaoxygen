'use client'
import React, { useState } from 'react';
import styles from './Header.module.scss';
import logoImg from "../../../public/logo.svg"
import logoImgW from "../../../public/img/logo-white.svg"
import Image from "next/image";

import { mockData } from "@/app/data/data"
import Link from "next/link";

function Logo() {
	return <Link href={mockData.config.url}><Image src={logoImg} alt={""}/></Link>;
}
function LogoDrawer() {
	return <div className={styles.logodrawer}><Link href={mockData.config.url}><Image src={logoImgW} alt={""}/></Link></div>;
}


function Menu() {
	return <ul className={"menu  gap-4 items-center hidden desktop:flex"}>
		{mockData.header.menu.items.map((item) => <li className={"m-0"} key={item.title}>{item.link ? <Link href={item.link} className={styles.menuLink}>{item.title}</Link> : <span>|</span>}</li>)}
	</ul>;
}

function CTA() {
	return <ul className={styles.cta + " " + "cta  hidden desktop:flex gap-4"}>
		{mockData.header.cta.map((item, index) => <li key={item.title} className={`item-${index}`}><Link href={item.link}>{item.title}</Link></li>)}
	</ul>;
}
const Burger = ({state,...props}: {state: boolean}) => {
	return (
		<div className={styles.burger + " " + (state ? " active" : "")} {...props}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}
function Backdrop({state}: {state: boolean }) {
	return <div className={styles.backdrop}  data-open={state}/>
}
function Drawer({ state}: {state: boolean }) {
	return <nav className={styles.drawer} data-open={state}>
		<LogoDrawer />
		<Menu/>
	</nav>;
}

const Header = () => {
	const [state, setState] = useState(false);


	return (
		<header className={styles.Header}>
			<Drawer state={state}/>
			<Backdrop state={state}/>
			<Logo />
			<Menu/>
			<CTA/>
			<Burger state={state}
				/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
				// @ts-ignore
				onClick={() => setState((prevState) => !prevState)}/>
		</header>
	);
};

export default Header;
