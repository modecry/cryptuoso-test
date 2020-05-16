import * as React from "react"
import styled,{ AnyStyledComponent } from "styled-components"
// next components
import Link from "next/link"
import Head from "next/head"

const Layout: React.FunctionComponent = ({ children, title }: LayoutPropsInterface) =>
	<>
		<Head>
			<title>{title}</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<MainLayoutContent>
			{children}
		</MainLayoutContent>
	</>

/* prrops*/
export interface LayoutPropsInterface {
	children: React.ReactNode
	title?: string
}

/* styles*/
const MainLayoutContent: AnyStyledComponent = styled.div`
	width: 80%;
	height: 100%;
	margin: 0 auto;
`


export default Layout
