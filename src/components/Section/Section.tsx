import React from 'react';
import styles from './Section.module.scss';
import { VideoComponent } from "@/components/Video/Video";
import Button from "@/components/Button/Button";
import Image from "next/image";

export type CustomLink = {
	title: string
	link: string
}

export enum SectionType {
	default = "default",
	filled = "filled",
	page = "page"
}

interface SectionProps {
	video?: {
		src: string
	}
	title?: string
	description?: string | React.ReactNode
	bg?: unknown
	img?: {
		width?: number
		height?: number
		className?: string
		src: string
		alt: string
	}
	cards?: any
	textHtml?: React.ReactNode
	link?: CustomLink
	className?: string
	type?: SectionType
}

const Section = ({ title, video, textHtml, description, img, bg, cards, link, className = "", type = SectionType.default }: SectionProps) => {
	// console.log(title, description, bg, cards, link, className)
	const isOnlyBg = () => {
		let value = false;
		const ar = [ title, video, textHtml, description, cards, link ];
		ar.forEach(el => {
			if (el) value = true;
		})
		return !value ? "max-h-72 tablet-max:!min-h-64" : ""
	}
	const currentBg = isOnlyBg();
	return (
		<section data-sectiontype={type}
			className={styles.Section + " " + className + currentBg}
			style={bg ? { margin: 0, backgroundSize: "cover", gridColumn: "1/-1", backgroundPosition: "center center", backgroundImage: `url(${bg})`, minHeight: "620px" } : {}}>
			{title && <header>
				<h2>{title}</h2>
			</header>}
			{description && <article>
				{description}
			</article>}
			{img && <figure className={img.className}>
				<Image {...img}/>
			</figure>}

			{textHtml && <article>
				<div dangerouslySetInnerHTML={{ __html: textHtml }}></div>
			</article>}
			{video && <VideoComponent src={video.src}/>}
			{cards && <div className={styles.cards}
				data-cards-direction={cards.some(el => {

					return el.props['data-cardtype'] === "faq" || el.props.el?.type === "faq"
				}) ? "vertical" : "horizontal"}>
				{cards}
			</div>}
			{link && <footer>
				<Button src={link.link}
					title={link.title}/>
			</footer>}
		</section>
	);
};

export default Section;
