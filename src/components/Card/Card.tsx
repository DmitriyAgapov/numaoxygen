import React from 'react';
import styles from './Card.module.scss';
import Image from "next/image";
import { VideoComponent } from "@/components/Video/Video";
import { CardProps } from "@/data/data";
import CardFaq from "@/components/Card/CardFaq";

const Card = (props: { el: CardProps }) => {
	if(props.el.type === "faq") {
		return <CardFaq el={props.el}/>
	}
	return <div className={styles.Card + " " + " card " + props.el.className} data-cardtype={props.el.type}>
		{props.el.icon ? <div data-variant={"icon"}
			dangerouslySetInnerHTML={{ __html: props.el.icon }}/> : null}
		{props.el.title && <h3>{props.el.title}</h3>}
		{props.el.img?.src && <div className={"card-image-wrapper"}>
			<Image fill={true} style={{ width: "100%", objectFit: "contain", height: "100%" }}   src={props.el.img.src}      alt={""}/>
		</div>}
		{props.el.video && <VideoComponent src={props.el.video.src}/>}
		{props.el.description && <article className={"description"}>{props.el.description}</article>}
		{props.el.textHtml && props.el.textHtml ? <div dangerouslySetInnerHTML={{ __html: props.el.textHtml }}/> : <></>}
	</div>;
}
export default Card;
