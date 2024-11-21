'use client'
import React, { useState } from 'react';
import styles from './Card.module.scss';
import Image from "next/image";
import { VideoComponent } from "@/components/Video/Video";
import { CardProps } from "@/data/data";
import { Chevron } from "@/utils/icons";

const CardFaq = (props: { el: CardProps }) => {
	console.log(props)
	const [state, setState] = useState(false);

	return <div className={styles.CardFaq + " " + " card"}data-open={state} data-cardtype={props.el.type}>
		<header className={styles.cardfaqheader}  onClick={() => setState(prevState => !prevState)} >

			{props.el.title && <h3>{props.el.title}</h3>}
			<div data-variant={styles.faq} style={Object.assign({transition: ".2s ease-in-out"},(state ? {transform: "rotate(180deg)"} : {transform: "rotate(0)"}))}><Chevron/></div>
		</header>
		{props.el.img?.src && <div className={"card-image-wrapper"}>
			<Image fill={true} style={{ width: "100%", objectFit: "contain", height: "100%" }}   src={props.el.img.src}      alt={""}/>
		</div>}
		{props.el.video && <VideoComponent src={props.el.video.src}/>}
		{props.el.description && <article className={"description"}>{props.el.description}</article>}
		{props.el.textHtml && props.el.textHtml ? <div dangerouslySetInnerHTML={{ __html: props.el.textHtml }}/> : <></>}
	</div>;
}
export default CardFaq;
