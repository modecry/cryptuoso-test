import * as React from "react"
// next components
import Link from "next/link"


const Layout: React.FunctionComponent = ({ children }: LayoutPropsInterface) =>
	<>
		<header>
			<nav>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/details">
					<a>Details</a>
				</Link>
			</nav>
		</header>
		{children}
	</>

/* prrops*/
export interface LayoutPropsInterface {
	children: React.ReactNode
}

export default Layout
