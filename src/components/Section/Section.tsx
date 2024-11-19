import React from 'react';
import styles from './Section.module.scss';
import Link from "next/link";

type CustomLink = {
	title: string
	link: string
}
interface SectionProps {
	title?: string
	description?: string | React.ReactNode
	bg?: unknown
	cards?: never[]
	link?: CustomLink
	className?: string
}

const Section = ({title, description, bg, cards, link, className = ""}:SectionProps) => {
	console.log(title, description, bg, cards, link, className)
	return (
		<section className={styles.Section + " " + className} style={bg ? {margin:0, gridColumn: "1/-1",backgroundPosition: "center center", backgroundImage: `url(${bg})`, minHeight: "620px"} : {}}>
			{title && <header>
				<h2>{title}</h2>
			</header>}
			{description && <article>
				{description}
			</article>}
			{cards && <div className={styles.cards}>
				{cards}
			</div>}
			{link && <footer>
				<Link href={link.link}>{link.title}</Link>
			</footer>}
		</section>
	);
};

export default Section;
