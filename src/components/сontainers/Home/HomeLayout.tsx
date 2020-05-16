import React from "react"
import styled, { AnyStyledComponent } from "styled-components"
// material ui
import Typography from "@material-ui/core/Typography"


const HomeLayout: React.FunctionComponent = ({ children }: HomeLayoutTypes) =>
	<>
		<TitleHomeContainer variant="h1" component="h1"> Robots List 🤖</TitleHomeContainer>
		{children}
	</>


/* types*/
type HomeLayoutTypes = {
	children: React.ReactChildren
}

/* styles*/
const TitleHomeContainer: AnyStyledComponent = styled(Typography)`
	text-align: center;
	padding: 10px 0;
`

export default HomeLayout
