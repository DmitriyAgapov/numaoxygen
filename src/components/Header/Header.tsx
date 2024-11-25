'use client'
import React, { useState } from 'react';
import styles from './Header.module.scss';
import logoImg from "../../../public/logo.svg"
import logoImgW from "../../../public/img/logo-white.svg"
import Image from "next/image";

import { mockData } from "@/data/data"
import Link from "next/link";

function Logo() {
	return <Link href={"/"}><Image src={logoImg} alt={""}/></Link>;
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
		{mockData.header.cta.map((item, index) => <li key={item.title} className={`item-${index}`}><Link href={item.link} passHref>{item.title}</Link></li>)}
	</ul>;
}
const Burger = ({state, onClick, ...props}: {state: boolean, onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void }) => {
	return (
		<div className={styles.burger + " " + (state ? " active" : "")} onClick={(event) => onClick(event)} {...props}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}
const Backdrop = ({state,  ...props}: {state: boolean, onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void }) => {
	return <div className={styles.backdrop}  data-open={state} onClick={props.onClick} {...props}/>
}
function Drawer({state, action}: {state: boolean, action: () => void  }) {
	return <nav className={styles.drawer} data-open={state} onClick={action}>
		<LogoDrawer />
		<Menu/>
		<CTA/>
	</nav>;
}

const Header = () => {
	const [state, setState] = useState(false);

	const handleChangeDrawerState =  React.useCallback(() => setState((prevState) => !prevState), [])
	return (
		<header className={styles.Header} >
			<Drawer state={state} action={handleChangeDrawerState}/>
			<Backdrop state={state} onClick={handleChangeDrawerState}/>
			<Logo />
			<Menu/>
			<CTA/>
			<Burger state={state} onClick={handleChangeDrawerState}/>
		</header>
	);
};

export default Header;
