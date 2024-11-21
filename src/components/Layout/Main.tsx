'use client'
import React, { FC } from "react";
import { ChildrenProps } from "@/components/Layout/Layout";
import { usePathname } from 'next/navigation'

const Main: FC<ChildrenProps> = (props: { children}) => {
	const pathname = usePathname()
	return <main data-route={`page-${pathname.slice(1,)}`}>{props.children}</main>;
}
export default Main
