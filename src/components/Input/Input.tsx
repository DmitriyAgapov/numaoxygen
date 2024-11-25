import React from 'react';

const Input = ({label, ...props}: {label: string} & React.InputHTMLAttributes<any>) => {
	return (
		<label className={"block"} htmlFor={props.name}>
			{label && <span className={'text-sm'}>{label}</span>}
			<input className={"mt-1 block w-full"} id={props.name} {...props}/>
		</label>
	);
};

export default Input;
