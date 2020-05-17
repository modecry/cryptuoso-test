import * as React from "react"
import styled,{ AnyStyledComponent } from "styled-components"
// next components
import Head from "next/head"

/**
 * Главный шаблон приложения
 * @interface LayoutProps
 */
const MainLayout: React.FunctionComponent<LayoutProps> = ({ children, title }: LayoutProps) =>
	<>
		<Head>
			<title>{title}</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<MainLayoutContent>
			{children}
		</MainLayoutContent>
	</>

/* props*/
interface LayoutProps {
	children: React.ReactChild // пробрасываемая страница
	title: string // Заголовок страницы
}

/* Стили лейаута */
const MainLayoutContent: AnyStyledComponent = styled.div`
	width: 80%;
	height: 100%;
	margin: 0 auto;
`

export default MainLayout
