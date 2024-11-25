'use client'
import { mockData } from "@/data/data";
import Input from "@/components/Input/Input";
import React, { useRef } from "react";

const Form = ({ id }: {id: string}) => {
	const form = useRef(null)
	const handleClick = React.useCallback((event:   any) => {
		event.preventDefault()
		const data = new FormData(form.current)
		console.log('event', data);
		const ar = []
		console.log('formValues', data);
		data.forEach(e => {
			ar.push(e)
		})
		alert(ar.toString())

	},[form])
	const _form = mockData.forms[Number(id) - 1]
	return (
		<form ref={form} className={"grid-cols-2"} onSubmit={handleClick}>
			<h3 className={'col-span-full mt-0'}>{_form.title}</h3>
			{_form.inputs.map(i => <Input label={i.label} {...i} key={i.name}/>)}
			<button type={"submit"} className={'mt-6 bg-fontColor p-2 w-full text-white hover:opacity-85'}>Send</button>
		</form>
	)
}
export default Form
