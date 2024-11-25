import React from 'react';
// import styles from './Input.module.scss';

const Input = ({label, ...props}: {label: string} & React.InputHTMLAttributes<any>) => {
	return (
		<label className={"block"} htmlFor={props.name}>
			{label && <span className={'text-sm'}>{label}</span>}
			<input className={"mt-1 block w-full"} {...props}/>
		</label>
	);
};

export default Input;
