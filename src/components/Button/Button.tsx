import React from 'react';
import styles from './Button.module.scss';
import Link from "next/link";
enum ButtonType {
	default = "default",
	link = "link",
	primary = "primary",
	secondary = "secondary"
}
interface ButtonProps {
	src: string
	title: string
	type?: ButtonType
	className?: string
}

const Button = ({src, title, type = ButtonType.default, ...props}:ButtonProps) => {
	return (
		<Link  href={src} className={styles.Button + " "   +  " button"} data-variant={type} {...props}>{title}</Link>
	);
};

export default Button;
