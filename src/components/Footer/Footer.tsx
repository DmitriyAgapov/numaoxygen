import React from 'react';
import styles from './Footer.module.scss';
import { mockData } from "@/data/data";
import Link from "next/link";

const TopFooter = () => <div className={styles.TopFooter}>

	<div>
		<h6 className="num-subscribe__title">Subscribe for UMA’s updates</h6>
		<p className="num-subscribe__text">Stay on top of the latest blog posts, news and announcements</p>
	</div>

	<div>
		<div className="num-subscribe__form">


			<form id="mc4wp-form-1"
				className="mc4wp-form mc4wp-form-160"
				method="post"
				data-id="160"
				data-name="Subscribe Form">
				<div className="flex gap-6">
					<input type="email"
						name="EMAIL"
						placeholder="Enter email to sign up"
						autoComplete="off"
						required/>
					<button type="submit">
						<svg xmlns="http://www.w3.org/2000/svg"
							width="18.78"
							height="18.78"
							viewBox="0 0 18.78 18.78">
							<path id="Path_10"
								data-name="Path 10"
								d="M9.39,0,7.683,1.707l6.463,6.463H0v2.439H14.146L7.683,17.073,9.39,18.78l9.39-9.39Z"
								fill="#add8cc"></path>
						</svg>
					</button>
				</div>
				<input type="hidden"
					name="_mc4wp_timestamp"
					value="1732071942"/><input type="hidden"
				name="_mc4wp_form_id"
				value="160"/><input type="hidden"
				name="_mc4wp_form_element_id"
				value="mc4wp-form-1"/>
			</form>
		</div>
	</div>

</div>
const BottomFooter = () => <div className={styles.BottomFooter}>
	<p className={'m-0'} dangerouslySetInnerHTML={{__html:mockData.config.disclaimer}}/>
	<ul>
		{mockData.footer.bottomMenu.items.map((el, index) => <li key={el.link + index}><Link href={el.link as string}>{el.title}</Link></li>)}
	</ul>
</div>
const CenterFooter = () => <div className={styles.CenterFooter + " " + "lg:flex justify-between py-8 items-start gap-8"}>
	<div className={"flex-1"}>
		<h6>HBOT</h6>
		<ul className={'lg:grid grid-rows-3 grid-flow-col'}>
			{mockData.footer.menu.items.slice(0, -3).map((el, index) => <li key={el.link + index}><Link href={el.link as string}>{el.title}</Link></li>)}
		</ul>
	</div>
	<div className={"flex-0"}>
		<h6>HBOT</h6>
		<ul className={''}>
			{mockData.footer.menu.items.slice(-3).map((el, index) => <li key={el.link + index}><Link href={el.link as string}>{el.title}</Link></li>)}
		</ul>
	</div>
	<div className={"flex-[1]  items-start"}>
		<ul className={"m-0"}>
			<h6>Address</h6>
			<p>{mockData.config.address}</p>
			<p>{mockData.config.secondAddres}</p>
			<h6>Contact Us</h6>
			<p>{mockData.config.phone}, {mockData.config.secondPhone} or <a href={`mailto:${mockData.config.email}`}>{mockData.config.email}</a>  for information & appointments.</p>

		</ul>
	</div>


</div>
const Footer = () => {
	return (
		<footer className={styles.Footer}>
			<TopFooter/>
			<CenterFooter/>
			<BottomFooter/>
		</footer>
	);
};

export default Footer;
