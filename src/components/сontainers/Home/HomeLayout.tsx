import React from "react"
import styled, { AnyStyledComponent } from "styled-components"
// material ui
import Typography from "@material-ui/core/Typography"
// styles
import { InfinitBounce } from "components/styles/animations"

const HomeLayout: React.FunctionComponent<HomeLayoutProps> = ({ children }: HomeLayoutProps) =>
	<HomeContainer>
		<TitleHomeContainer variant="h1" component="h1"> Robots List <InfinitBounce>🤖</InfinitBounce></TitleHomeContainer>
		{children}
	</HomeContainer>


/* types*/
interface HomeLayoutProps {
	children: React.ReactChild
}

/* styles*/
const TitleHomeContainer: AnyStyledComponent = styled(Typography)`
	text-align: center;
	padding: 10px 0;
`

const HomeContainer: AnyStyledComponent = styled.div`
	position: relative;
	height: 100%;
`

export default HomeLayout
