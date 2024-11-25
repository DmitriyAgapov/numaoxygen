'use client';

import React, { type ElementRef, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const dialogRef = useRef<ElementRef<'div'>>(null);
	//
	useEffect(() => {
		// if (!dialogRef.current?.open) {
		// 	dialogRef.current?.showModal();
		// }
		setOpen(true);
	}, []);

	const onDismiss =  React.useCallback((event: any)  => {
		// event.target.onClick = console.log('oClick');

		console.log('click', open);
		if(open && event.target !== dialogRef.current) {
			event.stopPropagation();
			console.log('click', event.target, event.current, event.currentTarget)

			router.back();
			setOpen(false);
		}

	},[open]);

	return createPortal(
		<div className="modal-backdrop" data-state={open}>
			<div className={'absolute top-0 left-0 right-0 bottom-0'} onClick={onDismiss}></div>
			{/*<form className={"card_modal"} >*/}
			{/*	{children}*/}

			{/*</form>*/}
			<div ref={dialogRef} className="modal z-10">
				{children}
				<button onClick={onDismiss} className="close-button"/>
			</div>
		</div>,
		document.getElementById('modal-root')!
	);
}
