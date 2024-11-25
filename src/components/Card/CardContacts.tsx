import React from 'react';
import styles from './Card.module.scss';
import Image from "next/image";
import { CardProps } from "@/data/data";

const CardContacts = (props: { el: CardProps }) => {


	return <div className={styles.CardContacts + " " + " card"}
		data-cardtype={props.el.type}>
		<header className={styles.cardcontactsheader}>

			{props.el.title && <h3>{props.el.title}</h3>}

		</header>
		{props.el.img?.src && <div className={"card-image-wrapper row-span-2 row-start-1"}>
			<Image fill={true}
				style={{ width: "100%", objectFit: "contain", height: "100%" }}
				src={props.el.img.src}
				alt={""}/>
		</div>}

		{props.el.description && <article className={"description row-start-2"}>{props.el.description}</article>}
		{props.el.textHtml && props.el.textHtml ? <article className={"description row-start-2"}>
				<div dangerouslySetInnerHTML={{ __html: props.el.textHtml }}/>
			</article>
			: <></>}
		{props.el.icon ? <div data-variant={"icon"}
			className={"row-span-2"}
			dangerouslySetInnerHTML={{ __html: props.el.icon }}/> : null}

	</div>;
}
export default CardContacts;
